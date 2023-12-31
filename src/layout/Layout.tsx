import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface LayoutProps {
  childrens: React.ReactNode;
}
export default function Layout({ childrens }: LayoutProps) {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <div>{childrens}</div>
      <Footer />
    </div>
  );
}
