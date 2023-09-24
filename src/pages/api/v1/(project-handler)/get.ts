import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { sendResponse, sendResponseError } from "@/middleware/response-custom";
const prisma = new PrismaClient();

type ResponseData = {
  message: string;
  data?: string[];
};

export default async function handleGet(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    try {
      const projects = await prisma.project.findMany({
        where: { is_show: true },
      });
      sendResponse(res, 200, "Successfully", projects);
    } catch (error) {
      sendResponseError(res, 400, "Cannot find data");
    }
  } catch (error) {
    sendResponseError(res, 500, "Interval Server Error");
  }
}
