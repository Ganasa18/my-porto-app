"use client";
import React, { useEffect } from "react";
import Button from "../../../atoms/button/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Cta = () => {
  const router = useRouter();

  const downloadPdfFile = () => {
    window.open(
      "https://drive.google.com/file/d/15F2gTRdZMgSTenXPat_GDw_ESgMVENO3/view",
      "_blank"
    );
  };

  const navigateContactMe = () => {
    router.push("/contact");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      className="cta space-x-3 mt-2">
      <Button onClick={() => downloadPdfFile()} variant={"default"}>
        Download CV
      </Button>
      <Button variant={"normal"} onClick={() => navigateContactMe()}>
        Contact Me
      </Button>
    </motion.div>
  );
};

export default Cta;
