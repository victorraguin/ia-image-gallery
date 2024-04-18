"use client";
import { ImageProps } from "app/page";
import Image
 from "next/image";
import { useState } from "react";


function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export function BlurImage({ image }: { image: ImageProps }) {
  const [isLoading, setLoading] = useState(true);
  return (
    <a href={image.href} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-400">
        <Image
          alt={image.name || "Image"}
          src={image.href}
          fill
          className={cn(
            "duration-700 ease-in-out group-hover:opacity-75",
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm">{image.name}</h3>
    </a>
  );
}