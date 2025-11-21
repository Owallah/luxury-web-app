import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   // Here you would typically handle form submission, e.g., with an API call
  //   // For demo purposes, we'll just show an alert
  //   alert("Thank you for your message! We will get back to you soon.");

  //   if (formRef.current) {
  //     formRef.current.reset();
  //   }
  // };

  const [formData, setFormData] = useState<FormData> ({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:info@monarkyconcepts.co.ke?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
    )}`;

    // Open the default email client
    window.location.href = mailtoLink;
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-[var(--soil-brown-50)]"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title text-[var(--fertile-green-800)] reveal">
            Contact Us
          </h2>
          <p className="section-subtitle reveal">
            Get in touch with our team of experts to learn more about our
            products and services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="rounded-xl overflow-hidden shadow-lg bg-white p-8 reveal">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Send Us a Message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fertile-green-500 focus:border-fertile-green-500 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fertile-green-500 focus:border-fertile-green-500 outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fertile-green-500 focus:border-fertile-green-500 outline-none transition"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fertile-green-500 focus:border-fertile-green-500 outline-none transition resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>


          <div className="reveal">
            <div className="rounded-xl overflow-hidden shadow-lg bg-white h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.84928584639!2d36.81416606220637!3d-1.2895698683977952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6c8577f266c5%3A0xf985507b66e0a3ec!2sUtawala!5e0!3m2!1sen!2sus!4v1742648744151!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Monarky Concepts Ltd Offices"
                className="w-full"
              ></iframe>

              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 rounded-full bg-fertile-green-100 text-fertile-green-600 mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Address</h4>
                      <p className="text-gray-600">
                        Goshen House, Off Eastern Bypass, Utawala, Nairobi,
                        Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 rounded-full bg-fertile-green-100 text-fertile-green-600 mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <p className="text-gray-600">
                        info@monarkyconcepts.co.ke
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 rounded-full bg-fertile-green-100 text-fertile-green-600 mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Phone</h4>
                      <p className="text-gray-600">+254 721 239 620</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Business Hours
                  </h4>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 5:00 PM
                  </p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
