module.exports = function (moduleOptions) { 
 
      // Add middleware only with `nuxt dev` or `nuxt start`
      var fs = require('fs');
  
      // Envirement bilgileri transfer edildi.
      fs.writeFile('envTransfer.txt',  JSON.stringify(this.options.env), function (err) {
        if (err) throw err; 
      });   

    // If options available
    if (this.options.dev || this.options._start ||  process.env.LetsHaveAPray=="go" ) { 
        this.addServerMiddleware('~/server/index.js')
     }

      // this.nuxt.hook('build:compile', async ({name, compiler }) => {
      //   // Called after the renderer was created
      //   this.addServerMiddleware('~/server/index.js')
      // })
  }