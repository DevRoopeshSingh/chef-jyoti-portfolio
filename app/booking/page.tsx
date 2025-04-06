"use client"

import type React from "react"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

export default function BookingPage() {
  const { toast } = useToast()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [serviceType, setServiceType] = useState("")
  const [timeSlot, setTimeSlot] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!date || !serviceType || !timeSlot) {
      toast({
        title: "Missing information",
        description: "Please select a date, service type, and time slot.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate booking submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Booking request sent!",
        description: `Your ${serviceType} booking for ${date.toDateString()} at ${timeSlot} has been received.`,
      })

      // Reset form
      setDate(undefined)
      setServiceType("")
      setTimeSlot("")
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your booking couldn't be processed. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    { id: "private-dining", name: "Private Dining Experience" },
    { id: "workshop", name: "Culinary Workshop" },
    { id: "consultation", name: "Menu Consultation" },
    { id: "food-styling", name: "Food Styling Session" },
  ]

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Book Chef Jyoti</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Schedule a private dining experience, workshop, or consultation
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <Tabs defaultValue="booking" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="booking">Make a Booking</TabsTrigger>
            <TabsTrigger value="info">Booking Information</TabsTrigger>
          </TabsList>

          <TabsContent value="booking">
            <Card>
              <CardHeader>
                <CardTitle>Schedule Your Experience</CardTitle>
                <CardDescription>Select a service, date, and time that works for you.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Service Type</label>
                    <Select value={serviceType} onValueChange={setServiceType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.id} value={service.id}>
                            {service.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Select Date</label>
                    <div className="rounded-md border">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md"
                        disabled={(date) => {
                          // Disable dates in the past and Sundays
                          const today = new Date()
                          today.setHours(0, 0, 0, 0)
                          return date < today || date.getDay() === 0
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Select Time</label>
                    <Select value={timeSlot} onValueChange={setTimeSlot}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700" disabled={isSubmitting}>
                    {isSubmitting ? "Processing..." : "Request Booking"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="info">
            <Card>
              <CardHeader>
                <CardTitle>Booking Information</CardTitle>
                <CardDescription>Important details about Chef Jyoti's services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Private Dining Experience</h3>
                  <p className="text-gray-600">
                    Chef Jyoti will create a customized menu and dining experience in your home. Minimum booking: 4
                    guests. Duration: 3-4 hours.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Culinary Workshops</h3>
                  <p className="text-gray-600">
                    Interactive cooking classes for individuals or groups. All ingredients and equipment provided.
                    Duration: 2-3 hours.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Menu Consultation</h3>
                  <p className="text-gray-600">
                    Professional guidance for restaurants or event planning. Includes menu development, recipe creation,
                    and sourcing advice. Duration: 1-2 hours.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Food Styling Session</h3>
                  <p className="text-gray-600">
                    Professional food styling for photography or media projects. Includes setup, styling, and guidance.
                    Duration: 4 hours.
                  </p>
                </div>

                <div className="rounded-md bg-amber-50 p-4">
                  <h3 className="text-lg font-semibold text-amber-800">Cancellation Policy</h3>
                  <p className="text-amber-700">
                    Cancellations made more than 48 hours in advance will receive a full refund. Cancellations within 48
                    hours are subject to a 50% fee.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

