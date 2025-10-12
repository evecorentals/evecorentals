"use client";

import Image from "next/image";

export default function HeroSection() {
  const wa = "https://wa.me/919866277630";

  return (
    <section id="home" className="bg-gradient-to-r from-green-600 to-green-500 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-24">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Affordable EV scooter rentals for your daily rides
          </h1>
          <p className="mt-6 text-lg text-white/90">
            Go electric, save money, and help the planet.
          </p>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Book on WhatsApp
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-[420px] h-[340px]">
            <Image src="/Yellow-Duo.webp" alt="Ather Rizta" fill className="object-contain" priority />
          </div>
          <div className="relative w-[420px] h-[340px]">
            <Image src="/vida.png" alt="Vida VX2 Plus" fill className="object-contain" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
