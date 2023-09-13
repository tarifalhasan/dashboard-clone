import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BiMenuAltLeft } from "react-icons/bi";
import Sidebar from "./Sidebar";
const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <BiMenuAltLeft />
      </SheetTrigger>
      <SheetContent>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
