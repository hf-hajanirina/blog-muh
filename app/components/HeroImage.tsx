'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HeroImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLatestImage() {
      try {
        const response = await fetch('/api/gallery');
        const data = await response.json();
        if (data.images && data.images.length > 0) {
          // Get the last image (most recent)
          setImageUrl(data.images[data.images.length - 1].url);
        }
      } catch (error) {
        console.error('Error loading hero image:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestImage();
  }, []);

  if (loading || !imageUrl) {
    return (
      <div className="aspect-square bg-gradient-to-br from-red-400 to-red-500 rounded-2xl shadow-2xl overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold">
          HHM
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-square bg-gradient-to-br from-red-400 to-red-500 rounded-2xl shadow-2xl overflow-hidden">
      <Image
        src={imageUrl}
        alt="HAJANIRINA Harisoa Muriel"
        width={600}
        height={600}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
}
