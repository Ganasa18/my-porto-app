import React from "react";

interface HeaderCompTitleProps {
  title: string;
  subtitle: string;
}

const HeaderCompTitle: React.FC<HeaderCompTitleProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-1 mb-20">
      <h5 className="text-sm text-slate-300 font-medium">{title}</h5>
      <h2 className="text-3xl text-light-blue dark:text-slate-200 font-semibold">
        {subtitle}
      </h2>
    </div>
  );
};

export default HeaderCompTitle;
