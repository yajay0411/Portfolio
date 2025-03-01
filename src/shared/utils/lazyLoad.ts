import React from "react";

export const lazyLoad = (componentName: string) => {
  return React.lazy(() => import(/* @vite-ignore */`../../components/pages/${componentName}`));
};
