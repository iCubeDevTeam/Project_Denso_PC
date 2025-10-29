'use client'

import React, { useState } from 'react'
import CardCustom from './cardCustom';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import SelectCustom from './selectCustom';
import { Button } from '@/components/ui/button';

export default function DashboardOverview() {
    const number = 7;

    const [fruit, setFruit] = useState("")

    const fruitOptions = [
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
        { label: "Blueberry", value: "blueberry" },
        { label: "Grapes", value: "grapes" },
        { label: "Pineapple", value: "pineapple" },
    ]


    return (
        <div >
            <Tabs defaultValue="Production Line">
                <div className='px-4 pt-6 pb-2'>
                    <div className=' flex justify-between'>
                        <div>
                            <div className='font-bold text-2xl'>Production Line Capacity Status</div>
                            <div>Daily and monthly production performance with delay, recovery, and safety indicators.</div>
                        </div>
                        <div>
                            <TabsList>
                                <TabsTrigger value="Production Line">Production Line</TabsTrigger>
                                <TabsTrigger value="Line Sub">Line Sub</TabsTrigger>
                            </TabsList>

                        </div>
                    </div>
                    <div className='pt-4 flex gap-4 items-end'>
                        <SelectCustom
                            label="Fruit"
                            placeholder="Select a fruit"
                            groupLabel="Fruits"
                            options={fruitOptions}
                            value={fruit}
                            onChange={setFruit}
                        />
                          <SelectCustom
                            label="Fruit"
                            placeholder="Select a fruit"
                            groupLabel="Fruits"
                            options={fruitOptions}
                            value={fruit}
                            onChange={setFruit}
                        />
                          <SelectCustom
                            label="Fruit"
                            placeholder="Select a fruit"
                            groupLabel="Fruits"
                            options={fruitOptions}
                            value={fruit}
                            onChange={setFruit}
                        />
                        <Button
                            variant="outline"
                            className=" border-red-500 text-red-500 hover:bg-pink-100 hover:text-red"
                        >
                            Clear all
                        </Button>
                    </div>
                </div>
                <TabsContent value="Production Line">
                    <div className="grid grid-cols-4 p-4 pt-0">
                        {Array.from({ length: number }, (_, index) => (
                            <div className="col-span-1" key={index}>
                                <CardCustom />
                            </div>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="Line Sub">
                    <div className="grid grid-cols-4 p-4 pt-0">
                        {Array.from({ length: number }, (_, index) => (
                            <div className="col-span-1" key={index}>
                                <CardCustom />
                            </div>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}
