import { sendResponse, sendResponseError } from "@/middleware/response-custom";
import { NextApiRequest, NextApiResponse } from "next";

export default function handlerLogin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { username, password } = req.body;
    console.log(username, password, "FROM BODY");
    if (username === undefined || password === undefined) {
      return sendResponseError(res, 400, "Failed to authenticate");
    }
    if (username === "Ganasa" && password === "12345") {
      return sendResponse(res, 200, "Login Successfully", {
        username: username,
        password: password,
      });
    }
    return sendResponseError(res, 400, "Failed to authenticate");
  } catch (error) {
    sendResponseError(res, 400, "Failed to authenticate");
  }
}
