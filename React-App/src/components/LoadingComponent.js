import React from "react";

export const Loading = () => {
  return (
    <div className="col-12 mt-5 mb-5">
      <span className="fa fa-spinner fa-pulse fa-4x fa-fw text-primary"></span>
      <span className="text-secondary display-4">Loading...</span>
    </div>
  );
};
