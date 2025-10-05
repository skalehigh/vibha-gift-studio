import { Heart, Award, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 slide-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About Vibha Innovation
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto mb-6 rounded-full" />
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Crafting moments of joy through thoughtful gifting solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card rounded-2xl p-8 text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-3">Personalized Touch</h3>
            <p className="font-inter text-muted-foreground">
              Every gift is customized with care to make your moments truly special and memorable
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-3">Premium Quality</h3>
            <p className="font-inter text-muted-foreground">
              We source and create only the finest gifts that reflect excellence and sophistication
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/30 mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-3">Customer First</h3>
            <p className="font-inter text-muted-foreground">
              Your satisfaction is our priority, with dedicated support throughout your gifting journey
            </p>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-[var(--shadow-soft)]">
          <p className="font-inter text-lg leading-relaxed text-center text-foreground/90">
            At <span className="font-semibold text-primary">Vibha Innovation</span>, we believe that every occasion deserves a perfect gift. 
            Whether it's a corporate event, birthday celebration, or a special milestone, we transform your gifting 
            ideas into reality with our extensive collection of personalized and curated gifts. With years of experience 
            in the gifting industry, we've helped thousands of customers express their emotions through meaningful presents.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
