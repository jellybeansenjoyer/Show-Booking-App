'use client'
import Hero3Props from "@/data/Hero3Props";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const Bar:React.FC<Hero3Props>= ({movie}) => {
    const [tickets, setTickets] = useState(1);
    const [ticketType, setTicketType] = useState<"Standard" | "VIP" | "VVIP">("Standard");
    const [price, setPrice] = useState(movie.budget*0.0000001);
  
    const ticketPrices: { Standard: number; VIP: number; VVIP: number } = {
        Standard: movie.budget*0.000001,
        VIP: movie.budget*0.000001 * 1.5,
        VVIP: movie.budget * 0.000001* 2,
      };
    const updatePrice = (ticketCount: number, type: "Standard" | "VIP" | "VVIP") => {
        setPrice(ticketPrices[type] * ticketCount);
      };
      const handleTicketChange = (increment: boolean) => {
        const newCount = increment ? tickets + 1 : Math.max(1, tickets - 1);
        setTickets(newCount);
        updatePrice(newCount, ticketType);
      };
    
      const handleTypeChange = (type: "Standard" | "VIP" | "VVIP") => {
        setTicketType(type);
        updatePrice(tickets, type);
      };
    
    function convertMinutesToHours(minutes:number) {
        const hours = Math.floor(minutes / 60); // Get the integer part for hours
        const remainingMinutes = minutes % 60; // Get the remaining minutes
        
        return `${hours} Hr ${remainingMinutes} Min`;
      }
    return (
        <div className="relative mt-56 inset-y-64 px-12 py-8 bg-blue-950 flex items-center justify-center gap-52">
            <div className="items-center flex gap-4">
                <img className="w-7 h-7" src="/popcorn.png" />
                <div className="flex flex-col gap-2">
                <p className="text-white font-bold text-2xl">Popularity</p>
                <p className="text-white text-2xl">{movie.popularity}</p>
                </div>
            </div> 
            <div className="items-center flex gap-4">
                <img className="w-7 h-7" src="/time.png" />
                <div className="flex flex-col gap-2">
                <p className="text-white font-bold text-2xl">Duration</p>
                <p className="text-white text-2xl">{convertMinutesToHours(movie.runtime)}</p>
                </div>
            </div> 
            <Dialog>
          <DialogTrigger asChild>
            <p className="hover:text-cherry_pink cursor-pointer py-2 px-10 text-white font-medium bg-gradient-to-r from-cherry_pink to-bright_purple rounded-full text-lg  hover:bg-black hover:bg-none">
              BOOK NOW
            </p>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Book Tickets</DialogTitle>
              <DialogDescription>
                Fill out the details below to book your tickets.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" placeholder="Enter your name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">No. of Tickets</Label>
                <div className="flex items-center col-span-3 gap-2">
                  <Button onClick={() => handleTicketChange(false)}>-</Button>
                  <span className="px-4">{tickets}</span>
                  <Button onClick={() => handleTicketChange(true)}>+</Button>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Ticket Type</Label>
                <Select
                  value={ticketType}
                  onValueChange={(value:"Standard" | "VIP" | "VVIP") => handleTypeChange(value)}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Standard">Standard</SelectItem>
                    <SelectItem value="VIP">VIP</SelectItem>
                    <SelectItem value="VVIP">VVIP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <p className="text-xl font-semibold text-right">
                Total Price: ₹{price.toFixed(2)}
              </p>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={() => alert("Booking Confirmed!")}>
                Submit
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        </div>
    );
}
export default Bar;