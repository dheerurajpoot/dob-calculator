"use client"

import { useState, useEffect } from "react"
import { format, differenceInDays, differenceInMonths, differenceInYears } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent } from "@/components/ui/card"

export function AgeCalculator() {
  const [birthDate, setBirthDate] = useState<Date | undefined>(undefined)
  const [today] = useState<Date>(new Date())
  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
    totalDays: 0,
  })

  useEffect(() => {
    if (birthDate) {
      // Ensure birthDate is not in the future
      if (birthDate > today) {
        setBirthDate(today)
        return
      }

      const years = differenceInYears(today, birthDate)
      const months = differenceInMonths(today, birthDate) % 12

      // Calculate remaining days
      const tempDate = new Date(birthDate)
      tempDate.setFullYear(tempDate.getFullYear() + years)
      tempDate.setMonth(tempDate.getMonth() + months)
      const days = differenceInDays(today, tempDate)

      // Calculate total days
      const totalDays = differenceInDays(today, birthDate)

      setAge({ years, months, days, totalDays })
    }
  }, [birthDate, today])

  return (
    <div className="p-6">
      <div>
        <label className="block text-sm font-medium mb-2">Date of Birth</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn("w-full justify-start text-left font-normal", !birthDate && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {birthDate ? format(birthDate, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <div className="flex flex-col space-y-4 p-4">
              <select
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                value={birthDate ? birthDate.getFullYear() : today.getFullYear()}
                onChange={(e) => {
                  const year = parseInt(e.target.value)
                  if (birthDate) {
                    const newDate = new Date(birthDate)
                    newDate.setFullYear(year)
                    if (newDate > today) {
                      newDate.setMonth(today.getMonth())
                      newDate.setDate(today.getDate())
                    }
                    setBirthDate(newDate)
                  } else {
                    const newDate = new Date()
                    newDate.setFullYear(year)
                    setBirthDate(newDate)
                  }
                }}
              >
                {Array.from(
                  { length: today.getFullYear() - 1900 + 1 },
                  (_, i) => today.getFullYear() - i
                ).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <Calendar
                mode="single"
                selected={birthDate}
                onSelect={setBirthDate}
                initialFocus
                disabled={(date) => date > today}
                fromYear={1900}
                toYear={today.getFullYear()}
              />
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {birthDate ? (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Your Age</h3>
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-primary">{age.years}</div>
                <div className="text-sm text-muted-foreground mt-1">Years</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-primary">{age.months}</div>
                <div className="text-sm text-muted-foreground mt-1">Months</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-primary">{age.days}</div>
                <div className="text-sm text-muted-foreground mt-1">Days</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold text-primary">{age.totalDays.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground mt-1">Total Days</div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <h4 className="font-medium mb-2">Additional Information</h4>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm text-muted-foreground">Next Birthday</div>
                  <div className="font-medium mt-1">
                    {(() => {
                      const nextBirthday = new Date(birthDate)
                      nextBirthday.setFullYear(today.getFullYear())
                      if (nextBirthday < today) {
                        nextBirthday.setFullYear(today.getFullYear() + 1)
                      }
                      const daysUntil = differenceInDays(nextBirthday, today)
                      return `${format(nextBirthday, "MMMM d, yyyy")} (${daysUntil} days)`
                    })()}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-sm text-muted-foreground">Day of Birth</div>
                  <div className="font-medium mt-1">{format(birthDate, "EEEE")}</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-6 text-sm text-muted-foreground">
            <p>
              Born on {format(birthDate, "MMMM d, yyyy")}, you are{" "}
              <span className="font-medium text-foreground">
                {age.years} years, {age.months} months, and {age.days} days
              </span>{" "}
              old today.
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-8 text-center p-8 border rounded-lg">
          <p className="text-muted-foreground">Select your date of birth to calculate your age</p>
        </div>
      )}
    </div>
  )
}
