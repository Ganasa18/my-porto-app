import React from "react";

const DashboardAdminPage = () => {
  return (
    <div className="mx-auto h-full max-w-7xl">
      <h1 className="text-2xl font-semibold">Welcome to Dashboard</h1>
      <p className="font-medium text-lg text-secondary mb-4">
        Let`s check your dashboard data.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="p-4 flex flex-col flex-1 gap-y-3 rounded shadow ring-1 ring-gray-400/15 dark:shadow-black dark:ring-gray-400/20">
          <div className="flex flex-col gap-y-5">
            <div>ICON</div>
            <h3 className="text-2xl">Subtitle</h3>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-1 gap-y-3 rounded shadow ring-1 ring-gray-400/15 dark:shadow-black dark:ring-gray-400/20">
          <div className="flex flex-col gap-y-5">
            <div>ICON</div>
            <h3 className="text-2xl">Subtitle</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdminPage;
