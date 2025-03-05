import { useState } from 'react';

const CarouselServices = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerPage = 3; // Mostrar 3 tarjetas a la vez

    const features = [
        "✅ Creación, actualización y eliminación de usuarios.",
        "✅ Asignación y revocación de permisos de manera flexible.",
        "✅ Gestión de roles y control de acceso a distintas vistas.",
        "✅ Filtrado y exportación de información en formatos PDF y CSV.",
        "✅ Personalización del perfil con imagen y datos personales.",
    ];

    const features2 = [
        "✅ Gestión completa de productos: Creación, modificación y eliminación de productos con sus respectivos datos e imagen identificativa.",
        "✅ Productos compuestos: Administración de productos que dependen de materiales para su elaboración, calculando automáticamente su costo de producción.",
        "✅ Control de stock: Registro de existencias en bodega y actualización en tiempo real.",
        "✅ Categorías y organización: Creación de categorías para agrupar productos de manera eficiente.",
        "✅ Órdenes y facturación: Generación de órdenes a partir de los productos disponibles, venta de productos y emisión de facturas.",
        "✅ Carrito de compras: Sistema de facturación basado en una selección de productos.",
        "✅ Disponibilidad y búsqueda: Filtros avanzados y buscador para localizar productos rápidamente.",
    ];

    const features4 = [
        "✅ Creación y gestión de bodegas: Definición y administración de bodegas, con la posibilidad de crear tantas como se necesiten para diferentes tipos de productos y materiales.",
        "✅ Control de inventario por bodega: Registro y seguimiento de los productos y materiales almacenados en cada bodega, con detalles sobre lo que se está guardando.",
        "✅ Ubicación de productos: Organización de cada bodega en secciones específicas, para una gestión más eficiente del espacio y los productos.",
        "✅ Movimientos de materiales: Control total de las entradas y salidas de materiales y productos de la bodega, con historial detallado de los movimientos.",
        "✅ Actualización de bodegas: Posibilidad de registrar, modificar o eliminar bodegas conforme cambian las necesidades del sistema.",
    ];

    const features5 = [
        "1) Módulo de Mesas:",
        "✅ Administración de mesas del local, permitiendo asignar mesas a órdenes de clientes.",
        "✅ Modificación de información de las mesas (estado, ubicación, etc.).",
        "✅ Consulta en tiempo real de las mesas disponibles para gestionar las órdenes de manera eficiente.",
        "2) Módulo de Métodos de Pago:",
        "✅ Creación y gestión de métodos de pago personalizados para el negocio.",
        "✅ Modificación y configuración de los métodos de pago según las necesidades del local.",
        "✅ Control total sobre las opciones de pago disponibles para los clientes.",
        "Módulo de Empresas de Domicilio:",
        "✅ Registro y gestión de empresas de domicilio asociadas al negocio.",
        "✅ Gestión de información de las empresas de reparto para realizar entregas de productos comprados por los clientes."
    ];

    const features6 = [
        "✅ Selección de productos: Visualización de productos disponibles para escoger y agregar a la orden de venta.",
        "✅ Gestión de cantidades y precios: Selección de cantidades y visualización automática del valor total de la orden.",
        "✅ Creación de órdenes y ventas: Posibilidad de crear una orden con uno o más productos, facturar directamente un pedido o realizar una venta inmediata.",
        "✅ Selección de mesa y cliente: Opción de asociar la venta a una mesa (para restaurantes) y seleccionar el cliente correspondiente.",
        "✅ Métodos de pago: Elección de los métodos de pago disponibles y asociación a la venta.",
        "✅ Confirmación y facturación: Confirmación de la venta u orden y emisión de factura descargable en formato PDF.",
        "✅ Búsqueda avanzada de productos: Filtros por categoría para localizar productos fácilmente.",
        "✅ Control de stock: Verificación en tiempo real de los productos disponibles según la cantidad en stock y los materiales en bodega.",
    ];

    const features7 = [
        "✅ Visualización de órdenes: Consulta del estado de cada orden, incluyendo mesa, cliente y productos asignados.",
        "✅ Detalles de pagos: Registro y visualización de las referencias de pago asociadas a cada orden.",
        "✅ Detalles de pagos: Registro y visualización de las referencias de pago asociadas a cada orden.",
        "✅ Facturación y descarga: Generación de facturas en formato PDF o CSV para cada orden realizada.",
        "✅ Búsqueda avanzada: Filtros por fecha, estado de la orden y otros criterios para localizar rápidamente cualquier pedido.",
        "✅ Gestión de estados: Posibilidad de cancelar o completar órdenes, realizando el pago correspondiente y facturando el pedido.",
        "✅ Control de pagos: Visualización detallada de los pagos realizados por cada orden y su estado."
    ];

    const servicesCards = [
        {
            image: "https://www3.gobiernodecanarias.org/medusa/ecoescuela/proyectoevagd/files/2017/09/usuarios.png",
            name: "Módulo de Usuarios",
            description: "Administra toda la información de los usuarios del sistema, incluyendo administradores, clientes y empleados.",
            items: features,
        },
        {
            image: "https://www.comparapps.com/wp-content/uploads/2022/02/sistemas-de-inventarios.png",
            name: "Módulo de Productos",
            description: "Permite gestionar toda la información de los productos, ya sean simples o compuestos.",
            items: features2,
        },
        {
            image: "https://www.comparapps.com/wp-content/uploads/2022/02/sistemas-de-inventarios.png",
            name: "Módulo de Materiales",
            description: "Permite gestionar eficientemente los materiales utilizados en la producción de productos compuestos.",
            items: features4,
        },
        {
            image: "https://www.comparapps.com/wp-content/uploads/2022/02/sistemas-de-inventarios.png",
            name: "Módulo de Almacenamiento",
            description: "Gestiona bodegas para almacenar productos y materiales.",
            items: features4,
        },
        {
            image: "https://www.comparapps.com/wp-content/uploads/2022/02/sistemas-de-inventarios.png",
            name: "Módulo de Servicios",
            description: "Gestiona operaciones en un entorno comercial, incluyendo mesas, pagos y empresas de domicilio.",
            items: features5,
        },
        {
            image: "https://www.comparapps.com/wp-content/uploads/2022/02/sistemas-de-inventarios.png",
            name: "Módulo de Venta de Productos",
            description: "Gestiona las ventas de productos, desde la selección hasta la emisión de facturas.",
            items: features6,
        },
        {
            image: "https://www.comparapps.com/wp-content/uploads/2022/02/sistemas-de-inventarios.png",
            name: "Módulo de Órdenes o Pedidos",
            description: "Gestiona todas las órdenes realizadas, controlando el estado y los pagos.",
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
        <div className="relative my-40">
        <div className="flex overflow-x-hidden gap-10 transition-transform duration-500">
          {servicesCards.slice(currentIndex, currentIndex + cardsPerPage).map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-2xl overflow-hidden transform transition-transform duration-500 flex flex-col"
            >
              <div className="relative">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-48 object-cover transition-opacity duration-700 opacity-100"
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
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 p-3 text-white rounded-full cursor-pointer"
          onClick={prevCards}
        >
          &#60;
        </button>
        <button
          className="absolute top-1/2 right-0 z-50 transform -translate-y-1/2 bg-gray-700 p-3 text-white rounded-full cursor-pointer"
          onClick={nextCards}
        >
          &#62;
        </button>
      </div>
      
      
      );
    };
    
    export default CarouselServices;
    