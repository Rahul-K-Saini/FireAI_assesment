import { MoreVertical, ShieldAlert, Target } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MetricCard = ({
  title,
  amount,
  subtitle,
  level,
  levelAmount,
  icon: Icon,
  iconColor,
  levelColor,
  bgColor,
}: {
  title: string;
  amount: string;
  subtitle: string;
  level: string;
  levelAmount: string;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  iconColor: string;
  levelColor: string;
  bgColor: string;
}) => (
  <Card className="border shadow-sm">
    <CardHeader className="flex-row items-center justify-between space-y-0 pb-1">
      <div className="flex items-center gap-2">
        <div className={`rounded-full p-1 ${bgColor}`}>
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
        <div>
          <h3 className="font-semibold text-sm">{title}</h3>
          <p className="text-xs text-muted-foreground">Of {subtitle}</p>
        </div>
      </div>
      <Button variant="ghost" size="icon">
        <MoreVertical className="h-4 w-4" />
      </Button>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        <p className="text-lg font-bold">{amount}</p>
        <hr />
        <p className="text-xs text-muted-foreground">
          {level}{" "}
          <span className={`font-medium ${levelColor}`}>{levelAmount}</span>
        </p>
      </div>
    </CardContent>
  </Card>
);

const MostTraded = () => {
  const pairs = [
    { name: "NZDUSD", color: "bg-blue-500" },
    { name: "GBPUSD", color: "bg-red-500" },
    { name: "AUDCHF", color: "bg-cyan-500" },
    { name: "USDCHF", color: "bg-blue-200" },
    { name: "XAUUSD", color: "bg-red-200" },
    { name: "AUDNZD", color: "bg-cyan-200" },
  ];

  return (
    <Card className="border shadow-sm">
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <h3 className="font-semibold pl-2">Most Traded</h3>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2" style={{height:"0px"}}>
          {pairs.map((pair) => (
            <div key={pair.name} className="flex items-center gap-2">
              <span className={`h-2.5 w-1.5 rounded-sm ${pair.color}`} />
              <span className="text-sm font-medium">{pair.name}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <div className="relative h-16 w-16">
            <svg className="h-full w-full" viewBox="0 0 100 100">
              <circle
                className="stroke-blue-500"
                cx="50"
                cy="50"
                r="45"
                fill="none"
                strokeWidth="10"
                strokeDasharray="220"
                strokeDashoffset="66"
                strokeLinecap="round"
              />
              <circle
                className="stroke-red-500"
                cx="50"
                cy="50"
                r="45"
                fill="none"
                strokeWidth="10"
                strokeDasharray="70"
                strokeDashoffset="-154"
                strokeLinecap="round"
              />
              <circle
                className="stroke-cyan-500"
                cx="50"
                cy="50"
                r="45"
                fill="none"
                strokeWidth="10"
                strokeDasharray="50"
                strokeDashoffset="-84"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-sm font-medium">Total</span>
              <span className="text-xl font-bold">16</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function TradingMetrics() {
  return (
    <div className="space-y-3">
      <div className="flex gap-4 mt-1">
        <MetricCard
          title="Profit Target"
          amount="$8,908.99"
          subtitle="$12,000.90"
          level="Equity Pass Level"
          levelAmount="$124,900.00"
          icon={Target}
          iconColor="text-blue-500"
          bgColor="bg-blue-50"
          levelColor="text-blue-500"
        />
        <MetricCard
          title="Daily Loss Limit"
          amount="$12,908.99"
          subtitle="$12,000.90"
          level="Equity Breach Level"
          levelAmount="$124,900.00"
          icon={ShieldAlert}
          iconColor="text-red-500"
          bgColor="bg-red-50"
          levelColor="text-red-500"
        />
      </div>
      <div>
        <MostTraded />
      </div>
    </div>
  );
}
