const { Nuxt, Builder } = require('nuxt')
const app = require('express')()
const http = require('http')
const https = require('https')
const fs = require('fs-extra')

let server
let ip
const isProd = (process.env.NODE_ENV === 'production')
const port = process.env.PORT || 5000
const host = process.env.HOST || '94.138.204.26'

// Prepare for HTTP or HTTPS
if (port === 4001 ) {
  console.log("Go SSL");
  const pkey = fs.readFileSync('/key.key')
  const pcert = fs.readFileSync('/cert.cert')
  const httpsOptions = {
    key: pkey,
    cert: pcert
  }

  console.log(pcert);
  server = https.createServer(httpsOptions, app)
} else {
  server = http.createServer(app)
}

// We instantiate nuxt.js with the options
const config = require('./nuxt.config_web.js')

config.dev = !isProd
const nuxt = new Nuxt(config)

// Render every route with Nuxt.js
app.use(nuxt.render)

function listen () {
  // Listen the server
  // app.listen(port, '0.0.0.0');
  server.listen(port, host)
  console.log(`Server listening on localhost:${port}.`)
}

// Build only in dev mode with hot-reloading
if (config.dev) {
  new Builder(nuxt).build()
    .then(listen)
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
} else {
  listen()
}