import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { blobs } = await list({
      prefix: 'gallery/',
    });

    // Sort by uploadedAt date (newest first) and limit to 10
    const galleryImages = blobs
      .sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime())
      .slice(0, 10)
      .map(blob => ({
        url: blob.url,
        pathname: blob.pathname,
        uploadedAt: blob.uploadedAt,
      }));

    return NextResponse.json({ images: galleryImages });
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return NextResponse.json({ images: [] }, { status: 500 });
  }
}
