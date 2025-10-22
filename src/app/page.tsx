"use client";

import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function Page() {
  const wa = "https://wa.me/919866277630?text=Hi%20EvEco%20Rentals%20👋,%20I%E2%80%99d%20like%20to%20book%20an%20electric%20scooter.";

  return (
    <>
      <Header />
      {/* LAUNCHING SOON SECTION */}
      <section className="relative z-40 mt-[68px] w-full bg-gradient-to-r from-black via-gray-900 to-gray-800 text-yellow-400 text-center py-3 shadow-lg">
        <p className="text-base md:text-lg font-semibold tracking-wide px-3">
          <span className="text-2xl md:text-3xl animate-bounce">🛵</span> <span className="font-bold">EvEco Rentals</span> - <span className="text-white" >Launching Soon in Hyderabad! </span>⚡
        </p>
        <p className="text-sm md:text-base text-gray-300 mt-1">
          Smooth • Affordable • Eco Rides
        </p>
      <p className="text-xs md:text-sm text-green-400 font-medium uppercase tracking-wide">
            🎉 Get exclusive launch offers for our first few customers! ⚡
          </p>
      </section>

      {/* HERO  ADD mt-20 class after launch of application*/}
        <section
          id="home"
          className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white "
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-24">
            {/* Left Text Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Affordable EV scooter rentals for your daily rides
              </h1>
              <p className="mt-6 text-lg text-white/90">
                Go electric, save money, and help the planet with our latest models —
                Ather Rizta and Vida VX2 Plus.
              </p>
              <a
                href="https://wa.me/919866277630?text=Hi%20EvEco%20Rentals%20👋,%20I%E2%80%99d%20like%20to%20book%20an%20electric%20scooter."
                // href="https://wa.me/919866277630?text=Hi%20EvEco%20Rentals%20👋,%20please%20notify%20me%20when%20you%20launch!"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
              >
                Book on WhatsApp
                {/* Notify Me On WhatsApp */}
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
                name: "Ather Rizta S",
                img: "/ather.png",
                desc: "High-performance EV built for speed, safety, and comfort.",
                msg: "Hi EvEco Rentals 👋, I'm interested in booking the Ather Rizta.",
                price: 2000,
                batteryCapacity: "2.9 kWh",
                range: "Upto 100 KM",
              },
              {
                name: "Ather Rizta SHR",
                img: "/ather.png",
                desc: "High-performance EV built for speed, safety, and comfort.",
                msg: "Hi EvEco Rentals 👋, I'm interested in booking the Ather Rizta SHR.",
                price: 2200,
                batteryCapacity: "3.7 kWh",
                range: "Upto 125 KM",
              },
              {
                name: "Vida VX2 Plus",
                img: "/vida.png",
                desc: "Comfortable city scooter with great range and smooth ride.",
                msg: "Hi EvEco Rentals 👋, I'm interested in booking the Vida VX2 Plus.",
                price: 2500,
                batteryCapacity: "3.4 kWh",
                range: "Upto 100 KM",
              },
              
            ].map((scooter) => {
              const waMessage = `https://wa.me/919866277630?text=${encodeURIComponent(scooter.msg)}`;
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
                      <p className="mt-1 text-gray-600 font-bold text-sm">
                        Battery Capacity: {scooter.batteryCapacity}
                      </p>
                      <p className="mt-1 text-gray-600 font-bold text-sm">
                        True Range: {scooter.range}
                      </p>
                      <div className="mt-3 text-green-600 font-bold">
                        Weekly: ₹{scooter.price}*
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
            rentals in Hyderabad. We make clean and sustainable mobility
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
            {/* Contact Info */}
            <div className="flex flex-col">
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
                <strong>Address:</strong> Tarbund, Secunderabad, Hyderabad, Telangana, 500009
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
                href="https://wa.me/919866277630?text=Hi%20EvEco%20Rentals%20👋,%20I%E2%80%99d%20like%20to%20book%20an%20electric%20scooter."
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition w-fit"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md border border-gray-100">
              <iframe
                title="EvEco Rentals Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0554107192443!2d78.4857986734115!3d17.457061800797682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b6ae9ba33cb%3A0x34ec030c0d4feafe!2sEvEco%20Rentals!5e0!3m2!1sen!2sin!4v1760776782760!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
