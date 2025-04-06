"use client";

import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="border-none shadow-md">
      <CardContent className="p-6">
        <div className="mb-4 flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="mb-6 italic text-gray-700">"{testimonial.quote}"</p>
        <div className="flex items-center gap-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/images/placeholder-avatar.png";
            }}
          />
          <div>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-600">{testimonial.title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
