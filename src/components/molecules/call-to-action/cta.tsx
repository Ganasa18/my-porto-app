import React from "react";
import Button from "../../atoms/button/button";

const Cta = () => {
  const downloadPdfFile = () => {
    window.open(
      "https://drive.google.com/file/d/15F2gTRdZMgSTenXPat_GDw_ESgMVENO3/view",
      "_blank"
    );
  };

  return (
    <div className="cta space-x-3 mt-2">
      <Button onClick={() => downloadPdfFile()} variant={"default"}>
        Download CV
      </Button>
      <Button variant={"normal"}>Let`s Talk</Button>
    </div>
  );
};

export default Cta;
