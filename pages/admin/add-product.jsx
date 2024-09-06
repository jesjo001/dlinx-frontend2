import * as React from "react";
import ProductForm from "../../components/tables/Forms/productForm";
import { useRouter } from "next/navigation";
import Admin from "../../layouts/Admin";
import { GrFormPreviousLink } from "react-icons/gr";


export default function ProductTable() {
  const router = useRouter();
  return (
    <div>
      <div className=" pt-20 overflow-hidden">
        <div className={` flex flex-col justify-center w-full h-full overflow-hidden`}>
          <h1 className="text-black uppercase font-bold text-[18px] mb-8">
            Add Product
          </h1>

          <div className="flex flex-col gap-4 justify-center w-full items-center h-full">
            <div className="rounded-t bg-white mb-0 px-6 py-6 w-full">
            <div className="text-center flex justify-between w-full">
              <button
                onClick={() => router.push('/admin/products')}
                className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                <GrFormPreviousLink size={20} />
              </button>
              <button
                className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Update Product
              </button>
            </div>
          </div>
            <ProductForm />
           
          </div>
        </div>
      </div>
    </div>
  );
}

ProductTable.layout = Admin;
