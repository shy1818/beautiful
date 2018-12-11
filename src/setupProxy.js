 const proxy = require('http-proxy-middleware')

 module.exports=function(app){
     app.use(proxy('/ml',{
         target:'https://webservice.juanpi.com',
         changeOrigin:true,
         pathRewrite:{
             '^/ml':''
         }
     })),
     app.use(proxy('/shop',{
        target:'http://simba-api.meilishuo.com',
        changeOrigin:true,
        pathRewrite:{
            '^/shop':''
        }
    })),
    app.use(proxy('/mg',{
        target:'https://mce.mogucdn.com',
        changeOrigin:true,
        pathRewrite:{
            '^/mg':''
        }
    })),
    app.use(proxy('/sousuo',{
        target:'https://search.mogujie.com',
        changeOrigin:true,
        pathRewrite:{
            '^/sousuo':''
        }
    })),
    app.use(proxy('/clothes',{
        target:'http://act.meilishuo.com/',
        changeOrigin:true,
        pathRewrite:{
            '^/clothes':''
        }
    }))
  
     
 }