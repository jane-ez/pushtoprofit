"use client";
import React, { useState, useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Download,
  Share2,
  Heart,
} from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
  description: string;
  date: string;
}

interface GalleryCategory {
  id: string;
  name: string;
  count: number;
}

const Gallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Initialize visibility animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Sample gallery data
  const categories: GalleryCategory[] = [
    { id: "all", name: "All Photos", count: 18 },
    { id: "2025Conference", name: "2025 Conference", count: 13 },
    { id: "2024Conference", name: "2024 Conference", count: 5 },
  ];

  const images: GalleryImage[] = [
    {
      id: "1",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774283508/IMG-20250401-WA0146_buvbin.jpg",
      title: "Convener's Speech",
      category: "2025Conference",
      description: "Convener's speech at the 2025 conference",
      date: "2025",
    },
    {
      id: "2",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774283141/1_mliqfc.jpg",
      title: "Classroom View",
      category: "2024Conference",
      description: "Students focused during a classroom session",
      date: "2024",
    },
    {
      id: "3",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774283506/IMG-20250401-WA0127_dlebqx.jpg",
      title: "Handing of Award",
      category: "2025Conference",
      description: "An angled view showcasing the school building",
      date: "2025",
    },
    {
      id: "4",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774283141/2_emx8de.jpg",
      title: "Students in Class",
      category: "2024Conference",
      description: "Interactive learning session with students in class",
      date: "2024",
    },
    {
      id: "5",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774283508/IMG-20250401-WA0139_ou4xw4.jpg",
      title: "School Entrance",
      category: "2025Conference",
      description: "Neat and well-maintained entrance to the school compound",
      date: "2025",
    },
    {
      id: "6",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774283504/IMG-20250401-WA0081_mcqkrh.jpg",
      title: "Outdoor Corridor",
      category: "2025Conference",
      description: "Walkway connecting the classrooms and offices",
      date: "2025",
    },
    {
      id: "7",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774283501/IMG-20250401-WA0048_mmn8xr.jpg",
      title: "Students Gathering",
      category: "2025Conference",
      description: "Students chatting and relaxing during break time",
      date: "2025",
    },
    {
      id: "8",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774283498/IMG-20250401-WA0175_s6dbiz.jpg",
      title: "School Assembly Ground",
      category: "2025Conference",
      description: "Open assembly area used for morning gatherings",
      date: "2025",
    },
    {
      id: "9",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774283141/3_zof5nd.jpg",
      title: "Inside the Classroom",
      category: "2024Conference",
      description: "Students paying attention during a lecture",
      date: "2024",
    },
    {
      id: "10",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774283496/IMG-20250402-WA0098_rkxzee.jpg",
      title: "Student performing practicals",
      category: "2025Conference",
      description: "Chemistry practicals being performed by a student",
      date: "2025",
    },
    {
      id: "11",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774283493/IMG-20250401-WA0106_k97y6r.jpg",
      title: "Students Walking Across Campus",
      category: "2025Conference",
      description: "Students heading to class in the morning",
      date: "2025",
    },
    {
      id: "12",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774283490/IMG-20250401-WA0174_gpzylm.jpg",
      title: "Side View of School Building",
      category: "2025Conference",
      description: "Architectural side view of the main classroom block",
      date: "2025",
    },
    {
      id: "13",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774283141/4_eoc85t.jpg",
      title: "Students Reading",
      category: "2024Conference",
      description: "Quiet reading time between lectures",
      date: "2025",
    },

    {
      id: "14",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774283489/IMG-20250402-WA0071_smkirp.jpg",
      title: "Students Group Photo",
      category: "2025Conference",
      description: "Group of students posing on campus",
      date: "2025",
    },
    {
      id: "15",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774283489/IMG-20250402-WA0080_ngilrh.jpg",
      title: "Students Group Photo",
      category: "2025Conference",
      description: "Group of students posing on campus",
      date: "2025",
    },

    {
      id: "16",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774283487/IMG-20250401-WA0163_wggryd.jpg",
      title: "Students revising",
      category: "2025Conference",
      description: "Happy students sharing a moment between classes",
      date: "2025",
    },

    {
      id: "17",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774283141/5_lkmbfb.jpg",
      title: "Students Revising Notes",
      category: "2024Conference",
      description: "Students reviewing materials before class",
      date: "2025",
    },

    {
      id: "18",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774283487/IMG-20250401-WA0169_nrfsta.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "19",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364266/IMG-20250401-WA0042_zt27t0.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "20",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364278/IMG-20250401-WA0013_mopioy.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "21",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364276/IMG-20250401-WA0176_cn931o.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "22",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364276/IMG-20250402-WA0087_htv5au.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "23",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364272/IMG-20250401-WA0105_c34rrx.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "24",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364269/IMG-20250401-WA0079_k6gq2p.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "25",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364264/IMG-20250402-WA0099_vpnixm.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "26",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364259/IMG-20250402-WA0043_rwv0e3.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "27",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364260/IMG-20250402-WA0048_mt3tdf.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "28",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364254/IMG-20250401-WA0181_ymgfdx.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "29",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364258/IMG-20250401-WA0182_nyozur.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "30",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364251/IMG-20250401-WA0135_d3ocj2.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "31",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364238/IMG-20250401-WA0153_ecsmg0.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "32",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364250/IMG-20250401-WA0133_gooxwy.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "33",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364247/IMG-20250401-WA0179_zikex8.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "34",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364244/IMG-20250401-WA0129_njsse0.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "35",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364243/IMG-20250401-WA0178_cwtj4n.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "36",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364226/IMG-20250401-WA0120_tqw2uc.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "37",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364218/IMG-20250401-WA0118_v7uggp.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "38",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364213/IMG-20250402-WA0079_b3npy5.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "39",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364215/IMG-20250401-WA0101_ipfkjb.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "40",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364211/IMG-20250402-WA0077_snfwsq.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "41",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364212/IMG-20250401-WA0022_z8knms.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "42",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364210/IMG-20250401-WA0096_tde7dn.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "43",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364208/IMG-20250401-WA0100_hllv1e.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "44",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364190/IMG-20250402-WA0097_lnq6w1.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "44",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364172/IMG-20250402-WA0036_u7opl7.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "46",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364198/IMG-20250401-WA0091_jrbzcj.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "47",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364171/IMG-20250402-WA0069_igq9fn.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "48",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364171/IMG-20250402-WA0020_andfyx.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "49",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364170/IMG-20250402-WA0061_kurytf.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
    {
      id: "50",
      src: "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774283507/IMG-20250401-WA0094_pists8.jpg",
      title: "Front Yard View",
      category: "2025Conference",
      description: "Front compound showing the main entrance and walkway",
      date: "2025",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage?.id
    );
    let newIndex;

    if (direction === "next") {
      newIndex =
        currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex =
        currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }

    setSelectedImage(filteredImages[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage, navigateImage]);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-amber-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-800/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-amber-900/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30, 58, 138, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 58, 138, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        {/* Header Section */}
        <div
          className={`mb-16 sm:mb-20 md:mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-4xl">
            {/* Decorative accent */}
            <div
              className={`flex items-center space-x-4 mb-6 transition-all duration-600 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div
                className={`bg-gradient-to-r from-amber-800 to-amber-900 h-px transition-all duration-300 delay-400 ${
                  isVisible ? "w-12" : "w-0"
                }`}
              />
              <span
                className={`text-sm font-medium text-amber-800 tracking-[0.15em] uppercase transition-opacity duration-600 delay-600 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                School Gallery
              </span>
            </div>

            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[0.9] tracking-tight mb-8 transition-all duration-300 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Capturing Our
              <br />
              <span className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 bg-clip-text text-transparent">
                Educational Journey
              </span>
            </h1>

            <div
              className={`bg-gradient-to-r from-amber-800 to-amber-900 h-1 transition-all duration-300 delay-800 ${
                isVisible ? "w-16" : "w-0"
              }`}
            />

            <p
              className={`text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-3xl mt-8 transition-all duration-300 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Explore moments of learning, growth, and achievement at Push To Profit. From classroom innovations to sporting triumphs,
              discover the vibrant life that defines our educational community.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div
          className={`mb-12 transition-all duration-300 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-amber-800 to-amber-900 text-white shadow-lg"
                    : "bg-white/80 backdrop-blur-sm text-amber-800 border border-amber-200 hover:bg-amber-50"
                } transition-all duration-300 delay-${800 + index * 100}`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                {category.name}
                <span
                  className={`ml-2 text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category.id
                      ? "bg-white/20 text-white"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl delay-${
                900 + index * 100
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${900 + index * 100}ms` }}
              onClick={() => openLightbox(image, index)}
            >
              {/* Image Container */}
              <div className="aspect-[4/3] relative overflow-hidden">
                {/* Blue accent border */}
                <div
                  className={`absolute -left-1 top-0 w-1 bg-gradient-to-b from-amber-700 to-amber-900 transition-all duration-1000 delay-${
                    1100 + index * 100
                  } ${isVisible ? "h-full opacity-100" : "h-0 opacity-0"}`}
                />

                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-amber-800/20 to-amber-900/60 opacity-60 group-hover:opacity-80 transition-all duration-500" />

                {/* Hover Icons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-amber-800/80 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20">
                    {categories.find((cat) => cat.id === image.category)
                      ?.name || image.category}
                  </span>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-900/90 via-amber-900/60 to-transparent p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-medium text-sm mb-1 truncate">
                    {image.title}
                  </h3>
                  <p className="text-amber-100 text-xs opacity-90 line-clamp-2">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          className={`mt-20 sm:mt-24 md:mt-28 transition-all duration-1000 delay-1500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Photos Captured" },
              { number: "8", label: "Years of Memories" },
              { number: "15+", label: "Event Categories" },
              { number: "1000+", label: "Student Moments" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-600 delay-${
                  1600 + index * 100
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <div className="text-2xl md:text-3xl font-light text-amber-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div
          className={`mt-16 transition-all duration-1000 delay-2000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-8">
              <div
                className={`bg-gradient-to-r from-transparent via-amber-800 to-transparent h-px transition-all duration-300 delay-2200 ${
                  isVisible ? "w-16" : "w-0"
                }`}
              />
              <div
                className={`w-3 h-3 border border-amber-800 transform rotate-45 transition-all duration-300 delay-2400 ${
                  isVisible ? "scale-100" : "scale-0"
                }`}
              />
              <div
                className={`bg-gradient-to-r from-transparent via-amber-800 to-transparent h-px transition-all duration-300 delay-2600 ${
                  isVisible ? "w-16" : "w-0"
                }`}
              />
            </div>
            <p
              className={`text-sm text-amber-700 font-light tracking-[0.15em] uppercase transition-opacity duration-600 delay-2800 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Memories That Last Forever
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white/80 hover:text-white z-10 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full max-h-[80vh] object-contain rounded"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white text-xl font-medium">
                    {selectedImage.title}
                  </h3>
                  <span className="text-white/60 text-sm">
                    {currentImageIndex + 1} / {filteredImages.length}
                  </span>
                </div>
                <p className="text-white/80 text-sm mb-3">
                  {selectedImage.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-amber-800/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {
                      categories.find(
                        (cat) => cat.id === selectedImage.category
                      )?.name
                    }
                  </span>
                  <div className="flex items-center space-x-3">
                    <button className="text-white/80 hover:text-white transition-colors duration-200">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="text-white/80 hover:text-white transition-colors duration-200">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="text-white/80 hover:text-white transition-colors duration-200">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
