import { BiDotsHorizontalRounded, BiSolidBellRing } from "react-icons/bi";
import { FaCreditCard, FaUserPlus } from "react-icons/fa";
import ActivityCard from "./ActivityCard";
const Profile = () => {
  return (
    <div className=" h-full space-y-5 rounded-sm p-5 bg-white">
      <div className=" flex items-center justify-between">
        <h3 className=" text-xl font-medium">Profile</h3>
        <div className=" cursor-pointer w-12 h-12 rounded-full bg-white shadow-lg grid place-items-center">
          <BiSolidBellRing className="text-xl text-gray-400" />
        </div>
      </div>
      <div className=" space-y-5">
        <div className=" overflow-hidden bg-white block mx-auto w-44 h-44 p-2  shadow rounded-full">
          <img
            src={
              "https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/285414166_914222256637182_560420761218931446_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeF0NECdAiTlokmmExsnSlKLHfz9XRhdUs4d_P1dGF1SzuOOPKlPNou0Qi1DJWC26n8f1Yc4L0S7yr6dIu30Aafc&_nc_ohc=v1fXL1qjfFkAX9Clb02&_nc_ht=scontent.fdac22-1.fna&oh=00_AfA-99abdHR6pmwYAG5WC_tdwYW4l-hK5mfM5DlMnU25ww&oe=650493C0"
            }
            className=" w-full h-full object-cover rounded-full"
            alt="tarif"
          />
        </div>
        <div>
          <h3 className=" text-xl font-medium text-center text-black">
            Tarif AL Hasan
          </h3>
          <p className=" text-base text-center font-normal">
            Software Developer
          </p>
        </div>
      </div>
      {/* Activites */}
      <div className=" pt-5">
        <div className=" flex items-center justify-between">
          <h4 className="  text-lg  font-medium text-black">Activity Feed</h4>
          <button>
            <BiDotsHorizontalRounded className="text-gray-400" size={24} />
          </button>
        </div>
        <ul className=" space-y-5 py-5">
          <ActivityCard
            bgColor="#FEF2F2"
            title="New User Registation"
            dec="55 Users"
            icon={<FaUserPlus className="text-2xl text-[#EB635F]" />}
          />
          <ActivityCard
            bgColor="#F0F3FF"
            title="Credit Card Payment"
            dec="Total $5000"
            icon={<FaCreditCard className="text-2xl text-[#4C64F5]" />}
          />
          <ActivityCard
            bgColor="#FFF6EE"
            title="Bank Transfer Issue"
            dec="Total $5000"
            icon={<FaUserPlus className="text-2xl text-[#EE7F0E]" />}
          />
        </ul>
      </div>
    </div>
  );
};

export default Profile;
