const {Router} = require("express"); 
const {clientController} = require("../controller/clientController");
const router = Router();

router.get('/', clientController);
router.post('/get', (req, res)=>{
    console.log(req);
    res.send("data");
})

module.exports = {router};