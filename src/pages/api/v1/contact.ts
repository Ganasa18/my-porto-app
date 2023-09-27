import type { NextApiRequest, NextApiResponse } from "next";
import handleSendContactMe from "./(contact-me-handler)/send-contact";

// export const config = {
//   api: {
//     bodyParser: false, // Disable the default body parsing
//   },
// };

type ResponseData = {
  message: string;
  data?: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    handleSendContactMe(req, res);
  } else {
    res.status(405).end();
  }
}
