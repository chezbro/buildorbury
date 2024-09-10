import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gradient text-white py-6 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-3xl font-bold transition-transform hover:scale-105">
          BuildOrBury
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-gray-300 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;