// Ride history data
export const rideHistory = [
  {
    id: "RIDE001",
    bikeId: "ZUNO001",
    startTime: "2026-01-21T13:30:00",
    endTime: "2026-01-21T14:15:00",
    duration: "45 mins",
    distance: "8.2 km",
    startStation: "City Center Station",
    endStation: "University Campus",
    fare: "₹90",
    rating: 5,
    feedback: "Smooth ride, great battery life!"
  },
  {
    id: "RIDE002", 
    bikeId: "ZUNO005",
    startTime: "2026-01-21T10:45:00",
    endTime: "2026-01-21T11:20:00",
    duration: "35 mins",
    distance: "6.1 km",
    startStation: "Bani Park Hub",
    endStation: "Railway Station Hub", 
    fare: "₹70",
    rating: 4,
    feedback: "Good ride, slightly bumpy road"
  }
];

// Current active ride (for demo)
export const currentRide = {
  id: "RIDE003",
  bikeId: "ZUNO010",
  startTime: "2026-01-21T14:00:00",
  duration: "22 mins",
  distance: "4.5 km",
  currentFare: "₹44",
  ratePerMin: 2
};
