import AverageNumbers from "./average-numbers";
import Header from "./header";
import { Sidebar } from "./sidebar";
import TotalBalance from "./totalBalance";
import TradingMetrics from "./trading-metrics";
import Notifications from "./notifications";
import { OrderHistory } from "./order-history";

export default function Dashboard() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen flex">
      <aside className="sm:w-1/6 w-[12%]">
        <Sidebar />
      </aside>
      <section className="flex-1 w-5/6 px-4">
        <div className="flex flex-col gap-4 flex-wrap">
          <Header />
          <div className="flex gap-4">
            <div className="w-[65%]">
              <TotalBalance />
            </div>
            <div>
              <TradingMetrics />
            </div>
          </div>
          <div className="flex justify-between gap-5">
            <AverageNumbers />
            <Notifications />
          </div>
          <div>
            <OrderHistory />
          </div>
        </div>
      </section>
    </main>
  );
}
