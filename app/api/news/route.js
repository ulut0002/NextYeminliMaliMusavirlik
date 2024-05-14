import { NextResponse } from "next/server";
import { getNews } from "./service";

export async function GET(req) {
  console.log("here");
  const { searchParams } = new URL(req.url);
  const keyword = searchParams.get("keyword");
  const year = searchParams.get("year");
  const limit = searchParams.get("limit");
  const lang = searchParams.get("lang");
  const tags = searchParams.getAll("tags");

  const filteredNewsResponse = await getNews({
    keyword: keyword,
    year: year,
    limit: limit,
    lang: lang,
    tags: tags,
  });

  return NextResponse.json({
    status: 200,
    count: filteredNewsResponse.count,
    data: filteredNewsResponse.data,
  });
}
