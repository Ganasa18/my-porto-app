import React from "react";

interface CardDashboardAdminProps {
  label?: string;
  count?: number;
  subtitle: string;
  icon: any;
}

const CardDashboardAdmin: React.FC<CardDashboardAdminProps> = ({
  label = "Total",
  count,
  subtitle,
  icon,
}) => {
  return (
    <div className="px-6 py-5 flex flex-col relative flex-1 gap-y-3 rounded shadow ring-1 ring-gray-400/15 dark:shadow-black dark:ring-gray-400/20">
      <div className="flex flex-col flex-nowrap gap-y-5 ">
        <div className="flex flex-row justify-between">
          <span className="text-slate-200 font-medium">{label}</span>
          <h3 className="text-[5rem] mt-4">{count ?? 0}</h3>
          {icon}
        </div>
        <h3 className="text-3xl font-bold">{subtitle}</h3>
        <div className="w-2 h-4/5 bg-dark-blue absolute left-0  rounded-e-md" />
      </div>
    </div>
  );
};

export default CardDashboardAdmin;
