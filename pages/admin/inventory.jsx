import React from "react";
import InventoryTable from "../../components/tables/inventoryTable";
import Admin from "../../layouts/Admin";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-[60px]">
        <div className="w-full mb-12 px-4 mt-[60px]">
          <InventoryTable />
        </div>
      </div>
    </>
  );
}

Tables.layout = Admin;
