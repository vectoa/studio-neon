/**
 * /site1/src/components/Carousel/Carousel.jsx
 * Carousel.jsx
 * Composant qui affiche une liste de produits "Néon" sous forme de carrousel Swiper.
 */

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import du SCSS spécifique
import './Carousel.scss';

// Service local qui retourne la liste de produits
import { getShopProducts } from '../../services/dataService';

const Carousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = getShopProducts();
    if (!data || data.length === 0) {
      console.warn('Aucun produit trouvé dans dataService. Vérifiez votre JSON ou API.');
    }
    setProducts(data || []);
  }, []);

  return (
    <section className="carousel-section">
      <h2 className="carousel-title">Nos Néons Prêts à l&apos;Emploi</h2>
      <Swiper
        // Active la navigation (flèches)
        navigation
        // Charge le module Navigation
        modules={[Navigation]}
        // Espace entre les slides
        spaceBetween={20}
        // Nombre de slides visibles par défaut
        slidesPerView={3}
        // Breakpoints pour le responsive
        breakpoints={{
          1200: { slidesPerView: 3 },
          992:  { slidesPerView: 2 },
          768:  { slidesPerView: 2 },
          480:  { slidesPerView: 1 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="carousel-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price} €</p>
            <Link to={`/product/${product.id}`} className="buy-btn">
              Acheter
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
