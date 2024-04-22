import { NextResponse } from "next/server";
import { newsCollection } from "../db/db";

export const GET = async () => {
  try {
    const newses = await newsCollection.find({}).toArray();
    return NextResponse.json({ data: newses });
  } catch (e) {
    return NextResponse.json({ message: "something went wrong", error: e });
  }
};
