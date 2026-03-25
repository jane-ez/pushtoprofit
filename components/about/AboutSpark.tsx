"use client";
import React, { useState, useEffect } from "react";
import { Check, BookOpen, Award } from "lucide-react";
import Image from "next/image";

interface OurStoryProps {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  features?: Array<{
    title: string;
    icon?: React.ComponentType<{ className?: string }>;
  }>;
  containerClassName?: string;
}

const OurStory: React.FC<OurStoryProps> = ({
  title = "JANE MAXWELL",
  subtitle = "Awards and Recognition",
  description = "Jane Maxwell is a seasoned business and personal development consultant with over nine years of professional experience spanning indigenous and international health and wellness organizations. She has built a strong reputation for helping individuals and organizations develop strategic clarity, leadership capacity, and sustainable profitability.",
  image = "/ceopushtoprofit.png",
  features = [
    { title: "Exceptional Leadership Award", icon: Award },
    {
      title: "Innovative Impact Award from Youth Evolve Conference",
      icon: Award,
    },
    {
      title:
        "Award for Outstanding Contribution to the Growth of Livepure Africa in Nigeria",
      icon: Award,
    },
    // { title: "International Standards", icon: Heart },
  ],
  containerClassName = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`relative py-16 sm:py-24 md:py-32 lg:py-48 bg-white overflow-hidden ${containerClassName}`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-800/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-amber-700/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div
            className={`relative order-2 lg:order-1 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Blue accent border */}
              <div
                className={`absolute -left-4 top-0 w-1 bg-linear-to-b from-amber-700 to-amber-800 transition-all duration-1000 delay-300 ${
                  isVisible ? "h-full opacity-100" : "h-0 opacity-0"
                }`}
              />

              {/* Image container */}
              <div className="relative overflow-hidden rounded hover:scale-105 transition-transform duration-300">
                <Image
                  src={image}
                  alt="Push To Profit"
                  width={1920} // set an appropriate width
                  height={800} // set an appropriate height
                  className={`w-full h-200 object-cover transition-all duration-300 ${
                    isVisible ? "grayscale-0 scale-100" : "grayscale scale-110"
                  } hover:grayscale-0`}
                />

                {/* Image overlay */}
                <div
                  className={`absolute inset-0 bg-linear-to-br from-black/30 via-amber-900/20 to-black/50 transition-opacity duration-300 delay-700 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* School info overlay */}
                <div
                  className={`absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded p-4 border border-white/20 transition-all duration-300 delay-1000 hover:scale-105 hover:-translate-y-1 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="flex items-center space-x-3 text-white">
                    <BookOpen className="w-5 h-5 text-amber-300" />
                    <div>
                      <p className="font-medium">Founded 2023</p>
                      <p className="text-sm text-white/80">Shaping</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative corner element */}
              <div
                className={`absolute -top-4 -right-4 w-8 h-8 transition-all duration-300 delay-1200 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              >
                <div
                  className={`w-full h-1 bg-linear-to-r from-amber-700 to-amber-800 mb-2 transition-all duration-300 delay-1700 ${
                    isVisible ? "w-full" : "w-0"
                  }`}
                />
                <div
                  className={`w-1 bg-linear-to-b from-amber-700 to-amber-800 transition-all duration-300 delay-1800 800 ${
                    isVisible ? "h-full" : "h-0"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`relative order-1 lg:order-2 space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Section Header */}
            <div className="space-y-6">
              <div
                className={`flex items-center space-x-4 transition-all duration-300 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
              >
                <div
                  className={`bg-linear-to-r from-amber-700 to-amber-800 h-px transition-all duration-300 delay-700 ${
                    isVisible ? "w-12" : "w-0"
                  }`}
                />
                <span
                  className={`text-sm font-medium text-amber-700 tracking-[0.15em] uppercase transition-opacity duration-300 delay-800 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Meet the Convener
                </span>
              </div>

              <h2
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight transition-all duration-300 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <span className="bg-linear-to-r from-amber-300 via-amber-700 to-amber-800 bg-clip-text text-transparent">
                  {title}
                </span>
              </h2>

              <div
                className={`bg-linear-to-r from-amber-700 to-amber-800 h-1 transition-all duration-300 delay-800 ${
                  isVisible ? "w-16" : "w-0"
                }`}
              />
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p
                className={`text-lg md:text-xl leading-relaxed font-light bg-linear-to-r from-neutral-900 via-amber-800 to-neutral-900 bg-clip-text text-transparent transition-all duration-300 delay-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {description}
              </p>

              {/* Additional school info */}
              <div
                className={`bg-amber-50/50 rounded p-6 border-l-4 border-amber-700 hover:translate-x-2 hover:border-l-8 transition-all duration-300 delay-800 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <p className="text-base leading-relaxed text-gray-700">
                  Lead Consultant, Janelheight Consult Ltd Business & Personal
                  Development Consultant | Serial Entrepreneur | Sales
                  Strategist | Team Builder | Public & Motivational Speaker
                </p>
              </div>
            </div>

            {/* What Sets Us Apart */}
            <div
              className={`space-y-6 transition-all duration-300 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-xl md:text-2xl font-semibold bg-linear-to-r from-amber-300 via-amber-700 to-amber-800 bg-clip-text text-transparent">
                {subtitle}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 group hover:translate-x-2 transition-all duration-200 delay-${
                      800 + index * 100
                    } ${
                      isVisible
                        ? "opacity-100 translate-x-0 scale-100"
                        : "opacity-0 -translate-x-5 scale-95"
                    }`}
                    style={{
                      transitionDelay: `${800 + index * 100}ms`,
                      gridColumn:
                        index === features.length - 1 ? "span 2" : "span 1",
                    }}
                  >
                    <div className="shrink-0 w-5 h-5 rounded-full bg-linear-to-r from-amber-700 to-amber-800 flex items-center justify-center group-hover:scale-125 group-hover:rotate-180 transition-all duration-300">
                      {feature.icon ? (
                        <feature.icon className="w-3 h-3 text-white" />
                      ) : (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <span className="text-base md:text-lg font-medium bg-linear-to-r from-neutral-900 via-amber-800 to-neutral-900 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:to-amber-700 transition-all duration-200">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Features */}
            <div
              className={`space-y-4 transition-all duration-300 delay-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h4 className="text-lg font-medium text-amber-800">
                Professional Impact & Services
              </h4>
              <div className="space-y-3">
                {[
                  {
                    title: "HR Manager:",
                    desc: "King B Real Estate and Construction Limited",
                  },
                  {
                    title: "Business Development Manager:",
                    desc: "Psalm Choral Symphony Organization",
                  },
                  // {
                  //   title: "Character Building:",
                  //   desc: "Focus on developing spiritual, moral, and academic values",
                  // },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 hover:translate-x-2 transition-all duration-200 delay-${
                      1100 + index * 100
                    } ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-5"
                    }`}
                    style={{ transitionDelay: `${1100 + index * 100}ms` }}
                  >
                    <div
                      className={`w-2 h-2 bg-amber-700 rounded-full mt-2 shrink-0 hover:scale-150 transition-all duration-300 delay-${
                        1200 + index * 100
                      } ${isVisible ? "scale-100" : "scale-0"}`}
                      style={{ transitionDelay: `${1200 + index * 100}ms` }}
                    />
                    <p className="text-gray-700 leading-relaxed">
                      <strong>{item.title}</strong> {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p>
              Beyond her professional achievements, Jane is a devoted Christian
              who is passionate about mentoring and empowering young creatives
              to succeed. She has been happily married for 15 years to Mr.
              Maxwell Ezekiel, and they are blessed with four wonderful
              children.
            </p>

            {/* Call to Action */}
            <div
              className={`pt-6 transition-all duration-300 delay-1700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-linear-to-r from-amber-800 to-amber-800 rounded p-6 text-white hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                <h4 className="text-lg font-semibold mb-2">
                  Ready to Join Our Family?
                </h4>
                <p className="text-amber-100 mb-4">
                  Contact us today to learn more about business opportunities at
                  Push To Profit.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 text-sm">
                  <span>📞 +234 806 465 7119</span>
                  <span>✉️ pushtoprofitcommunity@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div
              className={`pt-8 transition-all duration-1000 delay-1800 ${
                isVisible ? "opacity-70" : "opacity-0"
              }`}
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`bg-linear-to-r from-amber-700 to-amber-800 h-px transition-all duration-300 delay-1700 ${
                    isVisible ? "w-8" : "w-0"
                  }`}
                />
                <div
                  className={`w-2 h-2 bg-amber-700 rounded-full transition-all duration-300 delay-1900 ${
                    isVisible ? "scale-100" : "scale-0"
                  }`}
                />
                <div
                  className={`bg-linear-to-r from-amber-800 to-amber-800 h-px transition-all duration-300 delay-2100 ${
                    isVisible ? "w-12" : "w-0"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
