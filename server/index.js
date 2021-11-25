import express  from "express";
import mongoose from "mongoose";
import { Connection } from "./database/db.js";
import dotenv from 'dotenv';
import defaultData from './default.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import Routes from './routes/route.js'
import {v4 as uuid} from 'uuid';

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

export let paytmmerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback'
paytmParams['EMAIL'] = 'srivastavaanshuman33@gmail.com'
paytmParams['MOBILE_NO'] = '6386979429'

