
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
      <nav className={`absolute text-white bg-transparent  top-0 left-0 z-50 w-full mx-auto right-0`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <a href="/" className="text-4xl font-bold">Smart IH</a>

            {/* Menú desktop */}
            <div className="hidden md:flex space-x-6 text-xl opacity-80 font-light">
              <a href="#features" className=" hover:text-blue-600">Características</a>
              <a href="#testimonials" className=" hover:text-blue-600">Testimonios</a>
              <a href="#contacto" className=" hover:text-blue-600">Contacto</a>
            </div>

            {/* Botón de acción */}
            <a href="#contacto" className="hidden md:block btn btn-soft btn-primary rounded-full text-2xl">
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
    );
  };

  export default Navbar;
