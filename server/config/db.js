import mongoose from 'mongoose'

const connectToMongo = async () =>{
    try{

    }catch(error){
        console.log(error);
    }
    await mongoose.connect("")
}

export default connectToMongo;