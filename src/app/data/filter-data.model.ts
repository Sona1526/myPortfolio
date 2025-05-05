export interface Filters {

  popularFilters: string[];
  priceRange: {
    min: number;
    max: number;
  };
  starRating: number[];
  propertyType: string[];
  facilities: string[];
  trueValues:string[];
  bathrooms: {
    min: number;
    max: number;
  };
  beds: {
    min: number;
    max: number;
  };
  meals: string[];
  reviewScore: string[];
  roomFacilities: string[];
  propertyRating: string[];
  neighborhood: string[];
  chain: string[];
  site: string[];
  [key: string]: string[] | number[] | { min: number; max: number };

}
export interface sectionList {

    key: string;
    label: string;

}
