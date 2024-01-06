import React from 'react';

export default function Header(): React.ReactNode {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <>
      <header>
        <nav className="flex justify-between items-center max-w-[1280px] mx-auto py-3 bg-green-500 min-h-24">
          <div className="bg-blue-500 ">
            <a className="text-3xl" href="/">
              <h1>Amanda Monteiro</h1>
            </a>
          </div>

          <div className={`md:items-center ${showMenu ? 'absolute' : 'hidden'} top-20 w-full md:w-auto md:static md:block`}>
            <ul
              className="bg-red-500 flex flex-col md:flex-row items-center md:gap-10 justify-around min-h-[80vh] md:min-h-0">
              <li className="md:hover:bg-gray-600 px-4 py-2 rounded">
                <a href="#about">Sobre</a>
              </li>
              <li className="md:hover:bg-gray-600 px-4 py-2 rounded">
                <a href="#services">Serviços</a>
              </li>
              <li className="md:hover:bg-gray-600 px-4 py-2 rounded">
                <a href="#planos">Planos</a>
              </li>
              <li className="md:hover:bg-gray-600 px-4 py-2 rounded">
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-900"
          >
            MENU
          </button>
        </nav>
      </header>
    </>
  );
}
