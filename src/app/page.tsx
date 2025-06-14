import Dashboard from "@/components/Dashboard";
import DashboardLayout from "@/components/templates/DashboardLayout";
import React from "react";

const page = () => {
  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  );
};

export default page;
