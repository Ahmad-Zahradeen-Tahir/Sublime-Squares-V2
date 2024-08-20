import { BarChart, BarChart2, CheckCircle, CheckSquare, Grid3X3, Home, PieChart, Users } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Why Us", href: "#whyus" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contactus" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <CheckCircle />,
    text: "Effortless Setup",
    description:
      "Experience a smooth and straightforward installation process with our intuitive setup, designed to integrate solar panels seamlessly into your home or workspace.",
  },
  {
    icon: <Home />,
    text: "Versatile Applications",
    description:
      "Our solar panels are designed to meet diverse needs, making them ideal for residential areas, college campuses, and various other environments.",
  },
  {
    icon: <CheckSquare />,
    text: "Pre-Configured Solutions",
    description:
      "Choose from our range of pre-configured solar setups tailored for different applications, ensuring a quick and efficient installation process.",
  },
  {
    icon: <BarChart2 />,
    text: "Live Monitoring",
    description:
      "Monitor the performance and energy output of your solar panels in real-time, allowing you to track efficiency and make adjustments as needed.",
  },
  {
    icon: <Users />,
    text: "Shared Access",
    description:
      "Collaborate effortlessly with others by sharing access to your solar system, enabling joint management and optimization for better energy savings.",
  },
  {
    icon: <PieChart />,
    text: "Performance Insights",
    description:
      "Gain valuable insights into your solar system’s performance with detailed analytics, helping you optimize energy usage and maximize savings.",
  },
];

export const checklistItems = [
  {
    title: "Tailored for Your Needs",
    description:
      "Whether for residential use or campus environments, our solar solutions are adaptable to fit your specific requirements.",
  },
  {
    title: "Sustainable Solutions",
    description:
      "We are committed to sustainability. Our products not only help reduce your energy bills but also contribute to a greener planet.",
  },
  {
    title: "Innovative Technology",
    description:
      "Our solar panels are designed with cutting-edge technology to maximize efficiency and durability, ensuring you get the best performance.",
  },
  {
    title: "Customer-Centric Support",
    description:
      "From purchase to installation and beyond, our dedicated support team is here to assist you every step of the way.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
