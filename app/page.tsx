import Features from "@/components/home/Features";
import MonthlyProfit from "@/components/home/MonthlyProfit";
import Orders from "@/components/home/Orders";
import Profile from "@/components/home/Profile";
import TotalSalesChats from "@/components/home/TotalSalesChats";
import UpgradePro from "@/components/home/UpgradePro";

export default function Home() {
  return (
    <div className=" w-full space-y-7 h-full">
      <div className=" flex gap-7 flex-col lg:flex-row">
        <div className=" basis-[70%] w-full flex flex-col gap-y-7">
          <Features />
          <TotalSalesChats />
        </div>
        {/* Profile */}
        <div className=" basis-[30%] w-full ">
          <Profile />
        </div>
      </div>
      <div className="flex gap-7 flex-col lg:flex-row">
        <div className=" basis-[70%] w-full grid lg:grid-cols-2 gap-7">
          <Orders />
          <MonthlyProfit />
        </div>
        <div className=" basis-[30%] w-full">
          <UpgradePro />
        </div>
      </div>
    </div>
  );
}
