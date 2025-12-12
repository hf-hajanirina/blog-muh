'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  url: string;
  pathname: string;
  uploadedAt: string;
}

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowRight' && selectedImage < images.length - 1) {
        setSelectedImage(selectedImage + 1);
      }
      if (e.key === 'ArrowLeft' && selectedImage > 0) {
        setSelectedImage(selectedImage - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, images.length]);

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

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={image.pathname}
            onClick={() => setSelectedImage(index)}
            className="aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 duration-300 cursor-pointer"
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

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors z-10"
            aria-label="Fermer"
          >
            <X size={32} />
          </button>

          {/* Previous button */}
          {selectedImage > 0 && (
            <button
              onClick={prevImage}
              className="absolute left-4 text-white hover:text-red-500 transition-colors z-10"
              aria-label="Image précédente"
            >
              <ChevronLeft size={48} />
            </button>
          )}

          {/* Next button */}
          {selectedImage < images.length - 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-red-500 transition-colors z-10"
              aria-label="Image suivante"
            >
              <ChevronRight size={48} />
            </button>
          )}

          {/* Image */}
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            <Image
              src={images[selectedImage].url}
              alt={`Photo de galerie ${selectedImage + 1}`}
              width={1920}
              height={1920}
              className="max-w-full max-h-full object-contain"
              priority
            />
          </div>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
