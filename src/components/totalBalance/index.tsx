"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card } from "@/components/ui/card"
import { BarChart3 } from 'lucide-react'

const data = [
  { time: 0, balance: 110000, equity: 95000 },
  { time: 1, balance: 98000, equity: 97000 },
  { time: 2, balance: 95000, equity: 94000 },
  { time: 3, balance: 100000, equity: 96000 },
  { time: 4, balance: 102000, equity: 97000 },
]

 // eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-[#1E293B] p-2 text-white shadow-sm">
        <p className="text-sm">Balance</p>
        <p className="text-lg font-bold">${payload[0].value.toFixed(2)}</p>
      </div>
    )
  }
  return null
}

const TotalBalance = () => {
  return (
    <Card className="p-4">
      <div className="grid gap-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold">Total Balance</h3>
            <span className="text-sm text-[#2563EB]">Profit: +0.8%</span>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-[#EEF2FF]">
                <BarChart3 className="h-5 w-5 text-[#2563EB]" />
              </div>
              <div>
                <p className="text-lg font-bold">${(120567.90).toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                <p className="text-sm text-gray-500">Balance</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-[#EEF2FF]">
                <BarChart3 className="h-5 w-5 text-[#2563EB]" />
              </div>
              <div>
                <p className="text-lg font-bold">${(240952.00).toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                <p className="text-sm text-gray-500">Equity</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tickMargin={10}
                stroke="#94a3b8"
              />
              
              <YAxis
                axisLine={false}
                tickLine={false}
                tickMargin={10}
                 // eslint-disable-next-line @typescript-eslint/no-explicit-any
                tickFormatter={(value:any) => `$${value/1000}k`}
                stroke="#94a3b8"
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="balance"
                stroke="#2563EB"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="equity"
                stroke="#ef4444"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  )
}

export default TotalBalance

