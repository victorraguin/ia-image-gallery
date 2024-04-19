// pages/app/page.tsx
import Image from "next/image";
import { getCollectionsList } from "@lib/data";
import { BlurImage } from "./components/BlurImage";

const getImagesCollection = async () => {
  const collections = await getCollectionsList();

  if (!collections) {
    return null;
  }
  return collections.images as unknown as ImageProps[];
};

export interface ImageProps {
  id: number;
  href: string;
  imageSrc: string;
  name: string;
  category: string;
  like: number;
}

export default async function GalleryPage() {
  const images = (await getImagesCollection()) as ImageProps[];

  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {images.map((image) => (
          <BlurImage key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}
