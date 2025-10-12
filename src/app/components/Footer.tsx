export default function Footer() {
  return (
    <footer className="bg-white border-t py-6 text-center text-sm text-slate-600">
      © {new Date().getFullYear()} EvEco Rentals —{" "}
      <a
        href="https://www.evecorental.com"
        className="text-green-600 hover:underline"
        target="_blank"
      >
        evecorental.com
      </a>
    </footer>
  );
}
