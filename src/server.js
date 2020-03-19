import express from 'express'
import { createRenderer } from 'vue-server-renderer'

import createApp from './app'

const renderer =  createRenderer()
const app = express()

app.use(express.static(__dirname))

app.get('*', (req, res) => {
  const { app, router } = createApp()
  
  // 设置服务器端 router 的位置
  router.push(req.url)

  // 等到 router 将可能的异步组件和钩子函数解析完
  router.onReady(() => {
    const matchedComponents = router.getMatchedComponents()
    // 匹配不到的路由，执行 reject 函数，并返回 404
    if (!matchedComponents.length) {
      return res.status(404).send()
    }

    renderer.renderToString(app, (err, html) => {
      if (err) {
        res.status(500).end('Internal Server Error')
        return
      }
      res.end(`
        <!DOCTYPE html>
        <html lang="en">
          <head><title>Hello</title></head>
          <body>
            <div id="app">${html}</div>
            <script src="bundle.js"></script>
          </body>
        </html>
      `)
    })
  })
})

app.listen(2048, () => console.log('server is ready: http://localhost:2048'))