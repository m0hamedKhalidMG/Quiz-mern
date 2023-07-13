import mongoose from "mongoose";
import bcrypt from 'bcrypt';
const User = new mongoose.Schema({
  firstName: { type: String, required: true, max: 100 },
  lastName: { type: String, required: true, max: 100 },
  username: { type: String, required: true, min: 3, max: 20 },
  password: { type: String, required: true, min: 8, max: 15 },
  age: { type: Number },
  active:{type:Boolean},
  phase:{type:String}
});
User.pre("save",async function(next){
    const user = this;
if(!user.isModified("password")){
    return next();}

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
        next();
      } catch (error) {
        return next(error);
      }
    });


export default mongoose.model('UserModel', User)