import { NextResponse } from "next/server";
import { newsCollection } from "../../db/db";
import { ObjectId } from "mongodb";

export const GET = async (req) => {
  try {
    const id = req.url.split("news/")[1];
    const newsById = await newsCollection.findOne({ _id: new ObjectId(id) });
    return NextResponse.json(newsById);
  } catch (error) {
    return NextResponse.json({ message: "something went wrong", error });
  }
};
