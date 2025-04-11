
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  //   const [bgcolor, setBgColor] = useState()

  //   useEffect(() => {
  //     const handleScrooll = () => {
  //         if (window.scrollY > 50) {
  //             setBgColor(false)
  //         } else {
  //             setBgColor(true)
  //         }

  //     }
  //     window.addEventListener('scroll', handleScrooll)
  //     return () => window.removeEventListener('scroll', handleScrooll)

  // }, [])


  return (
    <>


      <nav className={`absolute lg:bg-transparent text-white top-0 left-0 z-50 w-full mx-auto right-0`}>
        <div class="w-full bg-[#ffffff]  text-sm text-gray-700">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8">

            <div class="flex items-center gap-4">
              <div class="flex items-center gap-1">
                <svg class="w-4 h-4 text-[#0C69A3]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 8V7l-3 2-2-2-2 2-2-2-2 2-2-2-2 2L3 7v1l9 5 9-5z" /><path d="M3 9v9h18V9l-9 5-9-5z" />
                </svg>
                <a href="mailto:info@smartih.com" class="hover:underline">info@smartih.com</a>
              </div>
              <div class="hidden sm:flex items-center gap-1">
                <svg class="w-4 h-4 text-[#0C69A3]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 004.22 1.11 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 001.11 4.22 1 1 0 01-.21 1.11l-2.2 2.2z" />
                </svg>
                <a href="tel:+573001112233" class="hover:underline">+57 300 111 2233</a>
              </div>
            </div>


            <div class="hidden md:flex gap-3">
              <a href="#" class="hover:text-[#0C69A3]">ES</a>
              <span>|</span>
              <a href="#" class="hover:text-[#0C69A3]">EN</a>
            </div>
          </div>
        </div>
        <div className="w-[91%] 2xl:w-[80%] mx-auto px-4 sm:px-6 lg:px-8 border-b-2 border-white/50">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <a href="/" className="text-4xl font-bold">Smart IH</a>

            {/* Menú desktop */}
            <div className="hidden md:flex space-x-6 text-xl  font-light">
              <a href="#features" className=" hover:text-amber-500">Modulos</a>
              <a href="#features" className=" hover:text-amber-500">Planes</a>
              <a href="#features" className=" hover:text-amber-500">Características</a>
              <a href="#testimonials" className=" hover:text-amber-500">Testimonios</a>
              <a href="#contacto" className=" hover:text-amber-500">Contacto</a>
            </div>

            {/* Botón de acción */}
            <a href="#contacto" className="hidden md:block btn btn-soft btn-primary  bg-sky-600 text-white border-none text-sky-900 rounded-full text-2xl">
              ¡Empieza ahora!
            </a>

            {/* Botón del menú móvil */}
            <button className="md:hidden text-gray-700 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white shadow-md`}>
          <a href="#features" className="block py-2 px-4 text-gray-700 hover:bg-blue-100">Características</a>
          <a href="#testimonials" className="block py-2 px-4 text-gray-700 hover:bg-blue-100">Testimonios</a>
          <a href="#contacto" className="block py-2 px-4 text-gray-700 hover:bg-blue-100">Contacto</a>
          <a href="#contacto" className="block btn btn-soft btn-primary rounded-full">
            ¡Empieza ahora!
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
