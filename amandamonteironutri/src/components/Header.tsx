import React from 'react';
import { Menu, X } from 'lucide-react'; // Importe os ícones necessários

export default function Header(): React.ReactNode {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <>
      <header className="py-3 bg-white px-3 fixed w-full shadow-lg">
        <nav className="flex justify-between items-center container mx-auto min-h-16">
          <div className="bg-white">
            <a className="text-3xl font-semibold truncate text-gray-800" href="/">
              <h1>Amanda Monteiro</h1>
            </a>
          </div>

          <div
            className={`md:items-center ${showMenu ? 'absolute' : 'hidden'} top-[4rem] left-0 w-full md:w-auto md:static md:block`}
          >
            <ul className="bg-white flex flex-col md:flex-row items-center md:gap-10 justify-around min-h-[80vh] md:min-h-0">
              <li className="transition duration-300 transform hover:-translate-y-1 px-4 py-2 rounded text-gray-800 font-normal text-lg">
                <a href="#about">Sobre</a>
              </li>
              <li className="transition duration-300 transform hover:-translate-y-1 px-4 py-2 rounded text-gray-800 font-normal text-lg">
                <a href="#services">Serviços</a>
              </li>
              <li className="transition duration-300 transform hover:-translate-y-1 px-4 py-2 rounded text-gray-800 font-normal text-lg">
                <a href="#planos">Planos</a>
              </li>
              <li className="transition duration-300 transform hover:-translate-y-1 px-4 py-2 rounded text-gray-800 font-normal text-lg">
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden px-5 py-2 text-gray-950 rounded-xl text-gray-800"
          >
            {showMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>
    </>
  );
}
