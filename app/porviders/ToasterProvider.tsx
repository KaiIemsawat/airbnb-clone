"use client";

import { edgeServerAppPaths } from "next/dist/build/webpack/plugins/pages-manifest-plugin";
import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
    return <Toaster />;
};
export default ToasterProvider;
