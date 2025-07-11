// HeroSection
export const slides = [
  {
    id: 0,
    image: "https://placehold.co/1920x1080/f0f0f3/d8d8d8.png?text=Image+1",
    alt: "Tech devices showcase",
  },
  {
    id: 1,
    image: "https://placehold.co/1920x1080/f0f0f3/d8d8d8.png?text=Image+2",
    alt: "iPhone 15 Pro",
  },
  {
    id: 2,
    image: "https://placehold.co/1920x1080/f0f0f3/d8d8d8.png?text=Image+3",
    alt: "iPad Pro M2",
  },
];

// Categories
export const categories = [
  {
    id: "phones",
    name: "phones",
    image: "https://placehold.co/1920x1080/f0f0f3/d8d8d8.png?text=Phones",
    count: 24,
  },
  {
    id: "tablets",
    name: "tablets",
    image: "https://placehold.co/1920x1080/f0f0f3/d8d8d8.png?text=Tablets",
    count: 18,
  },
  {
    id: "headphones",
    name: "headphones",
    image: "https://placehold.co/1920x1080/f0f0f3/d8d8d8.png?text=Headphones",
    count: 32,
  },
  {
    id: "accessories",
    name: "accessories",
    image: "https://placehold.co/1920x1080/f0f0f3/d8d8d8.png?text=Accessories",
    count: 45,
  },
];

// Mock featured products
export const featuredProducts = [
  {
    id: "1",
    name: "iPhone 15 Pro",
    price: 27990000,
    image:
      "https://placehold.co/1920x1080/f0f0f3/d8d8d8.png?text=iPhone+15+Pro",
    category: "phones",
  },
  {
    id: "2",
    name: "iPad Pro M2",
    price: 23990000,
    image: "https://placehold.co/1920x1080/f0f0f3/d8d8d8.png?text=iPad+Pro+M2",
    category: "tablets",
  },
  {
    id: "3",
    name: "AirPods Pro 2",
    price: 5990000,
    image:
      "https://placehold.co/1920x1080/f0f0f3/d8d8d8.png?text=AirPods+Pro+2",
    category: "headphones",
  },
  {
    id: "4",
    name: "Sạc dự phòng 20000mAh",
    price: 990000,
    image:
      "https://placehold.co/1920x1080/f0f0f3/d8d8d8.png?text=Sạc+dự+phòng+20000mAh",
    category: "accessories",
  },
];

export const dataFooter = [
  {
    title: "Categories",
    items: [
      { label: "Phones", href: "/category/phones" },
      { label: "Tablets", href: "/category/tablets" },
      { label: "Headphones", href: "/category/headphones" },
      { label: "Accessories", href: "/category/accessories" },
    ],
  },
  {
    title: "Information",
    items: [
      { label: "About Us", href: null },
      { label: "Contact", href: null },
      { label: "Blog", href: null },
      { label: "FAQ", href: null },
    ],
  },
  {
    title: "Contact",
    items: [
      { label: "123 Technology Street, Hanoi" },
      {
        label: "Email: info@VietMobile.com",
        href: "mailto:info@VietMobile.com",
      },
      { label: "Hotline: 1900 1234", href: "tel:19001234" },
    ],
  },
];
