import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    password: String,
    id: String,
})

export default mongoose.model('User', userSchema);
