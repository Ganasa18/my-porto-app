import { PrismaClient } from "@prisma/client";
import { v2 as cloudinary } from "cloudinary";
import type { NextApiRequest, NextApiResponse } from "next";
import handlePost from "./(project-handler)/create";
import handleGet from "./(project-handler)/get";
const prisma = new PrismaClient();

cloudinary.config({
  cloud_name: "dqirl1vss",
  api_key: "186637592429193",
  api_secret: "MlyLRdwSn3uCJb9wl8K8ee-m43Y",
});

export const config = {
  api: {
    bodyParser: false, // Disable the default body parsing
  },
};

type ResponseData = {
  message: string;
  data?: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "GET") {
    handleGet(req, res);
  } else if (req.method === "POST") {
    handlePost(req, res);
  } else {
    res.status(405).end();
  }
}
