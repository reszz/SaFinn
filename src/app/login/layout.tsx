import AuthLayout from "../../components/templates/AuthLayout";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default Layout;
