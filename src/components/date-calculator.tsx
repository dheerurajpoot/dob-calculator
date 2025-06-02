"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DateDifferenceCalculator } from "@/components/date-difference-calculator"
import { AgeCalculator } from "@/components/age-calculator"
import { Card } from "@/components/ui/card"

export function DateCalculator() {
  const [activeTab, setActiveTab] = useState("date-difference")

  return (
    <Card className="overflow-hidden">
      <Tabs defaultValue="date-difference" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="date-difference">Date Difference</TabsTrigger>
          <TabsTrigger value="age-calculator">Age Calculator</TabsTrigger>
        </TabsList>
        <TabsContent value="date-difference">
          <DateDifferenceCalculator />
        </TabsContent>
        <TabsContent value="age-calculator">
          <AgeCalculator />
        </TabsContent>
      </Tabs>
    </Card>
  )
}
