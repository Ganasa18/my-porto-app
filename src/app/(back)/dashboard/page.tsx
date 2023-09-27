import Link from "next/link";
import React from "react";
import LayoutePageAdmin from "../layout-page-admin";
import DashboardAdminPage from "@/components/molecules/admin/dashboard-admin/dashboard-admin";

const AdminDashboard = () => {
  return (
    <LayoutePageAdmin>
      <DashboardAdminPage />
    </LayoutePageAdmin>
  );
};

export default AdminDashboard;
