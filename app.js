const express = require("express") //import
const config = require("config") //import

const mongoose =require("mongoose") //import
const PORT = config.get("port") // config object-i get methodn enq kanchum u talis enq paramter JSON-i port key@: "port"

const app = express() // stexchum enq express object

const auth_api = require('./routes/auth.routes')
app.use('/api/auth', auth_api)

const node_api = require('./routes/node.routes')
app.use('/api/node', node_api )

// https://www.youtube.com/watch?v=l7-f9gS8VOshttps://www.youtube.com/watch?v=l7-f9gS8VOshttps://www.youtube.com/watch?v=l7-f9gS8VOshttps://www.youtube.com/watch?v=l7-f9gS8VOshttps://www.youtube.com/watch?v=l7-f9gS8VOshttps://www.youtube.com/watch?v=l7-f9gS8VOs
console.log(PORT) //steg uxaki tpup enq stugelu hamarsure


// steg miat A sinxron(vortev steg uzum enq mongoos coneqt anenq) funkcia enq haytararum , srtart anunov,

async function start(){
    try{
        console.log('2222222')
        await mongoose.connect(config.get("mongooseUri"), {
                useNewUrlParser: true,
                useUnifiedTopology: true
                // useCreateIndex: true
            }
        )
        app.listen(PORT,()=> console.log("my first web server"))
    }
    catch(e){
        console.log("server error", e.message)
        process.exit(1)
    }
    finally {
        console.log("pollyubmu es ashxatum a !!!")
    }
}
start().then((res) => {
    console.log(res);
})