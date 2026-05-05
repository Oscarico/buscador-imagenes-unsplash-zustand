interface IconoLupaProps {
  className?: string;
}

export default function IconoLupa({
  className = "w-5 h-5 text-gray-600 hover:text-gray-800",
}: IconoLupaProps) {
  return (
    <svg
      className={className} // Se utiliza la prop 'className' para aplicar estilos externos al SVG. Esto permite personalizar su apariencia desde el componente padre.
      fill="none" // No se aplica ningún relleno, de modo que el SVG se muestra solo con su trazo (outline).
      stroke="currentColor" // El color del trazo se toma del color actual definido en CSS (hereda el 'currentColor'), facilitando su personalización.
      viewBox="0 0 24 24" // Define el área de visualización del SVG. En este caso, establece un sistema de coordenadas de 24x24, manteniendo la proporción y escalabilidad.
    >
      <path
        strokeLinecap="round" // Especifica que los extremos de las líneas (los "caps") sean redondeados, lo que suaviza el borde.
        strokeLinejoin="round" // Define que las uniones entre segmentos de línea sean redondeadas, mejorando la apariencia de los cruces.
        strokeWidth="2" // Establece el grosor del trazo a 2 unidades.
        // El atributo 'd' define el camino a seguir para dibujar la forma.
        // En este caso, "M21 21l-4.35-4.35" dibuja la línea diagonal (la parte de la lupa),
        // y "M10 18a8 8 0 100-16 8 8 0 000 16z" dibuja el círculo (la lente de la lupa).
        d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
      />
    </svg>
  );
}
