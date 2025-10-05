import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "HR Manager, Tech Corp",
    content: "Vibha Innovation helped us find the perfect corporate gifts for our annual event. The quality and personalization exceeded our expectations!",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Event Planner",
    content: "Amazing service and beautiful gift collections! They made our wedding favors truly special. Highly recommended for any occasion.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Small Business Owner",
    content: "The personalized gifts for my daughter's birthday were absolutely stunning. Every guest was impressed with the quality and creativity.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto mb-6 rounded-full" />
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust us with their gifting needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 rounded-2xl border-0 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="font-inter text-foreground/80 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-playfair font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="font-inter text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
