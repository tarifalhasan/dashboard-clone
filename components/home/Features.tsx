import { ReactNode } from "react";
import {
  BsCurrencyDollar,
  BsFillBagCheckFill,
  BsPeopleFill,
} from "react-icons/bs";
interface FeaturesCardProps {
  bgColor: string;
  totalCount: string;
  des: string;
  icon: ReactNode;
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({
  bgColor,
  totalCount,
  des,
  icon,
}) => {
  return (
    <div
      style={{ background: `${bgColor}` }}
      className="  rounded-lg p-4  space-y-4"
    >
      <h3 className=" text-2xl font-bold text-black">{totalCount}</h3>
      <p className=" capitalize text-base font-normal text-[#777C83]">{des}</p>
      <div className=" w-14 h-14 bg-white rounded-full grid place-items-center">
        {icon}
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className=" grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
      <FeaturesCard
        icon={<BsCurrencyDollar className="text-2xl" />}
        totalCount={"$2500"}
        des="Total Revenue"
        bgColor="#ECF3FE"
      />
      <FeaturesCard
        icon={<BsPeopleFill className="text-2xl" />}
        totalCount={"15,000"}
        des="Total Customers"
        bgColor="#E5F7E8"
      />
      <FeaturesCard
        icon={<BsFillBagCheckFill className="text-2xl" />}
        totalCount={"5,255"}
        des="Total order"
        bgColor="#FFEFEB"
      />
      <FeaturesCard
        icon={<BsFillBagCheckFill className="text-2xl" />}
        totalCount={"5,255"}
        des="Total delevery"
        bgColor="#E6F5F9"
      />
    </div>
  );
};

export default Features;
