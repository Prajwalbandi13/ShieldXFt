import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Experience exceptional sound quality with our premium wireless headphones. Featuring advanced noise cancellation and 30-hour battery life.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Quick charge - 5 min for 3 hours",
      "Premium comfort fit",
      "Hi-Res Audio certified"
    ],
    rating: 4.8,
    reviews: 2156,
    category: "Electronics",
    inStock: true
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199,
    originalPrice: 249,
    image: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1472443/pexels-photo-1472443.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Track your fitness goals with our advanced smartwatch. Monitor heart rate, sleep, and stay connected with smart notifications.",
    features: [
      "GPS tracking",
      "Heart rate monitor",
      "Sleep tracking",
      "Waterproof design",
      "7-day battery life"
    ],
    rating: 4.6,
    reviews: 1843,
    category: "Wearables",
    inStock: true
  },
  {
    id: 3,
    name: "Wireless Phone Charger",
    price: 79,
    originalPrice: 99,
    image: "https://images.pexels.com/photos/4488652/pexels-photo-4488652.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/4488652/pexels-photo-4488652.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/8000623/pexels-photo-8000623.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Fast wireless charging for your smartphone. Compatible with all Qi-enabled devices with elegant modern design.",
    features: [
      "15W fast charging",
      "Qi-certified safety",
      "LED charging indicator",
      "Non-slip surface",
      "Temperature control"
    ],
    rating: 4.4,
    reviews: 967,
    category: "Accessories",
    inStock: true
  },
  {
    id: 4,
    name: "Professional Camera Lens",
    price: 549,
    originalPrice: 649,
    image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Capture stunning photos with our professional-grade camera lens. Perfect for portraits and landscape photography.",
    features: [
      "85mm focal length",
      "f/1.4 maximum aperture",
      "Weather-sealed design",
      "Ultra-fast autofocus",
      "Professional image quality"
    ],
    rating: 4.9,
    reviews: 734,
    category: "Photography",
    inStock: true
  },
  {
    id: 5,
    name: "Bluetooth Speaker System",
    price: 149,
    originalPrice: 199,
    image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500",
    images: [
      "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/164779/pexels-photo-164779.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    description: "Immersive sound experience with our portable Bluetooth speaker. Perfect for home, office, or outdoor adventures.",
    features: [
      "360-degree sound",
      "12-hour playback",
      "IPX7 waterproof",
      "Voice assistant support",
      "Premium audio drivers"
    ],
    rating: 4.7,
    reviews: 1205,
    category: "Audio",
    inStock: true
  }
];