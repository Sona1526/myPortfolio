export interface Hotel {
  site:string;
  id: string;
  hotelName: string;
  petsAllowed:boolean;
  propertyType: string;
  roomFacilities: string[];
  choices: string[];
  address: string;
  starRating: number;
  reviewRating: number;
  reviewCount: number;
  shortDescriptions: string[];
  actualPrice: number;
  offerPrice: number;
  currency: string;
  checkInTime: string;
  checkOutTime: string;
  contact: {
    phone: string;
    email: string;
  };
  location: {
    latitude: number;
    longitude: number;
  };
  hotelAmenities: string[];
  imageList: {
    src: string;
  }[];
  roomTypes: {
    name: string;
    guests: number;
    roomPrice: number;
    roomOfferPrice: number;

    beds: string;
    availability: number;
  }[];
}
