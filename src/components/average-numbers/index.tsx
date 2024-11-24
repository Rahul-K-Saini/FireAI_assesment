import { ChevronDown, ChevronUp } from "lucide-react";
import { data } from "./data";

const AverageNumbers = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {data.map((item, index) => (
        <Card
          key={index}
          icon={item.icon}
          color={item.color}
          title={item.title}
          amount={item.amount}
          increase={item.increase}
          decrease={item.decrease}
        />
      ))}
    </div>
  );
};

const Card = ({
  icon: Icon,
  color,
  title,
  amount,
  increase,
  decrease,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  color: string;
  title: string;
  amount: number;
  increase?: number;
  decrease?: number;
}) => {
  const getColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      "blue-600": "text-blue-600 dark:text-blue-400",
      "orange-500": "text-orange-500 dark:text-orange-400",
      "sky-600": "text-sky-600 dark:text-sky-400",
      "green-600": "text-green-600 dark:text-green-400",
      "orange-600": "text-orange-600 dark:text-orange-400",
    };
    return colorMap[color] || "text-gray-600 dark:text-gray-400";
  };

  const getFillColorClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      "blue-600": "fill-blue-600 dark:fill-blue-400",
      "orange-500": "fill-orange-500 dark:fill-orange-400",
      "sky-600": "fill-sky-600 dark:fill-sky-400",
      "green-600": "fill-green-600 dark:fill-green-400",
      "orange-600": "fill-orange-600 dark:fill-orange-400",
    };
    return colorMap[color] || "fill-gray-600 dark:fill-gray-400";
  };

  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow py-4 px-8 flex flex-col gap-6">
      <div>
        <div className="flex gap-2 items-center">
          <Icon
            size={16}
            className={`${getColorClass(color)} ${getFillColorClass(color)}`}
            fill="currentColor"
            strokeWidth={1}
          />
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            {title}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {title === "Profit Factor" ? amount : `$${amount}`}
        </h3>
        {increase && (
          <span className="bg-blue-200 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded py-0.5 px-1 text-sm flex items-center">
            <ChevronUp size={12} fill="currentColor" strokeWidth={1} />
            {increase}
          </span>
        )}
        {decrease && (
          <span className="bg-red-200 dark:bg-red-900 text-red-600 dark:text-red-300 rounded py-0.5 px-1 text-sm flex items-center">
            <ChevronDown size={12} fill="currentColor" strokeWidth={1} />
            {decrease}
          </span>
        )}
      </div>
    </div>
  );
};

export default AverageNumbers;
