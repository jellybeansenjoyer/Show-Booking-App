
type EventImage = {
    url: string;
  };
  
  type EventDate = {
    start: {
      localDate: string;
    };
  };
  
  type EventVenue = {
    city: {
      name: string;
    };
  };
  
  type Event = {
    id: string;
    name: string;
    images: EventImage[];
    dates: EventDate;
    _embedded: {
      venues: EventVenue[];
    };
  };
   
  export default Event;