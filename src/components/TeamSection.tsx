import { useEffect, useRef } from 'react';
import { Mail, Phone } from 'lucide-react';
import { teamMembers } from "../assets/data/teamData";


const TeamSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <section id="team" ref={sectionRef} className="py-24 bg-[var(--fertile-green-50)]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title text-[var(--fertile-green-800)] reveal">Meet Our Team</h2>
          <p className="section-subtitle reveal">
            Our diverse team of experts is dedicated to advancing sustainable agriculture in Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => addToRefs(el)}
              className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl reveal"
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <div className="aspect-[1/1] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-900">{member.name}</h3>
                <p className="text-[var(--fertile-green-600)] font-medium mb-3">{member.role}</p>
                {/* <p className="text-gray-600 text-sm mb-4">{member.bio}</p> */}
                
                <div className="flex flex-col space-x-3">
                  <a 
                    href={member.email}
                    className=" flex items-center gap-1 text-sm text-gray-500 hover:text-[var(--fertile-green-600)] transition-colors"
                    aria-label={`${member.name}'s Mail`}
                  >
                    <Mail className='w-4' size={18} />
                    {member.email}
                  </a>

                  <a 
                    href={member.phone}
                    className=" flex items-center gap-1 text-sm text-gray-500 hover:text-[var(--fertile-green-600)] transition-colors"
                    aria-label={`${member.name}'s Phone`}
                  >
                    <Phone className='w-4' size={18} />
                    {member.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;