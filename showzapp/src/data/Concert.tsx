interface Ticket {
  ticket_id: string;
  seat_number: string;
  row: string;
  section: string;
  price_paid: number;
  resale_price_cap: number;
  owner: string;
  is_resold: boolean;
  resale_history: string[]; // You can define this array in more detail if necessary
  ticket_type: string;
  ticket_status: string;
  emergency_resale_allowed: boolean;
  expiry_date: string; // Date can also be typed as Date if you're using it as a Date object
}

interface Event {
  event_id: string;
  event_name: string;
  event_date: string; // You could use Date for this as well, depending on the use case
  event_location: string;
  event_venue: string;
  event_category: string;
  event_description: string;
}

interface Concert {
  id: number;
  poster: string;
  name: string;
  description: string;
  image: string;
  event: Event;
  ticket: Ticket;
}
interface Concert__ {
    event:Concert
}
export default Concert__;