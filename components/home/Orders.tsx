import { FaBasketballBall, FaShoppingBag } from "react-icons/fa";
import { FcFlashAuto } from "react-icons/fc";
import ActivityCard from "./ActivityCard";
const Orders = () => {
  return (
    <div className=" bg-white rounded-sm ">
      <div className=" p-4 flex items-center justify-between">
        <h3 className=" text-2xl font-semibold text-black">
          Today&apos;s Orders
        </h3>
        <button className="text-blue-500 text-sm font-medium">View all</button>
      </div>
      <hr className=" h-[1px] bg-gray-100" />
      <div className="  px-4 py-10 w-full">
        <ul className=" space-y-7 w-full ">
          <li className=" flex items-center w-full justify-between">
            <ActivityCard
              bgColor="#FFF6EE"
              title="Basketball"
              dec="sports"
              icon={<FaBasketballBall className="text-2xl  text-amber-300" />}
            />
            <h3 className=" text-2xl font-semibold  text-blue-600">$250</h3>
          </li>
          <li className=" flex items-center w-full justify-between">
            <ActivityCard
              bgColor="#FFF5F4"
              title="Travel Bag"
              dec="travel"
              icon={<FaShoppingBag className="text-2xl   text-blue-600" />}
            />
            <h3 className=" text-2xl font-semibold  text-blue-600">$250</h3>
          </li>
          <li className=" flex items-center w-full justify-between">
            <ActivityCard
              bgColor="#EBF5FD"
              title="Dumble"
              dec="accessories"
              icon={<FcFlashAuto className="text-3xl  text-amber-300" />}
            />
            <h3 className=" text-2xl font-semibold  text-blue-600">$250</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Orders;
