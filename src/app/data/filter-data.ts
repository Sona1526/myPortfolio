export const filtersData = [{
  trueValues:["Pets allowed"],
  popularFilters: ["Free cancellation", "Pay at property", "Family rooms", "Late check-out, Early check-in"],
  priceRange: {
    min: 0,
    max: 20000
  },
  starRating: [1, 2, 3, 4, 5],
  propertyType: ["City Hotel","Villa","Beach Resort"],
  facilities: [
    "Free WiFi", "Includes parking", "Restaurant"
  ],

  bathrooms: {
    min: 1,
    max: 5
  },
  beds: {
    min: 1,
    max: 5
  },
  meals: ["Breakfast", "Full board"],
  reviewScore: ["Superb: 9+", "Very good: 8+"],
  roomFacilities: ["Air conditioning", "Balcony"],
  propertyRating: ["3 stars", "4 stars", "5 stars"],
  neighborhood: ["T Nagar", "Guindy"],
  chain: ["Taj Hotels", "OYO"],
  site: ["chennai"]
}];
export const sectionListData = [
  { key: 'trueValues', label: 'Allowed' },
  { key: 'popularFilters', label: 'Popular Filter' },
  { key: 'propertyType', label: 'Property Type' },
  { key: 'facilities', label: 'Facilities' },
  { key: 'meals', label: 'Food' },
  { key: 'roomFacilities', label: 'Room Facilities' },
  // { key: 'propertyRating', label: 'Property Rating' },
  // { key: 'neighborhood', label: 'Neighborhood' },
  // { key: 'chain', label: 'Chain' },
  // { key: 'reviewScore', label: 'Based On Customer Review' },
  // { key: 'site', label: 'Location' }
];
