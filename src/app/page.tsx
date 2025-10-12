"use client";

import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Page() {
  const wa = "https://wa.me/919866277630?text=Hi%20EvEco%20Rentals%20👋,%20I%E2%80%99d%20like%20to%20book%20an%20electric%20scooter.";

  return (
    <>
      <Header />
      {/* HERO */}
        <section
          id="home"
          className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white mt-20"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-24">
            {/* Left Text Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Affordable EV scooter rentals for your daily rides
              </h1>
              <p className="mt-6 text-lg text-white/90">
                Go electric, save money, and help the planet with our latest models —
                Vida VX2 Plus and Ather Rizta.
              </p>
              <a
                href="https://wa.me/919866277630?text=Hi%20EvEco%20Rentals%20👋,%20I%E2%80%99d%20like%20to%20book%20an%20electric%20scooter."
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
              >
                Book on WhatsApp
              </a>
            </div>

            {/* Right Image Content */}
            <div className="flex justify-center md:justify-end relative">
              <div className="relative flex items-center justify-center w-full md:w-[450px] h-[260px] sm:h-[320px]">
                {/* Ather */}
                <div className="relative w-[180px] h-[140px] sm:w-[220px] sm:h-[180px] md:w-[240px] md:h-[200px] ml-[-40px] sm:ml-[-60px]">
                  <Image
                    src="/Yellow-Duo.webp"
                    alt="Ather Rizta"
                    fill
                    className="object-contain transform hover:scale-105 transition duration-300"
                  />
                </div>
                {/* Vida */}
                <div className="relative w-[180px] h-[140px] sm:w-[220px] sm:h-[180px] md:w-[240px] md:h-[200px]">
                  <Image
                    src="/vida.png"
                    alt="Vida VX2 Plus"
                    fill
                    className="object-contain transform hover:scale-105 transition duration-300"
                    priority
                  />
                </div>
                
              </div>
            </div>
          </div>
        </section>

      {/* RENTALS */}
      <section id="rentals" className="bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-6">Our Rentals</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Vida VX2 Plus",
                img: "/vida.png",
                desc: "Comfortable city scooter with great range and smooth ride.",
                msg: "Hi EvEco Rentals 👋, I'm interested in booking the Vida VX2 Plus.",
              },
              {
                name: "Ather Rizta",
                img: "/ather.png",
                desc: "High-performance EV built for speed, safety, and comfort.",
                msg: "Hi EvEco Rentals 👋, I'm interested in booking the Ather Rizta.",
              },
            ].map((scooter) => {
              const waMessage = `${wa}?text=${encodeURIComponent(scooter.msg)}`;
              return (
                <div
                  key={scooter.name}
                  className="p-6 border border-gray-100 shadow-sm rounded-xl hover:shadow-md transition"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="relative w-36 h-24">
                      <Image
                        src={scooter.img}
                        alt={scooter.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="text-xl font-semibold">{scooter.name}</h4>
                      <p className="text-gray-600 text-sm mt-1">{scooter.desc}</p>
                      <div className="mt-3 text-green-600 font-bold">
                        Weekly: ₹2200*
                      </div>
                      <a
                        href={waMessage}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-block bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-700 transition"
                      >
                        Book on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ABOUT */}
      <section id="about" className="bg-gray-50 text-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-6">About EvEco Rentals</h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            EvEco Rentals provides affordable, reliable electric scooter
            rentals in Secunderabad. We make clean and sustainable mobility
            accessible to everyone — with flexible plans, well-maintained
            scooters, and simple WhatsApp booking.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-gray-700">
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+919866277630"
                  className="text-green-600 hover:underline"
                >
                  +91 98662 77630
                </a>
              </p>
              <p className="mt-3 text-gray-700">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:evecorentals@gmail.com"
                  className="text-green-600 hover:underline"
                >
                  evecorentals@gmail.com
                </a>
              </p>
              <p className="mt-3 text-gray-700">
                <strong>Address:</strong> Tarbund, Secunderabad, Telangana,
                500009
              </p>
              <p className="mt-3 text-gray-700">
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.evecorental.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-600 hover:underline"
                >
                  www.evecorental.com
                </a>
              </p>
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
