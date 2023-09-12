import dynamic from "next/dynamic";

const ApexPieChart = dynamic(() => import("./PieChart"), {
  ssr: false, // Disable server-side rendering for this component
});

const MonthlyProfit = () => {
  return (
    <div className=" bg-white rounded-sm ">
      <div className=" p-4 flex items-center justify-between">
        <h3 className=" text-2xl font-semibold text-black">Monthly Profits</h3>
      </div>
      <hr className=" h-[1px] bg-gray-100" />
      <div className="  px-4 gap-y-5 py-10 w-full flex flex-col  md:flex-row items-center md:justify-between">
        <ul className=" pt-4 space-y-5 ">
          <li className=" flex items-start gap-6">
            <span className="s block mt-2 w-5 h-5 bg-amber-300 rounded-full"></span>
            <div>
              <h4 className=" text-2xl font-bold p-0 m-0">40%</h4>
              <p className=" text-base text-gray-500">Sport accessories</p>
            </div>
          </li>
          <li className=" flex items-start gap-6">
            <span className="s block mt-2 w-5 h-5 bg-blue-600 rounded-full"></span>
            <div>
              <h4 className=" text-2xl font-bold p-0 m-0">40%</h4>
              <p className=" text-base text-gray-500">Sport accessories</p>
            </div>
          </li>
          <li className=" flex items-start gap-6">
            <span className="s block mt-2 w-5 h-5 bg-red-300 rounded-full"></span>
            <div>
              <h4 className=" text-2xl font-bold p-0 m-0">40%</h4>
              <p className=" text-base text-gray-500">Sport accessories</p>
            </div>
          </li>
        </ul>
        <ApexPieChart />
      </div>
    </div>
  );
};

export default MonthlyProfit;
