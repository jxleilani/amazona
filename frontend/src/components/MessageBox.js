import React from "react";

function MessageBox({ children, variant }) {
  return <div className={`alert alert-${variant || "info"}`}>{children}</div>;
}

export default MessageBox;
