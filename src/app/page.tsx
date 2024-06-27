"use client";

import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Shujah Mall</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#virtual-tour" className="text-gray-600 hover:text-gray-800">
                  Virtual Tour
                </a>
              </li>
              <li>
                <a href="#payment-platform" className="text-gray-600 hover:text-gray-800">
                  Payment Platform
                </a>
              </li>
              <li>
                <a href="#shops" className="text-gray-600 hover:text-gray-800">
                  Shops & Restaurants
                </a>
              </li>
              <li>
                <a href="#site-map" className="text-gray-600 hover:text-gray-800">
                  Site Map
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <section id="virtual-tour" className="my-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Virtual Tour</h2>
          <p className="text-gray-600">Explore Shujah Mall from the comfort of your home.</p>
        </section>

        <section id="payment-platform" className="my-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Platform</h2>
          <p className="text-gray-600">Secure and easy payment options for all your shopping needs.</p>
        </section>

        <section id="shops" className="my-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Shops & Restaurants</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>PharmaPlus (pharmacy)</li>
            <li>Samsung phone shop</li>
            <li>HLM cloth shop</li>
            <li>Bloom GlamourBar</li>
            <li>MrSTYLE</li>
          </ul>
        </section>

        <section id="site-map" className="my-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Site Map</h2>
          <p className="text-gray-600">Navigate through Shujah Mall with our comprehensive site map.</p>
        </section>
      </main>

      <footer className="bg-white shadow mt-8">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          &copy; 2023 Shujah Mall. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;