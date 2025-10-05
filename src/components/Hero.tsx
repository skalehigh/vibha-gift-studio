import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";
import heroImage from "@/assets/hero-gifts.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
          <Gift className="w-8 h-8 text-primary" />
        </div>
        
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
          Vibha Innovation
        </h1>
        
        <p className="font-inter text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Personalized Gifts for Every Occasion
        </p>
        
        <p className="font-inter text-base md:text-lg text-foreground/80 mb-10 max-w-xl mx-auto">
          Creating memorable moments with thoughtfully curated gifts that bring joy to every celebration
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="font-inter text-lg px-8 py-6 rounded-full shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-300"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Gifts
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="font-inter text-lg px-8 py-6 rounded-full border-2 hover:bg-primary/10 transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1.5 h-2 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
