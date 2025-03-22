// src/pages/HomePage.jsx
import React from 'react';
import CollapsibleRows from '../../components/Collapsible/CollapsibleRows';
import Carousel from '../../components/Carousel/Carousel';
import BannerHero from "../../components/BannerHero/BannerHero"; // ✅ Importation de la bannière
import ThreeRows from '../../components/ThreeRows/ThreeRows';
import Newsletter from '../../components/Forms/Newsletter'; 
import ImageWithText from '../../components/ImageWithText/ImageWithText'



function HomePage() {
  return (
    <div>

      {/* ✅ Bannière Hero */}
      <BannerHero />
      {/* ✅ Ajout du Carrousel ICI */}
      <Carousel />
      {/* Multi-row ex. */}
      <ThreeRows />

      <ImageWithText />

      {/* Collapsible content */}
      <CollapsibleRows />

      <Newsletter />
    </div>
  );
}

export default HomePage;
