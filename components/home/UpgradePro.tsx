import rocket from "@/public/Rocket-PNG-Image.png";
import Image from "next/image";
const UpgradePro = () => {
  return (
    <div className=" h-full bg-white rounded-md p-4 relative">
      <div>
        <Image
          className=" block mx-auto max-w-[50%]"
          src={rocket}
          alt="rockey"
        />
      </div>
      <div className=" space-y-2">
        <p className=" text-center text-base text-gray-500 font-normal">
          Unlock for more Information
        </p>
        <p className=" text-center text-base text-black font-medium">
          Upgrade a Pro
        </p>
        <button className=" w-full bg-[#3B4EBE] py-3 rounded-md text-white">
          Upgrade a Pro
        </button>
      </div>
    </div>
  );
};

export default UpgradePro;
