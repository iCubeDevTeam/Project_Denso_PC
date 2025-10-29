"use client"

import React from 'react'
import { Card } from '@/components/ui/card'
import { RadialBar, RadialBarChart } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },

]
const chartConfig = {
  chrome: {
    label: "Chrome",
    color: "#B7B7B7",  
  },
  safari: {
    label: "Safari",
    color: "#414141",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export default function CardCustom() {
  return (
    <Card>
      <div className='px-3 pb-4'>
            <div>
                <div className="flex justify-between ">
                  <div className='w-[60%]' >
                    <div className="font-bold text-xl">Condensor</div>
                    <div className="mt-2">
                    <ChartContainer
                      config={chartConfig}
                      className="mx-auto aspect-square max-h-[140px]"
                    >
                      <RadialBarChart data={chartData} innerRadius={50} outerRadius={70}>
                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent hideLabel nameKey="browser" />}
                        />
                    <RadialBar dataKey="visitors" background />
                    <text
                      x="50%"
                      y="45%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-foreground text-sm"
                    >
                      <tspan x="50%" className='text-[12px]' dy="-1em">Daily</tspan>
                      <tspan className='text-[16px] font-bold' x="50%" dy="1.1em">75%</tspan>
                      <tspan className='text-[12px]' x="50%" dy="1.3em">400/400</tspan>
                    </text>

                  </RadialBarChart>
                    </ChartContainer>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between text-right text-sm">
                    <div className='flex flex-col gap-2'>
                      <div className='bg-[#D32203] border-2 rounded-full px-2 py-1 text-white border-[#F4A7A4]'>D - Delay</div>
                      <div className='text-red-500 border-2 rounded-full px-2 py-1 bg-[#FFF1F2] border-[#FFD7DB]'>M - Delay</div>
                    </div>
                    <div>
                      <div className="font-medium text-md">Monthly</div>
                      <div className="text-lg font-bold">87%</div>
                      <div className="text-sm text-muted-foreground">3000 / 3450</div>
                    </div>
                  </div>
                </div>
            </div>
      </div>
      </Card>
  )
}
