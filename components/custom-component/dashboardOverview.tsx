import React from 'react'
import CardCustom from './cardCustom';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function DashboardOverview() {
    const number = 6;

  
  return (
      <div >
          <Tabs defaultValue="Production Line">
              <div className='px-4 pt-6 pb-2 flex justify-between'>
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
