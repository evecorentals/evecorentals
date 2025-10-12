"use client";

import Image from "next/image";

export default function RentalsSection() {
  const wa = "https://wa.me/919866277630";

  const scooters = [
    {
      name: "Vida VX2 Plus",
      img: "/vida.png",
      desc: "Comfortable city scooter with great range and smooth ride.",
    },
    {
      name: "Ather Rizta",
      img: "/ather.png",
      desc: "High-performance EV built for speed, safety, and comfort.",
    },
  ];

  return (
    <section id="rentals" className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Our Rentals</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {scooters.map((s) => (
            <div key={s.name} className="p-6 border border-gray-100 shadow-sm rounded-xl hover:shadow-md transition">
              <div className="flex items-center gap-6">
                <div className="relative w-36 h-24">
                  <Image src={s.img} alt={s.name} fill className="object-contain" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">{s.name}</h4>
                  <p className="text-gray-600 text-sm mt-1">{s.desc}</p>
                  <div className="mt-3 text-green-600 font-bold">Weekly: ₹2200*</div>
                  <a
                    href={wa}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    Book
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
