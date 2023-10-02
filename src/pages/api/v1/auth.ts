import { NextApiRequest, NextApiResponse } from "next";
import handlerLogin from "./(auth)/login-handler";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    handlerLogin(req, res);
  } else {
    res.status(405).end();
  }
}
