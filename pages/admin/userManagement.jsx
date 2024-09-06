import React from "react";

import Admin from "../../layouts/Admin.js";

export default function userManagement() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center w-full h-full">
        <h1>User Management Page</h1>
      </div>
    </>
  );
}

UserManagement.layout = Admin;
