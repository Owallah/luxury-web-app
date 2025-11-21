import { useState, useRef } from "react";
import { Play, X } from "lucide-react";
import { Button } from "./ui/Button";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Replace this with your actual video URL
  const videoUrl = "https://www.youtube.com/embed/ADPYFQWNvZk";

  return (
    <section id="video" ref={sectionRef} className="py-24 relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-[0.6]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&q=80)",
          zIndex: -1,
        }}
      ></div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title text-white mb-6 reveal">
            See Fertikal in Action
          </h2>
          <p className="text-white/80 text-lg mb-10 reveal stagger-delay-1">
            Watch how our premium fertilizers transform farms across Kenya and
            improve crop yields
          </p>

          {!isPlaying ? (
            <div className="flex justify-center reveal stagger-delay-2">
              <Button
                onClick={() => setIsPlaying(true)}
                variant="outline"
                size="lg"
                className="rounded-full bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all group"
              >
                <Play className="mr-2 text-fertile-green-400 group-hover:text-fertile-green-300" />
                <span>Watch Video</span>
              </Button>
            </div>
          ) : (
            <div className="relative reveal">
              <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-xl">
                <iframe
                  src={videoUrl}
                  title="Fertikal Video"
                  className="w-full h-full"
                  width="640"
                  height="360"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <Button
                onClick={() => setIsPlaying(false)}
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 rounded-full bg-black/50 backdrop-blur-sm border-white/20 text-white hover:bg-black/70 transition-all group z-10"
              >
                <X className="text-white" />
                <span className="sr-only">Close Video</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
