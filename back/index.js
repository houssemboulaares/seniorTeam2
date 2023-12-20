const express = require('express');
 const db=require('./database-squelize/index')
const app = express();
 const router=require('./Routes/RoutsProducts')
 const userRouter = require('./Routes/UserRoute.js')
 const categRouter = require('./Routes/CategoryRoute.js')
const PORT = 3000;
const cors=require('cors')
app.use(cors())
app.use(express.json())

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
 app.use('/api',router)
 app.use('/api/users',userRouter)
 app.use('/api/categories',categRouter)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
  