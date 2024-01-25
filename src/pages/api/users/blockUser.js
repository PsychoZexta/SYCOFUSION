
import connectDB from "@/middlewares/connectDB";
import User from "@/models/User";
const { ObjectId } = require('mongodb');

const handler = async (request, response) => {

    const user = request.body.user;
    const userToBlock = request.body.userToBlock;
    try {
        const person = await User.findOne({username: user});
        
        
        // 2. Update the followers array by adding user ID
        person.blockedUsers.push(userToBlock);
    
        // 3. Save the changes to the database
        await person.save();

        return response.status(200).json({type: "success", message: `Blocked ${userToBlock}`})
}

catch (error){
        return response.status(200).json({type: "error", message: `Error occured`})

    }
      
   
}


export default connectDB(handler); 