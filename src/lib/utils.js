import mongoose from 'mongoose';

const mongodbConnection = process.env.MONGODB_URL;

const connection = {};

export const connectToDb = async () => {
    try {
        if (connection.isConnected) {
            console.log("Using existing connection");
            return;
        }
        const db = await mongoose.connect(mongodbConnection);
        connection.isConnected = db.connections[0].readyState;
        console.log("Connected to the mongodb database!");
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}