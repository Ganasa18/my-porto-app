import { sendResponse, sendResponseError } from "@/middleware/response-custom";
import { NextApiRequest, NextApiResponse } from "next";

export default function handlerLogin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { username, password } = req.body;
    console.log(username, password, "FROM BODY");
    sendResponse(res, 200, "Login Successfully");
  } catch (error) {
    sendResponseError(res, 400, "Failed to authenticate");
  }
}
