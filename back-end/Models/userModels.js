import mongoose from 'mongoose';
import mongosse from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String },
    password:{ type: String},
    email: { type: email },
    phone: { type: Number },
})

const User = mongoose.model('users', userSchema);
export default User;