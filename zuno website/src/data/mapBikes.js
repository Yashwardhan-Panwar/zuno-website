// Live bikes data - synchronized with bikeTypes from bikes.js
export const liveBikes = [
  // City Center Station bikes (45 bikes capacity)
  {
    id: "ZUNO001",
    type: "Standard City Bike",
    emoji: "🚲",
    battery: 85,
    range: "45 km",
    speed: "25 km/h",
    location: {
      lat: 26.9124,
      lng: 75.7873,
      station: "City Center Station"
    },
    status: "available",
    lastRide: "2 mins ago",
    rideCount: 245,
  },
  {
    id: "ZUNO002",
    type: "Premium Electric Bike",
    emoji: "🚴",
    battery: 92,
    range: "70 km",
    speed: "32 km/h",
    location: {
      lat: 26.9126,
      lng: 75.7875,
      station: "City Center Station"
    },
    status: "available",
    lastRide: "5 mins ago",
    rideCount: 189,
  },
  {
    id: "ZUNO003",
    type: "Standard City Bike",
    emoji: "🚲",
    battery: 78,
    range: "45 km",
    speed: "25 km/h",
    location: {
      lat: 26.9122,
      lng: 75.7871,
      station: "City Center Station"
    },
    status: "in-use",
    lastRide: "now",
    rideCount: 312,
  },
  
  // Bani Park Hub bikes (32 bikes capacity)
  {
    id: "ZUNO004",
    type: "Mountain E-Bike",
    emoji: "🏔️",
    battery: 68,
    range: "60 km",
    speed: "35 km/h",
    location: {
      lat: 26.9089,
      lng: 75.7854,
      station: "Bani Park Hub"
    },
    status: "available",
    lastRide: "15 mins ago",
    rideCount: 156,
  },
  {
    id: "ZUNO005",
    type: "Standard City Bike",
    emoji: "🚲",
    battery: 95,
    range: "45 km",
    speed: "25 km/h",
    location: {
      lat: 26.9091,
      lng: 75.7856,
      station: "Bani Park Hub"
    },
    status: "available",
    lastRide: "1 min ago",
    rideCount: 289,
  },
  {
    id: "ZUNO006",
    type: "Premium Electric Bike",
    emoji: "🚴",
    battery: 88,
    range: "70 km",
    speed: "32 km/h",
    location: {
      lat: 26.9087,
      lng: 75.7852,
      station: "Bani Park Hub"
    },
    status: "available",
    lastRide: "8 mins ago",
    rideCount: 201,
  },

  // Laxmi Narayan Temple Station bikes (28 bikes capacity)
  {
    id: "ZUNO007",
    type: "Premium Electric Bike",
    emoji: "🚴",
    battery: 76,
    range: "70 km",
    speed: "32 km/h",
    location: {
      lat: 26.9210,
      lng: 75.8245,
      station: "Laxmi Narayan Temple Station"
    },
    status: "available",
    lastRide: "12 mins ago",
    rideCount: 234,
  },
  {
    id: "ZUNO008",
    type: "Standard City Bike",
    emoji: "🚲",
    battery: 82,
    range: "45 km",
    speed: "25 km/h",
    location: {
      lat: 26.9212,
      lng: 75.8247,
      station: "Laxmi Narayan Temple Station"
    },
    status: "available",
    lastRide: "6 mins ago",
    rideCount: 267,
  },

  // Airport Express bikes (55 bikes capacity)
  {
    id: "ZUNO009",
    type: "Mountain E-Bike",
    emoji: "🏔️",
    battery: 45,
    range: "60 km",
    speed: "35 km/h",
    location: {
      lat: 26.8267,
      lng: 75.8139,
      station: "Airport Express"
    },
    status: "low-battery",
    lastRide: "1 hour ago",
    rideCount: 98,
  },
  {
    id: "ZUNO010",
    type: "Premium Electric Bike",
    emoji: "🚴",
    battery: 91,
    range: "70 km",
    speed: "32 km/h",
    location: {
      lat: 26.8269,
      lng: 75.8141,
      station: "Airport Express"
    },
    status: "available",
    lastRide: "3 mins ago",
    rideCount: 278,
  },
  {
    id: "ZUNO011",
    type: "Standard City Bike",
    emoji: "🚲",
    battery: 87,
    range: "45 km",
    speed: "25 km/h",
    location: {
      lat: 26.8265,
      lng: 75.8137,
      station: "Airport Express"
    },
    status: "available",
    lastRide: "7 mins ago",
    rideCount: 198,
  },

  // Business District - Mahesh Nagar bikes (38 bikes capacity)
  {
    id: "ZUNO012",
    type: "Standard City Bike",
    emoji: "🚲",
    battery: 79,
    range: "45 km",
    speed: "25 km/h",
    location: {
      lat: 26.8958,
      lng: 75.8173,
      station: "Business District - Mahesh Nagar"
    },
    status: "available",
    lastRide: "10 mins ago",
    rideCount: 178,
  },
  {
    id: "ZUNO013",
    type: "Premium Electric Bike",
    emoji: "🚴",
    battery: 84,
    range: "70 km",
    speed: "32 km/h",
    location: {
      lat: 26.8960,
      lng: 75.8175,
      station: "Business District - Mahesh Nagar"
    },
    status: "available",
    lastRide: "4 mins ago",
    rideCount: 256,
  },

  // University Campus bikes (50 bikes capacity)
  {
    id: "ZUNO014",
    type: "Mountain E-Bike",
    emoji: "🏔️",
    battery: 89,
    range: "60 km",
    speed: "35 km/h",
    location: {
      lat: 26.9151,
      lng: 75.8215,
      station: "University Campus"
    },
    status: "available",
    lastRide: "5 mins ago",
    rideCount: 145,
  },
  {
    id: "ZUNO015",
    type: "Standard City Bike",
    emoji: "🚲",
    battery: 94,
    range: "45 km",
    speed: "25 km/h",
    location: {
      lat: 26.9153,
      lng: 75.8217,
      station: "University Campus"
    },
    status: "available",
    lastRide: "2 mins ago",
    rideCount: 321,
  },
  {
    id: "ZUNO016",
    type: "Premium Electric Bike",
    emoji: "🚴",
    battery: 86,
    range: "70 km",
    speed: "32 km/h",
    location: {
      lat: 26.9149,
      lng: 75.8213,
      station: "University Campus"
    },
    status: "in-use",
    lastRide: "now",
    rideCount: 210,
  },

  // Citro Mall Station bikes (42 bikes capacity)
  {
    id: "ZUNO017",
    type: "Premium Electric Bike",
    emoji: "🚴",
    battery: 72,
    range: "70 km",
    speed: "32 km/h",
    location: {
      lat: 26.8967,
      lng: 75.8109,
      station: "Citro Mall Station"
    },
    status: "available",
    lastRide: "7 mins ago",
    rideCount: 198,
  },
  {
    id: "ZUNO018",
    type: "Standard City Bike",
    emoji: "🚲",
    battery: 80,
    range: "45 km",
    speed: "25 km/h",
    location: {
      lat: 26.8969,
      lng: 75.8111,
      station: "Citro Mall Station"
    },
    status: "available",
    lastRide: "4 mins ago",
    rideCount: 245,
  },

  // Railway Station Hub bikes (60 bikes capacity)
  {
    id: "ZUNO019",
    type: "Mountain E-Bike",
    emoji: "🏔️",
    battery: 55,
    range: "60 km",
    speed: "35 km/h",
    location: {
      lat: 26.9124,
      lng: 75.8264,
      station: "Railway Station Hub"
    },
    status: "available",
    lastRide: "20 mins ago",
    rideCount: 167,
  },
  {
    id: "ZUNO020",
    type: "Premium Electric Bike",
    emoji: "🚴",
    battery: 98,
    range: "70 km",
    speed: "32 km/h",
    location: {
      lat: 26.9126,
      lng: 75.8266,
      station: "Railway Station Hub"
    },
    status: "available",
    lastRide: "1 min ago",
    rideCount: 302,
  },
  {
    id: "ZUNO021",
    type: "Standard City Bike",
    emoji: "🚲",
    battery: 90,
    range: "45 km",
    speed: "25 km/h",
    location: {
      lat: 26.9122,
      lng: 75.8262,
      station: "Railway Station Hub"
    },
    status: "available",
    lastRide: "9 mins ago",
    rideCount: 276,
  },
];

// Helper function to get bikes by status
export const getBikesByStatus = (status) => {
  return liveBikes.filter(bike => bike.status === status);
};

// Helper function to get bikes by station
export const getBikesByStation = (stationName) => {
  return liveBikes.filter(bike => bike.location.station === stationName);
};

// Get available bikes count
export const getAvailableBikesCount = () => {
  return liveBikes.filter(bike => bike.status === "available").length;
};

// Get bikes by type
export const getBikesByType = (typeName) => {
  return liveBikes.filter(bike => bike.type === typeName);
};
