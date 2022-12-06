import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="p-4 bg-white md:hidden">
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500">
        <li>
          <Link href="#" className="mr-4 hover:underline md:mr-6 ">
            Sobre el proyecto
          </Link>
        </li>
        <li>
          <Link href="#" className="mr-4 hover:underline md:mr-6">
            Contacto
          </Link>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
