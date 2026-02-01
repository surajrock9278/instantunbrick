import React from 'react';
import { FaqItem, ServiceItem } from './types';
import { Cpu, Zap, ShieldCheck, Activity } from 'lucide-react';

export const APP_NAME = "Instant Unbrick";

export const SERVICES: ServiceItem[] = [
  {
    id: 'hard-brick',
    title: 'Hard Brick Recovery',
    description: 'Fix devices that show no signs of life, black screen, or are detected as QDLoader 9008.',
    icon: <Cpu className="w-8 h-8 text-brand-400" />,
    price: '$25'
  },
  {
    id: 'bootloop',
    title: 'Bootloop Fix',
    description: 'Repair devices stuck on the Xiaomi/Redmi/POCO logo or constantly restarting.',
    icon: <Activity className="w-8 h-8 text-brand-400" />,
    price: '$20'
  },
  {
    id: 'edl-auth',
    title: 'EDL Authorization',
    description: 'Remote authorized flashing for devices requiring authenticated Xiaomi accounts.',
    icon: <ShieldCheck className="w-8 h-8 text-brand-400" />,
    price: '$30'
  },
  {
    id: 'flashing',
    title: 'Custom Flashing',
    description: 'Expert flashing of Global, EU, or China ROMs to unbrick or change regions.',
    icon: <Zap className="w-8 h-8 text-brand-400" />,
    price: '$15'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "What is a hard-bricked Xiaomi phone?",
    answer: "A hard-bricked phone shows no signs of life. It doesn't turn on, doesn't charge, and the screen remains black. However, it is usually detected by a PC as 'Qualcomm HS-USB QDLoader 9008' when connected via USB."
  },
  {
    question: "Is unbricking safe for my data?",
    answer: "In most hard brick and bootloop cases, flashing the stock firmware is required to revive the phone, which typically erases internal storage. We prioritize getting the phone working again. If data preservation is possible (rare in these states), we will inform you beforehand."
  },
  {
    question: "How long does the remote service take?",
    answer: "Most services are completed within 20-40 minutes once we connect to your PC. The exact time depends on your internet speed for downloading the necessary firmware files."
  },
  {
    question: "Do I need to send my phone to you?",
    answer: "No! We operate 100% remotely. You only need a Windows PC, a USB cable, and a stable internet connection. We use secure remote desktop software (like TeamViewer or UltraViewer) to perform the repair."
  },
  {
    question: "What happens if you can't fix it?",
    answer: "We offer a 'No Fix, No Fee' policy. If we cannot unbrick your device due to a software issue (excluding hardware failures like dead eMMC/motherboard), we will refund your payment in full."
  }
];

export const TESTIMONIALS = [
  {
    name: "Alex M.",
    role: "Xiaomi 13 Pro User",
    text: "Thought my phone was dead forever after a bad OTA update. Instant Unbrick fixed it in 30 mins via TeamViewer. Lifesavers!",
    rating: 5
  },
  {
    name: "Sarah K.",
    role: "Redmi Note 12 User",
    text: "Professional and fast. I was stuck in a bootloop and panic mode. They guided me through everything.",
    rating: 5
  },
  {
    name: "David R.",
    role: "POCO F5 User",
    text: "Cheaper than the local repair shop and I didn't have to leave my house. Highly recommended for EDL issues.",
    rating: 5
  }
];