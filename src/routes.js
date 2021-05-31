import React from "react";

const FileDownloader = React.lazy(() => import("pages/FileDownloader"));

const routes = [
  {
    enabled: true,
    path: "/file-downloader",
    component: FileDownloader,
    navbar: "File Downloader",
    child: null,
  }
];

export default routes.filter((route) => route.enabled);
