"use client";

export default function ContactSection() {
  const wa = "https://wa.me/919866277630";

  return (
    <section id="contact" className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-gray-700">
              <strong>Phone:</strong>{" "}
              <a href="tel:+919866277630" className="text-green-600 hover:underline">
                +91 98662 77630
              </a>
            </p>
            <p className="mt-3 text-gray-700">
              <strong>Email:</strong>{" "}
              <a href="mailto:evecorentals@gmail.com" className="text-green-600 hover:underline">
                evecorentals@gmail.com
              </a>
            </p>
            <p className="mt-3 text-gray-700">
              <strong>Address:</strong> Tarbund, Secunderabad, Telangana, 500009
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

          {/* <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input className="w-full px-3 py-2 border rounded-md" placeholder="Your name" />
              <input className="w-full px-3 py-2 border rounded-md" placeholder="Email or phone" />
              <textarea className="w-full px-3 py-2 border rounded-md h-28" placeholder="Message" />
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
                Send
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
}
