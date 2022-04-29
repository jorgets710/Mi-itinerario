const mongoose = require ("mongoose")

mongoose.connect(process.env.MONGO_URI,
                {
                    useUnifiedTopology:true,
                    useNewurlParser:true
                })
                .then(()=> console.log("database connect"))
                .catch((error=>console.error(error)))


