export const pricingPlans = [
  {
    id: 1,
    name: "Pay Per Ride",
    price: "₹2",
    period: "/min",
    description: "Perfect for occasional riders",
    features: ["No subscription needed", "Unlimited rides", "All stations access", "Auto-deducted from wallet"],
    popular: false,
    cta: "Start Riding",
  },
  {
    id: 2,
    name: "Daily Pass",
    price: "₹99",
    period: "/day",
    description: "Best for daily commuters",
    features: ["Unlimited rides (24 hours)", "₹1/min rate", "Priority support", "Free unlock fee"],
    popular: true,
    cta: "Get Daily Pass",
    savings: "Save 50% vs pay-per-ride",
  },
  {
    id: 3,
    name: "Monthly Pass",
    price: "₹799",
    period: "/month",
    description: "Best value for regular riders",
    features: ["30 days unlimited", "₹0.80/min rate", "24/7 priority support", "Free cancellation anytime"],
    popular: false,
    cta: "Get Monthly Pass",
    savings: "Save ₹2,400/month vs daily pass",
  },
  {
    id: 4,
    name: "Annual Pass",
    price: "₹6,999",
    period: "/year",
    description: "Maximum savings for daily users",
    features: ["365 days unlimited", "₹0.60/min rate", "Priority 24/7 support", "Free bike maintenance"],
    popular: false,
    cta: "Get Annual Pass",
    savings: "Save ₹2,600+ annually",
  },
];

// ✅ NEW: Pricing calculator helper
export const calculateFare = (minutes, plan = 'pay-per-ride') => {
  const rates = {
    'pay-per-ride': 2,
    'daily': 1,
    'monthly': 0.8,
    'annual': 0.6
  };
  return minutes * rates[plan];
};
