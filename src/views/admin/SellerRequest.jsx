import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import Pagination from "../Pagination";

const SellerRequest = () => {
  const [parPage, setParPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-[25px] font-bold mb-3">Seller Request</h1>
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
        <div className="flex justify-between items-center">
          <select
            onChange={(e) => setParPage(e.target.value)}
            className="px-4 py-2 hover:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <input
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
            type="text"
            placeholder="search"
          />
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-[#d0d2d6]">
            <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">
                  No
                </th>
                <th scope="col" className="py-3 px-4">
                  Name
                </th>
                <th scope="col" className="py-3 px-4">
                  Email
                </th>
                <th scope="col" className="py-3 px-4">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((d, i) => (
                <tr key={i} className="border-b border-slate-400">
                  <td
                    scope="row"
                    className="py-2 px-4 font-medium whitespace-nowrap"
                  >
                    {d}
                  </td>
                  <td
                    scope="row"
                    className="py-2 px-4 font-medium whitespace-nowrap"
                  >
                    An
                  </td>
                  <td
                    scope="row"
                    className="py-2 px-4 font-medium whitespace-nowrap"
                  >
                    nguyenan@gmail.com
                  </td>
                  <td
                    scope="row"
                    className="py-2 px-4 font-medium whitespace-nowrap"
                  >
                    Inactive
                  </td>
                  <td
                    scope="row"
                    className="py-2 px-4 font-medium whitespace-nowrap"
                  >
                    Deactive
                  </td>
                  <td
                    scope="row"
                    className="py-2 px-4 font-medium whitespace-nowrap"
                  >
                    <div className="flex justify-start items-center gap-4">
                      <Link to={`/admin/dashboard/seller/details/${d}`} className="p-[3px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500">
                        <FaEye />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            parPage={parPage}
            showItem={3}
          />
        </div>
        {/* Pagination End */}
      </div>
    </div>
  );
};

export default SellerRequest;
