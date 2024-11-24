"use client";
import { ChevronLeft, ChevronRight, DollarSign } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { orders } from "./data";
import { useState } from "react";

export function OrderHistory() {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(orders.length / rowsPerPage);
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const currOrders = orders.slice(start, end);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleRowsPerPageChange = (value: string) => {
    setRowsPerPage(Number(value));
    setCurrentPage(1);
  };

  return (
    <Card className="border shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-2">
            <DollarSign className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </div>
          <CardTitle className="dark:text-gray-100">Order History</CardTitle>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
            Open Trades
          </Button>
          <Button
            variant="ghost"
            className="text-gray-500 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Closed Trades
          </Button>
          <Select defaultValue="30">
            <SelectTrigger className="w-[140px] border-0 bg-gray-50 dark:bg-gray-800 dark:text-gray-300">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Last 7 Days</SelectItem>
              <SelectItem value="14">Last 14 Days</SelectItem>
              <SelectItem value="30">Last 30 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="bg-gray-50 dark:bg-gray-800">
            <TableRow>
              <TableHead className="font-medium dark:text-gray-300">
                Symbol
              </TableHead>
              <TableHead className="font-medium dark:text-gray-300">
                Type
              </TableHead>
              <TableHead className="font-medium dark:text-gray-300">
                Open Date
              </TableHead>
              <TableHead className="font-medium dark:text-gray-300">
                Open Price
              </TableHead>
              <TableHead className="font-medium dark:text-gray-300">
                SL
              </TableHead>
              <TableHead className="font-medium dark:text-gray-300">
                TP
              </TableHead>
              <TableHead className="font-medium dark:text-gray-300">
                Close Date
              </TableHead>
              <TableHead className="font-medium dark:text-gray-300">
                Close Price
              </TableHead>
              <TableHead className="font-medium dark:text-gray-300">
                Lots
              </TableHead>
              <TableHead className="font-medium dark:text-gray-300">
                Profit
              </TableHead>
              <TableHead className="font-medium dark:text-gray-300">
                Duration
              </TableHead>
              <TableHead className="font-medium dark:text-gray-300">
                Gain
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currOrders.map((order) => (
              <TableRow key={order.id} className="dark:border-gray-800">
                <TableCell className="dark:text-gray-300">
                  {order.symbol}
                </TableCell>
                <TableCell>
                  <span
                    className={`rounded px-2 py-1 text-xs ${
                      order.type === "Buy"
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400"
                        : "bg-red-50 text-red-500 dark:bg-red-900/50 dark:text-red-400"
                    }`}
                  >
                    {order.type}
                  </span>
                </TableCell>
                <TableCell className="text-gray-500 dark:text-gray-400">
                  {order.openDate}
                </TableCell>
                <TableCell className="dark:text-gray-300">
                  {order.openPrice}
                </TableCell>
                <TableCell className="dark:text-gray-300">{order.sl}</TableCell>
                <TableCell className="dark:text-gray-300">{order.tp}</TableCell>
                <TableCell className="text-gray-500 dark:text-gray-400">
                  {order.closeDate}
                </TableCell>
                <TableCell className="dark:text-gray-300">
                  {order.closePrice}
                </TableCell>
                <TableCell className="dark:text-gray-300">
                  {order.lots}
                </TableCell>
                <TableCell
                  className={
                    order.profit.startsWith("-")
                      ? "text-red-500 dark:text-red-400"
                      : "text-blue-600 dark:text-blue-400"
                  }
                >
                  {order.profit}
                </TableCell>
                <TableCell className="dark:text-gray-300">
                  {order.duration}
                </TableCell>
                <TableCell
                  className={
                    order.gain.startsWith("-")
                      ? "text-red-500 dark:text-red-400"
                      : "text-blue-600 dark:text-blue-400"
                  }
                >
                  {order.gain}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-4 flex items-center justify-between">
          <Select value={String(rowsPerPage)} onValueChange={handleRowsPerPageChange}>
            <SelectTrigger className="w-[130px] border-0 dark:bg-gray-800 dark:text-gray-300">
              <SelectValue placeholder="Select rows" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">05 rows</SelectItem>
              <SelectItem value="15">15 rows</SelectItem>
              <SelectItem value="30">30 rows</SelectItem>
              <SelectItem value="50">50 rows</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="dark:text-gray-400"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: Math.min(totalPages, 4) }, (_, i) => (
              <Button
                onClick={() => handlePageChange(i + 1)}
                key={i + 1}
                variant="ghost"
                size="sm"
                className={
                  i + 1 === currentPage
                    ? "text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                }
              >
                {i + 1}
              </Button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              className="dark:text-gray-400"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
