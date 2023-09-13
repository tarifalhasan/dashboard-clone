import React, { ReactNode } from "react";

interface ActivityCardProps {
  icon: ReactNode;
  bgColor: string;
  title: string;
  dec: string;
}
const ActivityCard: React.FC<ActivityCardProps> = ({
  icon,
  bgColor,
  title,
  dec,
}) => {
  return (
    <li className=" flex items-start gap-4">
      <span
        style={{ background: `${bgColor}` }}
        className=" w-14 h-14  rounded-lg grid place-items-center"
      >
        {icon}
      </span>
      <span className=" flex flex-col justify-between">
        <h6 className=" text-base text-black font-medium">{title}</h6>
        <p className=" text-sm font-normal text-gray-400 ">{dec}</p>
      </span>
    </li>
  );
};

export default ActivityCard;
