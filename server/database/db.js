import mongoose from 'mongoose';


export const Connection = async (username, password) => {
    try{
        const URL = `mongodb://${username}:${password}@flipkart-clone-shard-00-00.cfny2.mongodb.net:27017,flipkart-clone-shard-00-01.cfny2.mongodb.net:27017,flipkart-clone-shard-00-02.cfny2.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-atrma7-shard-0&authSource=admin&retryWrites=true&w=majority`;
        await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Databse success connect');
    }
    catch(error){
        console.log("Error connecting database : " + error)
    }

}