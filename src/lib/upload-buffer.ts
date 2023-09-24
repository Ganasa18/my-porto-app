import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

export const uploadSingleFromBuffer = (req: any, name?: string) => {
  return new Promise((resolve, reject) => {
    let cld_upload_stream = cloudinary.uploader.upload_stream(
      {
        public_id: name !== "" ? name : "img" + Date.now(),
      },
      (error: any, result: any) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    );

    streamifier.createReadStream(req.image.buffer).pipe(cld_upload_stream);
  });
};
