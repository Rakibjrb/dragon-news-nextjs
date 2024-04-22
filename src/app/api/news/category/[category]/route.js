import { newsCollection } from "@/app/api/db/db";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const category = req.url.split("category/")[1];
    if (category === "All") {
      const newses = await newsCollection.find({}).toArray();
      return NextResponse.json({ data: newses });
    }
    const newses = await newsCollection.find({ category }).toArray();
    return NextResponse.json({ data: newses });
  } catch (error) {
    return NextResponse.json({ message: "something went wrong", error });
  }
};
