import CultureCarousel from "../components/culture-carousel"
import CultureContent from "../components/culture-content"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ColombiaLandingPage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/1GsbMvJP/u9798762876-closeup-of-a-tiny-pile-of-blue-extremely-fine-pow-a4817f4e.png')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/5" />
      <div className="relative">
        <div className="absolute top-4 left-4 sm:left-6 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-primary drop-shadow-md animate-wiggle font-sketch">
            CCC
          </h1>
        </div>
        <CultureCarousel />
      </div>
      <CultureContent />

      {/* Social Media Button */}
      <div className="fixed top-4 right-4 z-50">
        <a href="https://x.com/Cocainecabal" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="rounded-full w-10 h-10 sm:w-12 sm:h-12 p-0 overflow-hidden hover:scale-110 transition-transform"
            aria-label="Follow us on X (formerly Twitter)"
          >
            <Image
              src="https://images.freeimages.com/image/large-previews/f35/x-twitter-logo-on-black-circle-5694247.png?fmt=webp&h=350"
              alt="X (Twitter) Logo"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </Button>
        </a>
      </div>
    </main>
  )
}

