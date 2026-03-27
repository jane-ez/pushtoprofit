"use client";

import Image from "next/image";
import { useState, useRef, useEffect, JSX } from "react";

interface VisionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detail: string;
  image: string;
  imageAlt: string;
}

interface MousePosition {
  x: number;
  y: number;
}

export default function VisionSection(): JSX.Element {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Initialize visibility animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Mouse tracking for hover effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const visionItems: VisionItem[] = [
    {
      id: "vision",
      title: "Our Vision",
      subtitle: "Maximizing Profitability",
      description:
        "At Push to Profit, our vision is to discover, define and design the untapped potential of small and medium sized business owners, empowering them to grow, innovate, and achieve sustainable success while maximizing profitability.",
      detail: "",
      image:
        "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774283489/IMG-20250402-WA0071_smkirp.jpg",
      imageAlt: "At the 2025 conference",
    },
    {
      id: "mission",
      title: "Our Mission",
      subtitle: "Holistic Development",
      description:
        "Our mission is to equip small and medium-sized business owners with the knowledge, skills, and confidence to compete on a global scale. We achieve this through intensive training, personalized one-on-one mentorship, and dynamic group learning experiences, fostering a culture of professionalism, innovation, and growth.",
      detail: "",
      image:
        "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364211/IMG-20250402-WA0077_snfwsq.jpg",
      imageAlt: "Our mission pics",
    },
    {
      id: "approach",
      title: "Push to Profit Business Conference 2026",
      subtitle: "Primary Goal & Ideology",
      description:
        "The Push to Profit Business Conference aims to equip small and medium-sized business owners with transformative insights that first reshape their mindset and, in turn, elevate their businesses and financial success. By connecting them with industry experts and fostering a dynamic environment for networking, collaboration, and cross-industry  partnerships,  the  conference  entrepreneurs to unlock new opportunities for growth.",
      detail:
        "We believe that a well-trained business owner with vision and strategic foresight can achieve remarkable success in a shorter time compared to those without proper guidance. By creating this platform, we can reach and train more entrepreneurs simultaneously, helping them become the best versions of themselves while maximizing profitability.",
      image:
        "https://res.cloudinary.com/dlfui2ojv/image/upload/v1774364276/IMG-20250401-WA0176_cn931o.jpg",
      imageAlt: "Students in music class",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-linear-to-br from-amber-50 via-white to-amber-100 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-700/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-amber-800/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        {/* Section Header */}
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
                className={`bg-linear-to-r from-amber-700 to-amber-900 h-px transition-all duration-300 delay-400 ${
                  isVisible ? "w-12" : "w-0"
                }`}
              />
              <span
                className={`text-sm font-medium text-amber-700 tracking-[0.15em] uppercase transition-opacity duration-600 delay-600 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                Push to Profit Business Philosophy
              </span>
            </div>

            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-[0.9] tracking-tight mb-8 transition-all duration-300 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Building Business Owners for
              <br />
              <span className="bg-linear-to-r from-amber-800/80 via-amber-700 to-amber-900 bg-clip-text text-transparent">
                Maximum Profit
              </span>
            </h2>

            <div
              className={`bg-linear-to-r from-amber-700 to-amber-900 h-1 transition-all duration-300 delay-800 ${
                isVisible ? "w-16" : "w-0"
              }`}
            />

            <p
              className={`text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-3xl mt-8 transition-all duration-300 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Push to Profit is a transformative business development community
              dedicated to empowering small and medium-sized business owners to
              scale, innovate, and achieve long-term success. Through intensive
              training, personalized mentorship, and strategic networking
              opportunities, we provide entrepreneurs with the tools and
              insights needed to thrive in an evolving business landscape.
            </p>
            <p
              className={`text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-3xl mt-8 transition-all duration-300 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              With a mission to bridge the gap between potential and
              profitability, we equip business owners with industry expertise,
              cutting-edge strategies, and a global mindset. Our programs foster
              professionalism, innovation, and growth, ensuring that every
              participant is positioned for success in today’s competitive
              market.
            </p>
          </div>
        </div>

        {/* Vision Cards Grid */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {visionItems.map((item: VisionItem, index: number) => (
            <div
              key={item.id}
              className={`group relative transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${700 + index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image Section */}
                <div
                  className={`relative overflow-hidden bg-gray-100 rounded transition-all duration-300 hover:scale-105 ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="aspect-4/3 relative">
                    {/* Blue accent border */}
                    <div
                      className={`absolute -left-2 top-0 w-1 bg-linear-to-b from-amber-800/80 to-amber-900 transition-all duration-1000 delay-${
                        1000 + index * 200
                      } ${isVisible ? "h-full opacity-100" : "h-0 opacity-0"}`}
                    />

                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      width={800} // set an appropriate width
                      height={600} // set an appropriate height
                      className={`w-full h-full object-cover transition-all duration-300 ${
                        isVisible
                          ? "grayscale-0 scale-100"
                          : "grayscale scale-110"
                      } group-hover:scale-105`}
                    />

                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-linear-to-br from-amber-900/25 via-amber-900/15 to-amber-900/30 opacity-70 group-hover:opacity-50 transition-opacity duration-300" />

                    {/* Educational icon accent */}
                    <div
                      className={`absolute top-6 right-6 transition-all duration-600 delay-${
                        1200 + index * 200
                      } ${
                        isVisible
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-0"
                      }`}
                    >
                      <div className="w-8 h-8 relative bg-white/10 backdrop-blur-sm rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-4 h-4 border border-white/60 rounded-sm">
                          <div className="w-2 h-2 bg-white/60 rounded-full m-auto mt-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* School info overlay */}
                    <div
                      className={`absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded p-3 border border-white/20 transition-all duration-600 delay-${
                        1400 + index * 200
                      } hover:scale-105 ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <div className="text-white text-sm">
                        <p className="font-medium">Est. 2023</p>
                        <p className="text-white/80 text-xs">
                          208 Obiwali Road, Rumuigbo Port Harcourt
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  {/* Card number and subtitle */}
                  <div
                    className={`flex items-center space-x-6 transition-all duration-600 delay-${
                      800 + index * 200
                    } ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-8"
                    }`}
                  >
                    <span className="text-sm font-medium text-gray-400 tracking-[0.2em]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div
                      className={`bg-gray-200 group-hover:bg-amber-400 h-px transition-all duration-300 delay-${
                        1000 + index * 200
                      } ${isVisible ? "w-8" : "w-0"}`}
                    />
                    <span
                      className={`text-sm font-medium text-amber-700 tracking-[0.15em] uppercase transition-opacity duration-600 delay-${
                        1200 + index * 200
                      } ${isVisible ? "opacity-100" : "opacity-0"}`}
                    >
                      {item.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight tracking-tight group-hover:from-amber-800/80 group-hover:to-amber-900 group-hover:bg-linear-to-r group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 delay-${
                      900 + index * 200
                    } ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-base sm:text-lg text-gray-600 leading-relaxed font-light transition-all duration-600 delay-${
                      1100 + index * 200
                    } ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Detail text */}
                  {item.detail ? (
                    <p
                      className={`text-base text-gray-700 leading-relaxed font-light border-l-2 border-gray-200 pl-6 group-hover:border-amber-400 transition-all duration-300 delay-${
                        1200 + index * 200
                      } ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                    >
                      {item.detail}
                    </p>
                  ) : null}

                  {/* Educational highlights for specific cards */}
                  {item.id === "mission" && (
                    <div
                      className={`bg-amber-50/50 rounded p-4 border-l-4 border-amber-700 hover:translate-x-2 hover:border-l-6 transition-all duration-300 delay-${
                        1300 + index * 200
                      } ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                    >
                      <h4 className="text-sm font-semibold text-amber-700 mb-2">
                        Key Features:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-amber-700 rounded-full" />
                          <span>
                            Equip small and medium-sized business owners
                          </span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-amber-700 rounded-full" />
                          <span>Intensive training & mentorship</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-amber-700 rounded-full" />
                          <span>
                            Fostering a culture of innovation and growth
                          </span>
                        </li>
                      </ul>
                    </div>
                  )}

                  {item.id === "approach" && (
                    <div
                      className={`bg-amber-50/50 rounded p-4 border-l-4 border-amber-800/80 hover:translate-x-2 hover:border-l-6 transition-all duration-300 delay-${
                        1300 + index * 200
                      } ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                    >
                      <h4 className="text-sm font-semibold text-amber-700 mb-2">
                        What you'll get:
                      </h4>
                      <div className="text-sm text-gray-600 grid grid-cols-2 gap-2">
                        <span className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-amber-800/80 rounded-full" />
                          <span>Result</span>
                        </span>
                        <span className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-amber-800/80 rounded-full" />
                          <span>Clarity</span>
                        </span>
                        <span className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-amber-800/80 rounded-full" />
                          <span>Mentorship</span>
                        </span>
                        <span className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-amber-800/80 rounded-full" />
                          <span>Framework</span>
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Hover indicator */}
                  <div
                    className={`flex items-center space-x-4 pt-4 transition-all duration-600 delay-${
                      1400 + index * 200
                    } ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                  >
                    <div className="w-12 h-px bg-linear-to-r from-amber-700 to-amber-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <div className="w-2 h-2 bg-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>

              {/* Separator line */}
              {index < visionItems.length - 1 && (
                <div
                  className={`mt-12 md:mt-16 lg:mt-20 transition-all duration-300 delay-${
                    1700 + index * 200
                  } ${isVisible ? "opacity-100" : "opacity-0"}`}
                >
                  <div className="w-full h-px bg-linear-to-r from-transparent via-amber-300 to-transparent" />
                </div>
              )}

              {/* Hover preview for desktop */}
              {hoveredCard === item.id &&
                typeof window !== "undefined" &&
                window.innerWidth > 768 && (
                  <div
                    className="fixed pointer-events-none z-50 opacity-0 animate-fade-in"
                    style={{
                      left: `${mousePosition.x + 20}px`,
                      top: `${mousePosition.y - 100}px`,
                      transform: "translate(0, 0)",
                    }}
                  >
                    <div className="bg-white/95 backdrop-blur-sm border border-amber-200 p-4 shadow-lg max-w-xs rounded">
                      <p className="text-sm text-amber-700 font-medium">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-amber-700 mt-1">
                        For high profitability
                      </p>
                    </div>
                  </div>
                )}
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div
          className={`mt-20 sm:mt-24 md:mt-28 transition-all duration-1000 delay-2000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-8">
              <div
                className={`bg-linear-to-r from-transparent via-amber-700 to-transparent h-px transition-all duration-300 delay-2200 ${
                  isVisible ? "w-16" : "w-0"
                }`}
              />
              <div
                className={`w-3 h-3 border border-amber-700 transform rotate-45 transition-all duration-300 delay-2400 ${
                  isVisible ? "scale-100" : "scale-0"
                }`}
              />
              <div
                className={`bg-linear-to-r from-transparent via-amber-700 to-transparent h-px transition-all duration-300 delay-2600 ${
                  isVisible ? "w-16" : "w-0"
                }`}
              />
            </div>
            <p
              className={`text-sm text-amber-700 font-light tracking-[0.15em] uppercase transition-opacity duration-600 delay-2800 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Excellence Through Development
            </p>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div
          className={`mt-16 text-center transition-all duration-300 delay-2400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-linear-to-r from-amber-800 to-amber-900 rounded p-8 text-white hover:scale-105 hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-light mb-4">
              Ready to Join Our Family?
            </h3>
            <p className="text-amber-200 mb-6 max-w-2xl mx-auto">
              Experience world-class sustained and accelerated business and
              personal growth. Contact us to learn more about the possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <div className="flex items-center space-x-2">
                <span> +234 8178592499, +234 8095900266</span>
              </div>
              <div className="flex items-center space-x-2">
                <span> pushtoprofitcommunity@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div
          className={`pt-8 transition-all duration-1000 delay-2600 ${
            isVisible ? "opacity-70" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-center space-x-4">
            <div
              className={`bg-linear-to-r from-amber-700 to-amber-900 h-px transition-all duration-300 delay-2800 ${
                isVisible ? "w-8" : "w-0"
              }`}
            />
            <div
              className={`w-2 h-2 bg-amber-700 rounded-full transition-all duration-300 delay-3000 ${
                isVisible ? "scale-100" : "scale-0"
              }`}
            />
            <div
              className={`bg-linear-to-r from-amber-800 to-amber-900 h-px transition-all duration-300 delay-3200 ${
                isVisible ? "w-12" : "w-0"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
