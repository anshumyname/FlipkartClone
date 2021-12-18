import mongoose from 'mongoose';


export const Connection = async (URL) => {
    try{
        
        await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Databse success connect');
    }
    catch(error){
        console.log("Error connecting database : " + error)
    }

}