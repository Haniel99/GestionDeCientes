const { Router } = require("express");
const fs = require("fs");
const path = __dirname;
const router = Router();

/**
 * @function fs.readdirSync
 * This function imports the paths of the diferect files and then used 
 * for the router
 * @constant router
 */
fs.readdirSync(path).filter((name)=> {
    const newName = name.split('.').shift();
    if(newName != 'index'){
        const newRouter = require(`./${newName}`);    
        router.use(`/${newName}`,newRouter.router);
    }
});

module.exports = {router};