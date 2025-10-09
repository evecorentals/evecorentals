import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const ASSET_PREFIX =
    process.env.NODE_ENV === "production" ? "/evecorentals" : "";

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src={`${ASSET_PREFIX}/logo.png`}
          alt="EV ECO Rentals logo"
          width={180}
          height={65}
          priority
          unoptimized
        />
        <h1>Electric Rides, Coming Soon</h1>
        <p>
          Get ready to experience convenient, eco-friendly car rentals in your
          city.
        </p>
        <p>Rent electric cars effortlessly—launching shortly.</p>
        <p>
          <strong>Clean. Convenient. Electric.</strong>
        </p>
      </main>
    </div>
  );
}
