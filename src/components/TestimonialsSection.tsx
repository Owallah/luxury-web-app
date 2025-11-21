import { Star, Quote } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "../components/ui/Carousel";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/Avatar";
import { Card, CardContent } from "../components/ui/Card";
import { testimonials } from '../assets/data/testimonialsData';


const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-[var(--fertile-green-50)] py-20">
      <div className="container">
        <h2 className="section-title reveal">What Our Customers Say</h2>
        <p className="section-subtitle reveal">
          Hear from farmers and agricultural experts who have experienced remarkable results with our products
        </p>
        
        <div className="mt-12 reveal">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 px-2 py-4">
                  <Card className="h-full border-[var(--fertile-green-200)] shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={18} 
                            className={i < testimonial.rating ? "fill-[var(--soil-brown-400)] text-[var(--soil-brown-400)]" : "text-[var(--muted)]"} 
                          />
                        ))}
                      </div>
                      
                      <div className="relative mb-6 flex-grow">
                        <Quote size={40} className="absolute -top-2 -left-2 text-[var(--fertile-green-200)] opacity-50" />
                        <p className="relative z-10 text-[var(--soil-brown-800)] italic">"{testimonial.comment}"</p>
                      </div>
                      
                      <div className="flex items-center mt-auto pt-4 border-t border-[var(--fertile-green-100)]">
                        <Avatar className="h-12 w-12 border-2 border-[var(--fertile-green-200)]">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback className="bg-[var(--fertile-green-100)] text-fertile-green-700">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="ml-4">
                          <p className="font-medium text-[var(--soil-brown-900)]">{testimonial.name}</p>
                          <p className="text-sm text-[var(--muted-foreground)]">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-1" />
              <CarouselNext className="right-1" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;