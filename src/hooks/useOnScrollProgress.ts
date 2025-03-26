import { useEffect } from "react";

export const useOnScrollProgress = (
  triggerPercentage: number,
  callback: () => void
): void => {
  // Validar que el porcentaje esté entre 0 y 1
  if (triggerPercentage < 0 || triggerPercentage > 1) {
    throw new Error("El porcentaje debe estar entre 0 y 1");
  }

  useEffect(() => {
    let hasTriggered = false;

    const handleScroll = () => {
      // Calcular la altura total del documento
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;

      // Calcular el progreso actual del scroll (de 0 a 1)
      const scrollProgress =
        documentHeight > 0 ? Math.min(1, scrollTop / documentHeight) : 0;

      // Verificar si se ha alcanzado el porcentaje de scroll deseado
      if (!hasTriggered && scrollProgress >= triggerPercentage) {
        // Ejecutar el callback
        callback();

        // Marcar como ya disparado para evitar múltiples ejecuciones
        hasTriggered = true;
      }
    };

    // Agregar el event listener
    window.addEventListener("scroll", handleScroll);

    // Ejecutar una vez al montar para manejar casos de páginas cortas
    handleScroll();

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [triggerPercentage, callback]);
};
