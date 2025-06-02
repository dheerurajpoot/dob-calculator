"use client"

import { useState, useEffect } from "react"
import { format, differenceInDays, differenceInMonths, differenceInYears } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent } from "@/components/ui/card"

export function DateDifferenceCalculator() {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date())
  const [endDate, setEndDate] = useState<Date | undefined>(new Date())
  const [difference, setDifference] = useState({
    years: 0,
    months: 0,
    days: 0,
    totalDays: 0,
  })

  useEffect(() => {
    if (startDate && endDate) {
      // Ensure endDate is not before startDate
      if (endDate < startDate) {
        setEndDate(startDate)
        return
      }

      const years = differenceInYears(endDate, startDate)
      const months = differenceInMonths(endDate, startDate) % 12

      // Calculate remaining days
      const tempDate = new Date(startDate)
      tempDate.setFullYear(tempDate.getFullYear() + years)
      tempDate.setMonth(tempDate.getMonth() + months)
      const days = differenceInDays(endDate, tempDate)

      // Calculate total days
      const totalDays = differenceInDays(endDate, startDate)

      setDifference({ years, months, days, totalDays })
    }
  }, [startDate, endDate])

  return (
    <div className="p-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium mb-2">Start Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn("w-full justify-start text-left font-normal", !startDate && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">End Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn("w-full justify-start text-left font-normal", !endDate && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                initialFocus
                disabled={(date) => date < (startDate || new Date())}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Date Difference</h3>
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-primary">{difference.years}</div>
              <div className="text-sm text-muted-foreground mt-1">Years</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-primary">{difference.months}</div>
              <div className="text-sm text-muted-foreground mt-1">Months</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-primary">{difference.days}</div>
              <div className="text-sm text-muted-foreground mt-1">Days</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-primary">{difference.totalDays}</div>
              <div className="text-sm text-muted-foreground mt-1">Total Days</div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 text-sm text-muted-foreground">
          {startDate && endDate && (
            <p>
              From {format(startDate, "MMMM d, yyyy")} to {format(endDate, "MMMM d, yyyy")} is{" "}
              <span className="font-medium text-foreground">
                {difference.years} years, {difference.months} months, and {difference.days} days
              </span>
              .
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
