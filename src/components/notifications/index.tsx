"use client"

import { ChevronLeft, ChevronRight,AlertCircle } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { notifications } from "./data"


export default function Notifications() {
  const [rowsPerPage, setRowsPerPage] = useState(2)
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(notifications.length / rowsPerPage)
  const start = (currentPage - 1) * rowsPerPage
  const end = start + rowsPerPage
  const currNotifications = notifications.slice(start, end)

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const handleRowsPerPageChange = (value: string) => {
    setRowsPerPage(Number(value))
    setCurrentPage(1)
  }

  return (
    <Card className="border shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-gray-100 p-2 dark:bg-gray-800">
            <AlertCircle className="h-4 w-4 text-gray-400 dark:text-gray-600" />
          </div>
          <CardTitle className="dark:text-gray-100">Notifications</CardTitle>
        </div>
        <Select defaultValue="30">
          <SelectTrigger className="w-[140px] border-0 bg-gray-50 dark:bg-gray-800 dark:text-gray-100">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7">Last 7 Days</SelectItem>
            <SelectItem value="14">Last 14 Days</SelectItem>
            <SelectItem value="30">Last 30 Days</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-9 py-4">
        <Table>
          <TableHeader className="bg-gray-50 dark:bg-gray-800">
            <TableRow>
              <TableHead className="dark:text-gray-300">Time</TableHead>
              <TableHead className="dark:text-gray-300">Type</TableHead>
              <TableHead className="dark:text-gray-300">Message</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currNotifications.map((notification) => (
              <TableRow key={notification.id} className="dark:border-gray-800">
                <TableCell className="text-sm text-gray-500 dark:text-gray-400">
                  {notification.time}
                </TableCell>
                <TableCell className="text-sm text-gray-500 dark:text-gray-400">
                  {notification.type}
                </TableCell>
                <TableCell className="text-sm dark:text-gray-300">
                  {notification.message}
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
              <SelectItem value="2">02 rows</SelectItem>
              <SelectItem value="4">04 rows</SelectItem>
              <SelectItem value="8">08 rows</SelectItem>
              <SelectItem value="10">10 rows</SelectItem>
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
  )
}
