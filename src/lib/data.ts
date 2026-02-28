export const WHATSAPP_NUMBER = "593999999999"; // Replace with real number
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Habitaciones", href: "#habitaciones" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Contacto", href: "#contacto" },
];

export const TRUST_ITEMS = [
  { icon: "Sparkles", label: "Limpieza impecable" },
  { icon: "Moon", label: "Tranquilidad total" },
  { icon: "MapPin", label: "Ubicación ideal" },
  { icon: "Shield", label: "Seguridad 24/7" },
  { icon: "Tag", label: "Buen precio" },
];

export interface Room {
  id: string;
  title: string;
  description: string;
  amenities: string[];
  price: number;
  capacity: string;
  imageGradient: string;
}

export const ROOMS: Room[] = [
  {
    id: "individual",
    title: "Habitación Individual",
    description: "Perfecta para viajeros solos o estadías de trabajo. Ambiente tranquilo, bien iluminado y con todo lo necesario para descansar profundamente.",
    amenities: ["Wi-Fi de alta velocidad", "Cama individual confortable", "Baño privado", "Escritorio de trabajo", "Buena iluminación"],
    price: 25,
    capacity: "1 huésped",
    imageGradient: "from-[hsl(155,22%,28%)] to-[hsl(155,18%,38%)]",
  },
  {
    id: "doble",
    title: "Habitación Doble",
    description: "Espaciosa y acogedora, ideal para parejas o quienes buscan más espacio. Cama cómoda, ambiente pacífico y atención personalizada.",
    amenities: ["Wi-Fi de alta velocidad", "Cama doble premium", "Baño privado", "TV pantalla plana", "Closet amplio"],
    price: 35,
    capacity: "2 huéspedes",
    imageGradient: "from-[hsl(38,50%,45%)] to-[hsl(38,40%,55%)]",
  },
  {
    id: "twin",
    title: "Habitación Twin",
    description: "Dos camas individuales en un ambiente sereno. Perfecta para amigos o colegas de viaje que valoran su espacio personal.",
    amenities: ["Wi-Fi de alta velocidad", "2 camas individuales", "Baño privado", "Escritorio", "Iluminación natural"],
    price: 38,
    capacity: "2 huéspedes",
    imageGradient: "from-[hsl(200,15%,35%)] to-[hsl(200,12%,50%)]",
  },
  {
    id: "suite",
    title: "Suite Familiar",
    description: "Nuestra habitación más amplia, diseñada para familias. Espacio generoso, comodidad garantizada y la tranquilidad que nos caracteriza.",
    amenities: ["Wi-Fi de alta velocidad", "Cama matrimonial + individual", "Baño privado amplio", "Sala de estar", "Vista al jardín"],
    price: 55,
    capacity: "3-4 huéspedes",
    imageGradient: "from-[hsl(30,20%,30%)] to-[hsl(30,15%,45%)]",
  },
];

export interface Review {
  name: string;
  badge?: string;
  rating: number;
  snippet: string;
  highlights: string[];
  stayInfo: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Augustin",
    badge: "Local Guide",
    rating: 5,
    snippet: "Estuve 3 semanas y fue tranquilo, pacífico, perfecto para descansar o trabajar con calma. La dueña es muy amable, siempre con una sonrisa y disponible. A pasos del Parque La Carolina. Lo recomiendo para una estadía tranquila en Quito.",
    highlights: ["Tranquilo", "Ubicación", "Atención"],
    stayInfo: "3 semanas · Trabajo remoto",
  },
  {
    name: "Daniel Alejandro Lobos",
    rating: 5,
    snippet: "Excelente ubicación, zona tranquila para descansar bien. Siempre muy limpio y atendido por su dueña. Lo recomiendo totalmente.",
    highlights: ["Limpio", "Ubicación", "Tranquilo"],
    stayInfo: "Viaje de negocios",
  },
  {
    name: "SAW 358",
    badge: "Local Guide",
    rating: 5,
    snippet: "Estuve 3 noches, excelente y tranquilo. Siempre limpio. Amables desde el inicio; llegué horas antes del check-in y me ayudaron. Atentos por WhatsApp. Cerca de parques y centros comerciales. Habitación limpia, bien iluminada, cama cómoda. Viajando sola me sentí tranquila en todo momento. Buen precio.",
    highlights: ["Seguridad", "WhatsApp", "Buen precio"],
    stayInfo: "3 noches · Viajera sola",
  },
];

export const HIGHLIGHT_CHIPS = ["Tranquilo", "Limpio", "Atención", "WhatsApp", "Ubicación", "Seguridad"];

export const NEARBY_PLACES = [
  { name: "Parque La Carolina", distance: "5 min caminando", icon: "Trees" },
  { name: "Centro Comercial Quicentro", distance: "10 min", icon: "ShoppingBag" },
  { name: "Mall El Jardín", distance: "12 min", icon: "ShoppingBag" },
  { name: "Restaurantes y cafeterías", distance: "2-5 min", icon: "Coffee" },
  { name: "Paradas de transporte público", distance: "3 min", icon: "Bus" },
  { name: "Parque Metropolitano", distance: "15 min", icon: "Mountain" },
];

export const FAQ_ITEMS = [
  {
    q: "¿Cuáles son los horarios de check-in y check-out?",
    a: "El check-in es a partir de las 14:00 y el check-out hasta las 12:00. Sin embargo, somos flexibles: si llegas antes o necesitas salir más tarde, escríbenos por WhatsApp y haremos lo posible por ayudarte.",
  },
  {
    q: "¿Puedo comunicarme por WhatsApp?",
    a: "¡Por supuesto! WhatsApp es nuestro canal principal. Respondemos rápido y te ayudamos con cualquier consulta, desde reservas hasta recomendaciones de la ciudad.",
  },
  {
    q: "¿Es seguro para viajeros solos?",
    a: "Absolutamente. Nuestra zona es tranquila y segura. Huéspedes que viajan solos —incluyendo mujeres— nos han dicho que se sintieron en total tranquilidad durante toda su estadía.",
  },
  {
    q: "¿Qué tan limpio es el hospedaje?",
    a: "La limpieza es nuestra prioridad. Las habitaciones se limpian y desinfectan antes de cada estadía. Nuestros huéspedes destacan constantemente lo impecable de nuestros espacios.",
  },
  {
    q: "¿Qué hay cerca del hotel?",
    a: "Estamos a pasos del Parque La Carolina, uno de los espacios verdes más grandes de Quito. También cerca de centros comerciales como Quicentro y El Jardín, restaurantes, y transporte público.",
  },
  {
    q: "¿Es ideal para estadías de trabajo?",
    a: "Sí. Tenemos Wi-Fi confiable, ambientes tranquilos y buena iluminación. Varios huéspedes han realizado estadías largas de trabajo remoto con excelentes resultados.",
  },
  {
    q: "¿Los precios incluyen impuestos?",
    a: "Sí, los precios publicados son finales. Sin sorpresas ni cargos ocultos. Ofrecemos tarifas especiales para estadías largas — pregúntanos por WhatsApp.",
  },
];

export function buildWhatsAppLink(name?: string, checkIn?: string, checkOut?: string, guests?: string, message?: string) {
  const parts = ["¡Hola! Me interesa reservar en BunkerHause."];
  if (name) parts.push(`Mi nombre es ${name}.`);
  if (checkIn && checkOut) parts.push(`Fechas: ${checkIn} al ${checkOut}.`);
  if (guests) parts.push(`Huéspedes: ${guests}.`);
  if (message) parts.push(message);
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(parts.join(" "))}`;
}
