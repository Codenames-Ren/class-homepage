import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "./ui/card";
import { carouselData } from "@/lib/data";

export default function ClassCarousel() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Carousel className="relative w-full">
        <CarouselContent>
          {carouselData.map((slide, index) => (
            <CarouselItem key={index}>
              <Card className="h-96 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                <CardContent
                  className={`h-full flex items-center justify-center text-white relative p-6 ${slide.bgColor}`}
                >
                  <div className="z-10 text-center">
                    <h3 className="text-4xl font-black mb-2">{slide.title}</h3>
                  </div>
                  <div className="absolute inset-0 bg-black opacity-20" />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
