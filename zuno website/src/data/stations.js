// ✅ FIXED: Real Jaipur stations (synchronized with mapBikes.js)
export const stations = [
  {
    id: 1,
    name: "City Center Station",
    lat: 26.9124,
    lng: 75.7873,
    bikes: 15, // From mapBikes: ZUNO001, ZUNO002, ZUNO003
    capacity: 45,
    address: "MI Road, Near Jaipur Railway Station",
    area: "Central Jaipur",
    facilities: ["Parking", "Charging", "24/7 Access"],
  },
  {
    id: 2,
    name: "Bani Park Hub",
    lat: 26.9089,
    lng: 75.7854,
    bikes: 12, // ZUNO004, ZUNO005, ZUNO006
    capacity: 32,
    address: "Bani Park, Near Hospital",
    area: "Bani Park",
    facilities: ["Parking", "Charging", "Security"],
  },
  {
    id: 3,
    name: "Laxmi Narayan Temple Station",
    lat: 26.9210,
    lng: 75.8245,
    bikes: 8, // ZUNO007, ZUNO008
    capacity: 28,
    address: "Near Birla Mandir, Tilak Nagar",
    area: "Central Jaipur",
    facilities: ["24/7 Access", "Charging"],
  },
  {
    id: 4,
    name: "Airport Express",
    lat: 26.8267,
    lng: 75.8139,
    bikes: 18, // ZUNO009, ZUNO010, ZUNO011
    capacity: 55,
    address: "Jaipur International Airport, Sanganer",
    area: "Airport Area",
    facilities: ["Parking", "Charging", "24/7 Access", "Security"],
  },
  {
    id: 5,
    name: "Business District - Mahesh Nagar",
    lat: 26.8958,
    lng: 75.8173,
    bikes: 10, // ZUNO012, ZUNO013
    capacity: 38,
    address: "Mahesh Nagar, Tonk Road",
    area: "South Jaipur",
    facilities: ["Parking", "Charging"],
  },
  {
    id: 6,
    name: "University Campus",
    lat: 26.9151,
    lng: 75.8215,
    bikes: 14, // ZUNO014, ZUNO015, ZUNO016
    capacity: 50,
    address: "University of Rajasthan Campus",
    area: "JLN Marg",
    facilities: ["Parking", "Charging", "Student Discount"],
  },
  {
    id: 7,
    name: "Citro Mall Station",
    lat: 26.8967,
    lng: 75.8109,
    bikes: 9, // ZUNO017, ZUNO018
    capacity: 42,
    address: "Crystal Palm Mall, Bani Park",
    area: "Bani Park",
    facilities: ["Parking", "Charging", "24/7 Access"],
  },
  {
    id: 8,
    name: "Railway Station Hub",
    lat: 26.9124,
    lng: 75.8264,
    bikes: 16, // ZUNO019, ZUNO020, ZUNO021
    capacity: 60,
    address: "Jaipur Junction Railway Station",
    area: "Station Road",
    facilities: ["Parking", "Charging", "24/7 Access", "Security", "Waiting Area"],
  },
];

export const bikeTypes = [
  {
    id: 1,
    name: "Standard City Bike",
    range: "45 km",
    speed: "25 km/h",
    weight: "24 kg",
    battery: "36V, 10Ah",
    emoji: "🚲",
    color: "Blue",
    count: 12, // 12 bikes in Jaipur
    pricePerMin: 2,
  },
  {
    id: 2,
    name: "Premium Electric Bike",
    range: "70 km",
    speed: "32 km/h",
    weight: "28 kg",
    battery: "48V, 14Ah",
    emoji: "🚴",
    color: "Black",
    count: 7, // 7 bikes in Jaipur
    pricePerMin: 2,
  },
  {
    id: 3,
    name: "Mountain E-Bike",
    range: "60 km",
    speed: "35 km/h",
    weight: "32 kg",
    battery: "48V, 16Ah",
    emoji: "🏔️",
    color: "Red",
    count: 2, // 2 bikes in Jaipur
    pricePerMin: 2,
  },
];

// ✅ Helper functions
export const getTotalBikes = () => {
  return stations.reduce((sum, s) => sum + s.bikes, 0);
};

export const getStationByName = (name) => {
  return stations.find(s => s.name === name);
};
