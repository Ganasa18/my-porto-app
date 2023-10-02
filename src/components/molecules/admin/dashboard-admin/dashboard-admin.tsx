import CardDashboardAdmin from "@/components/atoms/admin-dashboard-card/admin-dashboard-card";
import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const DashboardAdminPage = () => {
  const dashboardDataDummy = [
    {
      label: "Total",
      subtitle: "Project",
      count: 0,
    },
    {
      label: "Total",
      subtitle: "Working",
      count: 0,
    },
  ];

  return (
    <div className="mx-auto h-full max-w-7xl">
      <h1 className="text-2xl font-semibold">Welcome to Dashboard</h1>
      <p className="font-medium text-lg text-secondary mb-4">
        Let`s check your dashboard data.
      </p>
      <div className="flex flex-col md:flex-row gap-5 mt-8">
        {dashboardDataDummy.map((item, index) => (
          <React.Fragment key={index}>
            <CardDashboardAdmin
              label={item.label}
              subtitle={item.subtitle}
              count={item.count}
              icon={
                <AiOutlineFundProjectionScreen className="text-[5rem] mt-2" />
              }
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default DashboardAdminPage;
