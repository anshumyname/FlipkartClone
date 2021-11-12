
import User from "../model/User-Schema.js";

export const  userSignup =  async (request, response) => {
    try {
        const exist = await User.findOne({username: request.body.username});
        if(exist){
            return response.status(401).json('Username already exist');
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save()

        response.status(200).json('User is sucessfully registered')
    }
    catch(error){
        console.log("Error calling usersignup api " + error.message)
    }
}

export const userLogin  = async (request, response) => {
    try {
        let user = await User.findOne({username: request.body.username, password: request.body.password});
        
        if(user){
            response.status(200).json(`${request.body.username} Login Sucessfull` );
        }else{
            return response.status(401).json('Invalid Login');
        }

    }
    catch(error){
        console.log("Error while calling user login api", error.message)
    }
}