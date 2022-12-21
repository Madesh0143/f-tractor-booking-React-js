const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRouter = require('./router/userRouter')
const adminRouter = require('./router/adminRouter')


dotenv.config();

connectDB();
const app = express();

app.use(express.json());
app.use(cors());


app.use('/api/user', userRouter);
app.use('/api/admin', adminRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
    console.log(`SERVER RUNNING A ${process.env.NODE_ENV} MODE ON PORT ${process.env.PORT}`);
})