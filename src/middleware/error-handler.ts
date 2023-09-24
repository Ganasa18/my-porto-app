// import { AppError } from "@/pages/api/v1/(project-handler)/create";
// import { NextApiRequest, NextApiResponse } from "next";

// export const errorHandler =
//   (handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) =>
//   async (req: NextApiRequest, res: NextApiResponse) => {
//     try {
//       await handler(req, res);
//     } catch (error) {
//       if (error instanceof AppError) {
//         return res
//           .status(error.statusCode)
//           .json({ status: error.status, message: error.message });
//       } else {
//         res
//           .status(500)
//           .json({ status: "error", message: "Internal Server Error" });
//       }
//     }
//   };
