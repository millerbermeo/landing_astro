import { useState } from 'react';

const CarouselServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3; // Mostrar 3 tarjetas a la vez

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
      image: "https://www.comparapps.com/wp-content/uploads/2022/02/sistemas-de-inventarios.png",
      name: "Módulo de Productos",
      description: "Gestión de productos simples y compuestos.",
      items: features2,
    },
    {
      image: "https://www.comparapps.com/wp-content/uploads/2022/02/sistemas-de-inventarios.png",
      name: "Módulo de Materiales",
      description: "Gestión eficiente de materiales.",
      items: features4,
    },
    {
      image: "https://www.comparapps.com/wp-content/uploads/2022/02/sistemas-de-inventarios.png",
      name: "Módulo de Almacenamiento",
      description: "Gestión de bodegas.",
      items: features4,
    },
    {
      image: "https://www.comparapps.com/wp-content/uploads/2022/02/sistemas-de-inventarios.png",
      name: "Módulo de Servicios",
      description: "Gestión de mesas, pagos y domicilios.",
      items: features5,
    },
    {
      image: "https://www.comparapps.com/wp-content/uploads/2022/02/sistemas-de-inventarios.png",
      name: "Módulo de Venta de Productos",
      description: "Gestión de ventas y facturación.",
      items: features6,
    },
    {
      image: "https://www.comparapps.com/wp-content/uploads/2022/02/sistemas-de-inventarios.png",
      name: "Módulo de Órdenes o Pedidos",
      description: "Gestión de órdenes y pagos.",
      items: features7,
    }
  ];


  // Función para cambiar al siguiente conjunto de tarjetas
  const nextCards = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (servicesCards.length - cardsPerPage + 1));
  };

  const prevCards = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? servicesCards.length - cardsPerPage : prevIndex - 1));
  };

  return (
    <div className="relative h-screen flex w-full justify-center items-center">
      <div className="flex overflow-x-hidden gap-10 transition-transform duration-500">
        {servicesCards.slice(currentIndex, currentIndex + cardsPerPage).map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-2xl overflow-hidden transform transition-transform duration-500 flex flex-col w-96 h-full"
          >
            <div className="relative w-full h-full">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-full object-cover transition-opacity duration-700 opacity-100"
                style={{ transition: 'opacity 0.7s ease-in-out' }}
              />
            </div>
            <div className="p-5 flex flex-col gap-3 flex-grow">
              <h2 className="text-2xl font-semibold text-gray-800">{card.name}</h2>
              <p className="text-md text-gray-700 leading-relaxed">{card.description}</p>
              <div className="pr-2">
                <ul className="text-sm text-gray-600 list-disc pl-5 space-y-2">
                  {card.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* Botones de navegación */}
      <button
        className="absolute top-1/2 left-40 transform -translate-y-1/2 bg-gray-700 p-3 text-white rounded-full w-12 h-12 cursor-pointer"
        onClick={prevCards}
      >
        &#60;
      </button>
      <button
        className="absolute top-1/2 right-40 z-50 transform -translate-y-1/2 bg-gray-700 p-3 text-white rounded-full w-12 h-12 cursor-pointer"
        onClick={nextCards}
      >
        &#62;
      </button>
    </div>


  );
};

export default CarouselServices;
