import React from "react";
import ProductTable from "../../components/tables/productTables";
import Admin from "../../layouts/Admin";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-[60px]">
        <div className="w-full mb-12 px-4 mt-[60px]">
          <ProductTable />
        </div>
      </div>
    </>
  );
}

Tables.layout = Admin;
