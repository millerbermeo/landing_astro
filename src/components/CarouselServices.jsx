import { useState, useEffect } from 'react';

const CarouselServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  const features = [
    "✅ Creación, actualización y eliminación de usuarios.",
    "✅ Asignación y revocación de permisos.",
    "✅ Gestión de roles y acceso a vistas.",
    "✅ Filtrado y exportación en PDF y CSV.",
    "✅ Personalización del perfil con imagen y datos.",
  ];

  const features2 = [
    "✅ Gestión de productos: creación, modificación y eliminación.",
    "✅ Productos compuestos: cálculo automático de costo de producción.",
    "✅ Control de stock en tiempo real.",
    "✅ Categorías y organización eficiente.",
    "✅ Órdenes, ventas y facturación.",
    "✅ Carrito de compras y facturación.",
    "✅ Búsqueda avanzada de productos.",
  ];

  const features4 = [
    "✅ Creación y gestión de bodegas.",
    "✅ Control de inventario por bodega.",
    "✅ Organización y ubicación de productos.",
    "✅ Registro de movimientos de materiales.",
    "✅ Actualización de bodegas.",
  ];

  const features5 = [
    "1) Módulo de Mesas: Administración y modificación.",
    "2) Métodos de Pago: Creación y gestión personalizados.",
    "3) Empresas de Domicilio: Registro y gestión.",
  ];

  const features6 = [
    "✅ Selección de productos y gestión de cantidades.",
    "✅ Creación de órdenes y ventas inmediatas.",
    "✅ Métodos de pago y facturación.",
    "✅ Búsqueda avanzada de productos.",
    "✅ Control de stock en tiempo real.",
  ];

  const features7 = [
    "✅ Visualización y gestión de órdenes.",
    "✅ Detalles de pagos y facturación.",
    "✅ Búsqueda avanzada de órdenes.",
    "✅ Gestión de estados y pagos.",
  ];

  const servicesCards = [
    {
      image: "https://www3.gobiernodecanarias.org/medusa/ecoescuela/proyectoevagd/files/2017/09/usuarios.png",
      name: "Módulo de Usuarios",
      description: "Administra información de usuarios.",
      items: features,
    },
    {
      image: "https://img.freepik.com/fotos-premium/cesta-compras-digital-e-iconos-descuento_1174497-139114.jpg",
      name: "Módulo de Productos",
      description: "Gestión de productos simples y compuestos.",
      items: features2,
    },
    {
      image: "https://img.freepik.com/vector-premium/vibrante-coleccion-graficos-herramientas-materiales-estudio-que-representan-organizacion-datos-metodos-productividad-busca-informacion-sobre-reglas_538213-151720.jpg",
      name: "Módulo de Materiales",
      description: "Gestión eficiente de materiales.",
      items: features4,
    },
    {
      image: "https://www.shutterstock.com/image-vector/perspective-view-warehouse-cardboard-boxes-600nw-2165606791.jpg",
      name: "Módulo de Almacenamiento",
      description: "Gestión de bodegas.",
      items: features4,
    },
    {
      image: "https://www.questionpro.com/blog/wp-content/uploads/2020/11/Portada-mejora-el-proceso-de-compra-de-los-clientes.jpg",
      name: "Módulo de Servicios",
      description: "Gestión de mesas, pagos y domicilios.",
      items: features5,
    },
    {
      image: "img1.png",
      name: "Módulo de Venta de Productos",
      description: "Gestión de ventas y facturación.",
      items: features6,
    },
    {
      image: "https://www-cms.pipedriveassets.com/cdn-cgi/image/quality=70,format=auto/https://www-cms.pipedriveassets.com/What-is-Sales.png",
      name: "Módulo de Órdenes o Pedidos",
      description: "Gestión de órdenes y pagos.",
      items: features7,
    }
  ];

  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsPerPage(1); // sm
      else if (width < 1024) setCardsPerPage(2); // md
      else setCardsPerPage(3); // lg y más
    };

    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  const nextCards = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % (servicesCards.length - cardsPerPage + 1)
    );
  };

  const prevCards = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? servicesCards.length - cardsPerPage : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextCards();
    }, 3000); // autoplay cada 4s
    return () => clearInterval(interval);
  }, [cardsPerPage]);

  return (
    <div className="relative w-full flex items-center justify-center ">
      <div className="carousel  w-full h-[60vh] flex items-center">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${(servicesCards.length * 100) / cardsPerPage}%`,
            transform: `translateX(-${(currentIndex * 100) / servicesCards.length}%)`,
          }}
        >
          {servicesCards.map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 px-4 shrink-0 flex justify-center items-stretch"
            >
              <div className="bg-[#ffffff] shadow-lg rounded-2xl cursor-pointer overflow-hidden transition-transform duration-500 hover:scale-105 max-w-sm w-full flex flex-col">
                <figure className="h-40 w-full">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-gray-800">{card.name}</h3>
                  <p className="text-sm text-gray-500">{card.description}</p>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {card.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botones */}
      <div className="absolute flex justify-between items-center w-full max-w-7xl px-6 top-1/2 -translate-y-1/2">
        <button
          onClick={prevCards}
          className="btn btn-circle bg-white text-black shadow-md hover:scale-110"
        >
          ❮
        </button>
        <button
          onClick={nextCards}
          className="btn btn-circle bg-white text-black shadow-md hover:scale-110"
        >
          ❯
        </button>
      </div>
    </div>


  );
};

export default CarouselServices;
