import React from "react";
import DataTable from "./dataTable";
import { columns } from "./columns";
import data from "../../Data.json";

const CityTable = () => {
  return (
    <div className="w-full">
      <div className="relative w-full pt-6 xl:pt-12">
        <div className="absolute inset-0">
          <img
            alt="Hero"
            className="object-cover w-full h-[calc(100%_24px)] sm:h-full"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "1440/300",
              objectFit: "cover",
            }}
            width="1440"
          />
          <div className="absolute inset-0 bg-gray-900/50 mix-blend-overlay" />
        </div>
        <div className="relative z-10 grid max-w-7xl grid-cols-12 mx-auto items-center px-4 space-y-4 lg:space-y-0">
          <div className="space-y-2 col-span-6 lg:col-start-5 lg:col-span-7">
            <h1 className="text-4xl font-bold tracking-tighter lg:text-5xl xl:text-6xl/none">
              Data Table
            </h1>
            <p className="max-w-[600px] text-gray-100 md:text-xl dark:text-gray-400">
              Display information in rows and columns.
            </p>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="container">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default CityTable;
