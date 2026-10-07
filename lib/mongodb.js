import { MongoClient } from "mongodb";

export async function connectToMongoDB() {
    const client = new MongoClient(process.env.MONGODB_URI);

    try {
        await client.connect();
        console.log("You successfully connected to MongoDB!");
        return client;
    } catch (err) {
        console.error("MongoDB connection error:", err);
        throw err;
    }
}

export async function disconnectFromMongoDB(client) {
    await client.close();
}