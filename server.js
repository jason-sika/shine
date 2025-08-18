// live server for this directory with CORS *
import { createServer } from 'node:http'
import serve from 'serve-static'
import finalhandler from 'finalhandler'

const server = createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://discord.com')
  res.setHeader('Access-Control-Expose-Headers', 'https://discord.com')
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin')
  res.setHeader('Timing-Allow-Origin', 'https://discord.com')
  // handle options request
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Access-Control-Allow-Private-Network', 'true')
    res.setHeader('Access-Control-Max-Age', '86400')
    res.writeHead(204)
    res.end()
    return
  }
  serve('./')(req, res, finalhandler(req, res))
}).listen(5050)

console.log(`Server running at http://localhost:${server.address().port}/`)
