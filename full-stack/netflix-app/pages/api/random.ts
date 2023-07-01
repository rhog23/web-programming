import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    await serverAuth(req, res);

    const movieCount = await prismadb.movie.count(); // get movie count
    const randomIndex = Math.floor(Math.random() * movieCount); // generate random index, to be used in getting a movie's detail

    const randomMovie = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex,
    });

    return res.status(200).json(randomMovie[0]);
  } catch (error) {
    console.log(error);
  }
}
