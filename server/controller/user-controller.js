

export const  userSignup =  (request, response) => {
    try {
        const user = request.body;
        
    }
    catch(error){
        console.log("Error calling usersignup api " + error.message)
    }
}