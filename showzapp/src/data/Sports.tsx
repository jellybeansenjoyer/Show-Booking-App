interface Sports {
    name: string;
    type: string;
    id: string;
    test: boolean;
    url: string;
    locale: string;
    images: Image[];
    sales: Sales;
    dates: Dates;
    classifications: Classification[];
    promoter: Promoter;
    promoters: Promoter[];
    priceRanges: PriceRange[];
    products: Product[];
    seatmap: Seatmap;
    accessibility: Accessibility;
    ticketLimit: TicketLimit;
    ageRestrictions: AgeRestrictions;
    ticketing: Ticketing;
    _links: Links;
    _embedded: Embedded;
  }
  
  interface Embedded {
    venues: Venue[];
    attractions: Attraction[];
  }
  
  interface Attraction {
    name: string;
    type: string;
    id: string;
    test: boolean;
    url: string;
    locale: string;
    externalLinks: ExternalLinks;
    aliases: string[];
    images: Image[];
    classifications: Classification[];
    upcomingEvents: UpcomingEvents;
    _links: Links2;
  }
  
  interface ExternalLinks {
    twitter: Twitter[];
    facebook: Twitter[];
    wiki: Twitter[];
    instagram: Twitter[];
    homepage: Twitter[];
  }
  
  interface Twitter {
    url: string;
  }
  
  interface Venue {
    name: string;
    type: string;
    id: string;
    test: boolean;
    url: string;
    locale: string;
    images: Image[];
    postalCode: string;
    timezone: string;
    city: City;
    state: State;
    country: Country;
    address: Address;
    location: Location;
    markets: Segment[];
    dmas: Dma[];
    upcomingEvents: UpcomingEvents;
    _links: Links2;
  }
  
  interface Links2 {
    self: Self;
  }
  
  interface UpcomingEvents {
    tmr: number;
    ticketmaster: number;
    _total: number;
    _filtered: number;
  }
  
  interface Dma {
    id: number;
  }
  
  interface Location {
    longitude: string;
    latitude: string;
  }
  
  interface Address {
    line1: string;
  }
  
  interface Country {
    name: string;
    countryCode: string;
  }
  
  interface State {
    name: string;
    stateCode: string;
  }
  
  interface City {
    name: string;
  }
  
  interface Links {
    self: Self;
    attractions: Self[];
    venues: Self[];
  }
  
  interface Self {
    href: string;
  }
  
  interface Ticketing {
    safeTix: SafeTix;
    allInclusivePricing: SafeTix;
    id: string;
  }
  
  interface SafeTix {
    enabled: boolean;
  }
  
  interface AgeRestrictions {
    legalAgeEnforced: boolean;
    id: string;
  }
  
  interface TicketLimit {
    info: string;
    id: string;
  }
  
  interface Accessibility {
    ticketLimit: number;
    id: string;
  }
  
  interface Seatmap {
    staticUrl: string;
    id: string;
  }
  
  interface Product {
    name: string;
    id: string;
    url: string;
    type: string;
    classifications: Classification[];
  }
  
  interface PriceRange {
    type: string;
    currency: string;
    min: number;
    max: number;
  }
  
  interface Promoter {
    id: string;
    name: string;
    description: string;
  }
  
  interface Classification {
    primary: boolean;
    segment: Segment;
    genre: Segment;
    subGenre: Segment;
    type: Segment;
    subType: Segment;
    family: boolean;
  }
  
  interface Segment {
    id: string;
    name: string;
  }
  
  interface Dates {
    start: Start;
    timezone: string;
    status: Status;
    spanMultipleDays: boolean;
  }
  
  interface Status {
    code: string;
  }
  
  interface Start {
    localDate: string;
    localTime: string;
    dateTime: string;
    dateTBD: boolean;
    dateTBA: boolean;
    timeTBA: boolean;
    noSpecificTime: boolean;
  }
  
  interface Sales {
    public: Public;
    presales: Presale[];
  }
  
  interface Presale {
    startDateTime: string;
    endDateTime: string;
    name: string;
  }
  
  interface Public {
    startDateTime: string;
    startTBD: boolean;
    startTBA: boolean;
    endDateTime: string;
  }
  
  interface Image {
    ratio: string;
    url: string;
    width: number;
    height: number;
    fallback: boolean;
  }
  export default Sports;