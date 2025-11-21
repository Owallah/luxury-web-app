
import { ChevronRight } from 'lucide-react';
import { FormEvent, useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [ email, setEmail ] = useState("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const mailtoLink = `mailto:info@monarkyconcepts.co.ke?subject=${encodeURIComponent(
      "SUBSCRIBE TO NEWSLETTER"
    )}&body=${encodeURIComponent(
      `Email: ${email}\n\nMessage: Subscribe me to the news letter`
    )}`;

    // Open the default email client
    window.location.href = mailtoLink;
  }
  
  return (
    <footer className="bg-[var(--fertile-green-900)] text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Monarky Concepts Ltd</h3>
            <p className="text-[var(--fertile-green-200)] mb-6">
              Premium agricultural solutions for Farmers, enhancing soil health and maximizing crop yields.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--fertile-green-800)] hover:bg-[var(--fertile-green-700)] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className='w-6' />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--fertile-green-800)] hover:bg-[var(--fertile-green-700)] transition-colors"
                aria-label="Twitter"
              >
                <XIcon className='w-6' />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--fertile-green-800)] hover:bg-[var(--fertile-green-700)] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className='w-6' />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Why Choose Us', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[var(--fertile-green-200)] hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-3">
              {['Fertikal NPK 4-3-3', 'Benesol 4-3-3', 'Fertiken'].map((item) => (
                <li key={item}>
                  <a 
                    href="#products"
                    className="text-[var(--fertile-green-200)] hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight size={16} className="mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-[var(--fertile-green-200)] mb-4">
              Subscribe to our newsletter for the latest updates and farming tips.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-2 bg-[var(--fertile-green-50)] rounded-l-md border-0 focus:ring-0 text-gray-900"
              />
              <button
                type="submit"
                className="bg-[var(--fertile-green-600)] hover:bg-[var(--fertile-green-700)] px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[var(--fertile-green-800)] text-center text-[var(--fertile-green-300)] text-sm">
          <p>&copy; {currentYear} Monarky Concepts Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;