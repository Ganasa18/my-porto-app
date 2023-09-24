import { NextApiResponse } from "next";

export function sendResponse(
  res: NextApiResponse,
  statusCode: number | 400,
  message: string,
  data?: any
) {
  res.status(statusCode).json({ message, data });
}
export function sendResponseError(
  res: NextApiResponse,
  statusCode: number | 500,
  message: string,
  error?: any
) {
  res.status(statusCode).json({ status: "error", message, error });
}
