import corporateImage from "@/assets/corporate-gifts.jpg";
import birthdayImage from "@/assets/birthday-gifts.jpg";
import eventImage from "@/assets/event-gifts.jpg";
import personalizedImage from "@/assets/personalized-gifts.jpg";

const galleryItems = [
  {
    title: "Corporate Excellence",
    image: corporateImage,
    category: "Corporate",
  },
  {
    title: "Birthday Joy",
    image: birthdayImage,
    category: "Birthday",
  },
  {
    title: "Event Elegance",
    image: eventImage,
    category: "Events",
  },
  {
    title: "Personal Touch",
    image: personalizedImage,
    category: "Personalized",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 slide-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Gifts
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto mb-6 rounded-full" />
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our stunning collection of carefully curated gifts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-3"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full mb-2 w-fit font-inter">
                  {item.category}
                </span>
                <h3 className="font-playfair text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
