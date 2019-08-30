# Nuxt + Electron + Express Api

> The vue&nuxt project with express api for electron production

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# development with vue devtools
$ npm run dev

# build for production
$ npm run build

# The problem:
server/ klasörü içinde  index.js dosyasını bulacaksın. ( Express bu klasör altında çalışıyor, servermiddleware ile)
Dosyayı açtığında (34.satırda)  
    const md5 = require('md5');
    const graphqlHTTP = require('express-graphql') 

paketleri deaktif ettiğinde sistem çalışırken 
paketleri aktif ettiğinde sistem cannot get / hatası veriyor ve fail oluyor.

electron-build işlemi opsiyonları & entegrasyonunu main.js dosyasında bulabilirsin.
Build işlemi içerisinde devtools da açık durumda.

npm run ile çalıştırabileceğin scriptler
    dev: "cross-env NODE_ENV=DEV electron .", 
    build: "nuxt build && cross-env DEBUG=electron-builder electron-builder ", 
    build2: "nuxt build  && electron-builder NODE_ENV=production node server.js",
    build3: "nuxt build",
    electron: "electron-builder"



For detailed explanation on how things work, checkout [Nuxt.js](https://github.com/nuxt/nuxt.js), [Electron.js](https://electronjs.org/), and [electron-builder](https://www.electron.build/).
