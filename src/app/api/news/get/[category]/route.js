import { newsCollection } from "@/app/api/db/db";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const queryValue = req.url.split("?")[1].split("=")[1];

    if (queryValue === "All") {
      const newses = await newsCollection.find({}).toArray();
      return NextResponse.json({ data: newses });
    }

    const query = {
      category: queryValue,
    };

    const newses = await newsCollection.find(query).toArray();
    return NextResponse.json({ data: newses });
  } catch (error) {
    return NextResponse.json({ message: "something went wrong", error });
  }
};
