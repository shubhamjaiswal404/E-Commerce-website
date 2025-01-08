import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import moongoose from 'mongoose';
import dotenv from "dotenv";

// Routes for auth
import Register from './routes/user/register.js';
import Login from './routes/user/login.js';

// Routes for admin auth
import adminRegister from './routes/admin/adminRegister.js';
import adminLogin from './routes/admin/adminLogin.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

moongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true })
    .then(() => app.listen(5000))
    .catch((err) => console.error(err.message))

//  Routes for users auth 
app.use('/', Register)
app.use('/', Login)

// Routes for admin auth
app.use('/admin', adminRegister)
app.use('/admin', adminLogin)

