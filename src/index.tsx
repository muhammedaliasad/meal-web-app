import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./layout/Layout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Layout childrens={<App />} />
  </React.StrictMode>
);

