import ContactIcons from '@/components/ContactIcons'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="pt-4 pb-8 mt-8 border-t border-gray-300 bg-gray-900 text-gray-400">
      <div className="mx-auto flex w-11/12 items-center">
        {/* Personal Branding */}
        <div className="flex-1">
          <p>Joey Zhu</p>
          {/* <p>Your tagline or a short bio goes here.</p> */}
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-1 flex-wrap md:flex-nowrap gap-4 justify-center">
          <Link href="/">About Me</Link>
          <Link href="/resumes/Joey_Zhu_Resume_Bilingual.pdf" target='_blank'>Resume</Link>
          {/* <Link href="/dev_blog">Developer Blog</Link>
          <Link href="/travel">Travel Gallery</Link> */}
          {/* <a href="">Raspberry-Pi Cluster</a> */}
          <Link href="/#contact">Contact</Link>
        </nav>

        {/* Social Media */}
        <div className="flex-1 flex justify-end">
          <ContactIcons />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-4 border-t border-gray-300 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Yifan (Joey) Zhu. All rights reserved. All photos by me. </p>
        <a href="#top" className="ml-4 cursor-pointer">Back to Top</a>
      </div>
    </footer>
  );
};

export default Footer;
