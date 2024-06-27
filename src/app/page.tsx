"use client";

import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

const shops = [
  { name: "PharmaPlus", description: "Pharmacy" },
  { name: "Samsung Phone Shop", description: "Electronics" },
  { name: "HLM Cloth Shop", description: "Clothing" },
  { name: "Bloom GlamourBar", description: "Beauty" },
  { name: "MrSTYLE", description: "Fashion" },
];

export default function Home() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <header className={styles.header}>
        <h1>Shujah Mall</h1>
        <nav>
          <ul className={styles.navList}>
            <li><a href="#virtual-tour">Virtual Tour</a></li>
            <li><a href="#payment-platform">Payment Platform</a></li>
            <li><a href="#shops">Shops & Restaurants</a></li>
            <li><a href="#site-map">Site Map</a></li>
          </ul>
        </nav>
      </header>

      <section id="virtual-tour" className={styles.section}>
        <h2>Virtual Tour</h2>
        <p>Explore Shujah Mall from the comfort of your home.</p>
        <Image src="/images/virtual-tour.jpg" alt="Virtual Tour" width={600} height={400} />
      </section>

      <section id="payment-platform" className={styles.section}>
        <h2>Payment Platform</h2>
        <p>Secure and easy payment options for all your shopping needs.</p>
      </section>

      <section id="shops" className={styles.section}>
        <h2>Shops & Restaurants</h2>
        <ul className={styles.shopList}>
          {shops.map((shop, index) => (
            <li key={index} className={styles.shopItem}>
              <h3>{shop.name}</h3>
              <p>{shop.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="site-map" className={styles.section}>
        <h2>Site Map</h2>
        <p>Find your way around Shujah Mall.</p>
        <Image src="/images/site-map.jpg" alt="Site Map" width={600} height={400} />
      </section>
    </main>
  );
}