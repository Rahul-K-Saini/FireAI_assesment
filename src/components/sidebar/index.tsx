import Link from "next/link";
import { Button } from "@/components/ui/button";
import { menuItems, appItems } from "./data";
import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Sidebar() {
  return (
    <div className="pb-12 px-3 min-h-screen h-full bg-white dark:bg-gray-950 flex flex-col">
      <div className="pt-4 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image src="/logo.webp" width={30} height={30} alt="logo_img" />
          <h1 className="font-bold dark:text-white">Trading</h1>
        </div>
        <div>
          <ChevronRight size={18} className="text-gray-600 dark:text-gray-400" />
        </div>
      </div>
      <div className="space-y-4 py-4">
        <div>
          <h2 className="mb-2 px-1 text-sm text-gray-500 dark:text-gray-400">MENU</h2>
          <div className="space-y-1 ">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "ghost"}
                className="w-full justify-start dark:hover:bg-gray-800"
                asChild
              >
                <Link href="#">
                  <item.icon
                    className={`mr-2 h-4 w-4 text-gray-500 ${
                      index == 0 ? "text-white" : ""
                    } dark:text-gray-400`}
                  />
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <hr className="px-6 dark:border-gray-800" />
        <div>
          <h2 className="mb-2 px-1 text-sm text-gray-500 dark:text-gray-400">APPS</h2>
          <div className="space-y-1">
            {appItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start dark:hover:bg-gray-800"
                asChild
              >
                <Link href="#">
                  <item.icon className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4 mt-1">
        <div className="flex flex-col gap-1 bg-gray-100 dark:bg-gray-900 py-3 px-2 rounded-md">
          <div className="flex justify-between items-center rounded p-2 bg-white dark:bg-gray-800">
            <p className="text-gray-500 dark:text-gray-400 text-xs">Account:</p>
            <span className="flex text-xs font-semibold dark:text-white">
              9999999
              <ChevronDown size={16} />
            </span>
          </div>
          <div className="flex justify-between items-center rounded p-2 bg-white dark:bg-gray-800">
            <p className="text-gray-500 dark:text-gray-400 text-xs">Status:</p>
            <span className="flex items-center gap-1 text-xs font-semibold dark:text-white">
              Active
              <span className="rounded-full bg-green-500 h-2 w-2"></span>
            </span>
          </div>
          <div className="flex justify-between items-center rounded-md p-2 bg-white dark:bg-gray-800">
            <p className="text-gray-500 dark:text-gray-400 text-xs">Program:</p>
            <span className="flex text-xs font-semibold dark:text-white">$50,000 Evl.</span>
          </div>
        </div>

        <div className="flex items-center gap-3 fixed bottom-0 p-2 cursor-pointer">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg" alt="Profile" />
            <AvatarFallback>DS</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate dark:text-white">Daniel Sullivan</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">alex@gmail.com</p>
          </div>
          <ChevronDown size={16} className="text-gray-500 dark:text-gray-400" />
        </div>
      </div>
    </div>
  );
}