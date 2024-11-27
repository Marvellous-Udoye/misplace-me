import React, { useState } from "react";
import MyReportsTab from "../components/reports/myReportsTab";
// import ReportTab from "../components/reports/reportTab";

type TabType = "Reports" | "My Reports";

const Reports: React.FC = () => {
  const [activeReportTab, setActiveReportTab] = useState<TabType>("Reports");

  // const handleReportTabClick = (tab: TabType) => {
  //   setActiveReportTab(tab);
  // };

  return (
    <div className="flex px-4 md:px-10 my-10">
      {/* <section className="w-full">
        <div className="flex items-end leading-6 sm:leading-8 gap-5 md:gap-[30px] font-medium text-sm sm:text-base cursor-pointer md:pl-4">
          <p
            className={`sm:py-1 border-b-[2px] hover:text-blue-400 ${activeReportTab === "Reports" ? "text-blue-400 border-b-blue-400 transition ease duration-300ms" : "border-b-white"}`}
            onClick={() => handleReportTabClick("Reports")}
          >
            Reports
          </p>
          <p
            className={`sm:py-1 border-b-[2px] hover:text-blue-400 ${activeReportTab === "My Reports" ? "text-blue-400 border-b-blue-400 transition ease duration-300ms" : "border-b-white"}`}
            onClick={() => handleReportTabClick("My Reports")}
          >
            Report History
          </p>
        </div>

        <div className="my-4 pt-5">
          {activeReportTab === 'Reports' ? (
            <ReportTab />
          ) : (
            <MyReportsTab />
          )}
        </div>
      </section> */}

      <section className="w-full">
        <MyReportsTab />
      </section>
    </div>
  );
};

export default Reports;