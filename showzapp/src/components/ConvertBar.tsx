'use client'

import Concert__ from "@/data/Concert";
import { useState } from "react";
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

interface Concert_ {
  event: Concert__;
}

const ConcertBar: React.FC<Concert_> = ({ event }) => {
  const [tickets, setTickets] = useState(1);
  const [ticketType, setTicketType] = useState<"Standard" | "VIP" | "VVIP">("Standard");
  const [price, setPrice] = useState(event.event.ticket.price_paid);

  const ticketPrices: { Standard: number; VIP: number; VVIP: number } = {
    Standard: event.event.ticket.price_paid,
    VIP: event.event.ticket.price_paid * 1.5,
    VVIP: event.event.ticket.price_paid * 2,
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

  return (
    <>
      <div className="relative mt-56 inset-y-64 px-12 py-8 bg-blue-950 flex items-center justify-center gap-52">
        <div className="items-center flex gap-4 ml-12">
          <img className="w-7 h-7" src="/popcorn.png" alt="Popcorn" />
          <div className="flex flex-col gap-2">
            <p className="text-white font-bold text-2xl">Price Ranges</p>
            <p className="text-white text-2xl">{`${event.event.ticket.price_paid}`}</p>
          </div>
        </div>
        <div className="items-center flex gap-4">
          <img className="w-7 h-7" src="/time.png" alt="Time" />
          <div className="flex flex-col gap-2">
            <p className="text-white font-bold text-2xl">Date</p>
            <p className="text-white text-2xl max-w-72">
              {event.event.event.event_date +
                " " +
                event.event.event.event_venue +
                " " +
                event.event.event.event_location}
            </p>
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
    </>
  );
};

export default ConcertBar;
