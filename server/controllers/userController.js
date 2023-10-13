import userModel from "../models/userModel.js"

class userController{
    static createUser = async(req,resp)=>{
          const{name,email,age} = req.body
          const {filename} = req.file
          try {
            if(name && email&& age){
                
                const checkEmail = await userModel.findOne({email})
                if(!checkEmail){
                     const newUser = new userModel({name,email,age,profile:filename})
                     const result = await newUser.save()
                      resp.json({msg:result})
                     
                }else{
            resp.json({msg:"User with this email already exists"})

                }
            }else{
            resp.json({msg:"All fields are required"})

            }
          } catch (error) {
            resp.json({msg:error.message})
          }
    }
    static getUser = async(req,resp)=>{
     try {
        const allUsers = await userModel.find({})
        if(allUsers){
           resp.json(allUsers)
        } else{
            resp.json({msg:"Something wrong happened in fetching all users"})
        }
     } catch (error) {
        resp.json({msg:error.message})
     }
      

    }
}
export default userController