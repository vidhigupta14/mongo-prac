import { NextResponse } from 'next/server';
import { connectToMongoDB } from '@/lib/mongodb';

export async function POST(request) {
    const formData = await request.formData();
    console.log("formData:", formData);

    const client = await connectToMongoDB();
    const db = client.db("users");
    const collection = db.collection("mongo-prac");

    const userData = {
        name: formData.get("name"),
        email: formData.get("email"),
        age: parseInt(formData.get("age"))
    };

    await collection.insertOne(userData);

    return NextResponse.json({ message: 'Data received and saved' });
}