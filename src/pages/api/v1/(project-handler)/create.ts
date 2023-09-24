import { uploadSingleFromBuffer } from "@/lib/upload-buffer";
import { titleToSlug } from "@/lib/utils";
import { sendResponse, sendResponseError } from "@/middleware/response-custom";
import { PrismaClient } from "@prisma/client";
import multer from "multer";
import type { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

const storage = multer.memoryStorage(); // Use memory storage for uploaded files
const upload = multer({ storage });

interface MulterFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination: string;
  filename: string;
  path: string;
  buffer: Buffer;
}

interface MulterRequest extends NextApiRequest {
  file: MulterFile;
}

let uploader = upload.single("file");

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  try {
    uploader(req as any, res as any, async (error) => {
      if (error) {
        sendResponseError(res, 400, "Internal Server Error", error.message);
      }

      const data = (req as MulterRequest).body;
      data.image = (req as MulterRequest).file;

      const slug = titleToSlug(data?.title);
      const uploadData: any = await uploadSingleFromBuffer(data, slug);

      let result = Object.assign(data, {
        slug: slug,
        image: uploadData.secure_url,
      });

      try {
        const project = await createProject(result);
        sendResponse(res, 200, "Created data successfully", project);
      } catch (err: any) {
        sendResponseError(res, 400, "Created data failed", err.message);
      }
    });
  } catch (error) {
    sendResponseError(res, 500, "Internal Server Error");
  }
}

const createProject = async (data: any) => {
  try {
    const project = await prisma.project.create({ data });
    return project;
  } catch (err) {
    throw err;
  } finally {
    await prisma.$disconnect();
  }
};

export default handlePost;
