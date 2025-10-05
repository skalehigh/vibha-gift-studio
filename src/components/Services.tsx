import { Card } from "@/components/ui/card";
import { Briefcase, Cake, Sparkles, Calendar } from "lucide-react";
import corporateImage from "@/assets/corporate-gifts.jpg";
import birthdayImage from "@/assets/birthday-gifts.jpg";
import eventImage from "@/assets/event-gifts.jpg";
import personalizedImage from "@/assets/personalized-gifts.jpg";

const services = [
  {
    title: "Corporate Gifting",
    description: "Elegant branded gifts perfect for clients, employees, and business partners. Leave a lasting impression with premium quality corporate gifts.",
    icon: Briefcase,
    image: corporateImage,
  },
  {
    title: "Birthday Party Gifts",
    description: "Make birthdays extra special with our colorful and fun gift collections. From kids to adults, we have something for everyone.",
    icon: Cake,
    image: birthdayImage,
  },
  {
    title: "Personalized Gifts",
    description: "Add a personal touch with custom engravings, photos, and names. Create one-of-a-kind gifts that tell your unique story.",
    icon: Sparkles,
    image: personalizedImage,
  },
  {
    title: "Event Gifts",
    description: "Perfect gifting solutions for weddings, anniversaries, and special celebrations. Luxury packaging and elegant presentations.",
    icon: Calendar,
    image: eventImage,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto mb-6 rounded-full" />
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive gifting solutions tailored to every occasion and celebration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group overflow-hidden rounded-2xl border-0 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-4 left-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                  <service.icon className="w-6 h-6" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
