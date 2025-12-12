'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  url: string;
  pathname: string;
  uploadedAt: string;
}

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGalleryImages() {
      try {
        const response = await fetch('/api/gallery');
        const data = await response.json();
        setImages(data.images || []);
      } catch (error) {
        console.error('Error loading gallery images:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchGalleryImages();
  }, []);

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-gradient-to-br from-red-400 to-red-500 rounded-xl overflow-hidden shadow-lg animate-pulse"
          >
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-4xl mb-2">📸</div>
                <div className="text-sm">Chargement...</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="grid md:grid-cols-3 gap-6">
        <div className="aspect-square bg-gradient-to-br from-red-400 to-red-500 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
          <div className="w-full h-full flex items-center justify-center text-white">
            <div className="text-center">
              <div className="text-4xl mb-2">🏀</div>
              <div className="text-sm">En Action</div>
            </div>
          </div>
        </div>
        <div className="aspect-square bg-gradient-to-br from-red-400 to-red-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
          <div className="w-full h-full flex items-center justify-center text-white">
            <div className="text-center">
              <div className="text-4xl mb-2">🏆</div>
              <div className="text-sm">Compétitions</div>
            </div>
          </div>
        </div>
        <div className="aspect-square bg-gradient-to-br from-red-500 to-red-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
          <div className="w-full h-full flex items-center justify-center text-white">
            <div className="text-center">
              <div className="text-4xl mb-2">⭐</div>
              <div className="text-sm">Entraînement</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {images.map((image, index) => (
        <div
          key={image.pathname}
          className="aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 duration-300"
        >
          <Image
            src={image.url}
            alt={`Photo de galerie ${index + 1}`}
            width={500}
            height={500}
            className="w-full h-full object-cover"
            priority={index < 4}
          />
        </div>
      ))}
    </div>
  );
}
