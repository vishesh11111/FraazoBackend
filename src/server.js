const router = require("./index");

const connect = require("./configs/db");
var port = process.env.PORT || 3000
router.listen(port, async()=>{
    try{
        await connect();

    }catch(error){
        console.log(error);
    }
    console.log(`runninyyy ${port} M >>>`)
})