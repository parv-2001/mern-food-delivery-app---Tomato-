import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://parvchoudharytatarpur:OYriM1Y2MiZkm92m@cluster0.erlgqwj.mongodb.net/food-del').then(() => console.log("DB Connected"))
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.