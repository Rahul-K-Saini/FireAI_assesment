import { Button } from "@/components/ui/button";
import { DollarSign, Share2 } from "lucide-react";
import ModeToggle from "../theme/mode-toggle";

const Header = () => {
  return (
    <header className="flex rounded items-center justify-between py-6 px-8 bg-white dark:bg-gray-950">
      <h1 className="text-2xl font-bold tracking-tight text-[#1E293B] dark:text-white">
        Welcome back, Alex
      </h1>
      <div className="flex items-center gap-3">
        <Button className="bg-[#2563EB] hover:bg-[#2563EB]/90 dark:bg-[#2563EB] dark:hover:bg-[#2563EB]/80 text-white font-medium">
          <DollarSign className="mr-2 h-4 w-4" />
          Request Payout
        </Button>
        <Button
          variant="outline"
          className="bg-[#EEF2FF] border-[#EEF2FF] text-[#2563EB] hover:bg-[#EEF2FF]/80 hover:text-[#2563EB] hover:border-[#EEF2FF] dark:bg-[#1E293B] dark:border-[#1E293B] dark:text-[#60A5FA] dark:hover:bg-[#1E293B]/80 dark:hover:text-[#60A5FA] dark:hover:border-[#1E293B]"
        >
          <Share2 className="mr-2 h-4 w-4" />
          Share Matrices
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <ModeToggle />
        </Button>
      </div>
    </header>
  );
};

export default Header;