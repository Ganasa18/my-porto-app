import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

// Configure your email service
const transporter = nodemailer.createTransport({
  host: "smtp.mailspons.com",
  port: 2525,
  auth: {
    user: "c885fd98006a41debaa7",
    pass: "8f25a7581bce4b0080b4d9419fa55e7e",
  },
});

async function handleSendContactMe(req: NextApiRequest, res: NextApiResponse) {
  try {
    const formData = req.body;

    const mailOptions = {
      from: `${formData.email}`,
      to: "yosualiharja@gmail.com",
      subject: `New email subject ${formData.subject}`,
      text: formData.message,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email" });
  }
}

export default handleSendContactMe;
