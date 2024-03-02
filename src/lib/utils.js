const { Mongoose } = require("mongoose")

const connection = {};

export const connectToDb = async () => {
    try {
        if(connection.isConnected){
            console.log("Using existing connection");
            return;
        }
        const db = await Mongoose.connect(process.env.MONGO)
        connection.isConnected = db.connections[0].readyState;
    } catch(error) {
        console.log(error)
        throw new Error("Error connecting to Database")
    }
}