import express  from "express";
import mongoose from "mongoose";
import { Connection } from "./database/db.js";
import dotenv from 'dotenv';
import defaultData from './default.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import Routes from './routes/route.js'

dotenv.config()
const app = express();

app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use('/',Routes)



const PORT = 8000;

const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD

Connection(username, password)
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

// data to database
defaultData()
