import { useMemo } from "react";
import { useStore } from "../store/store";

export const Paginacion = () => {
  const pagina = useStore((state) => state.pagina);
  const totalPaginas = useStore((state) => state.totalPaginas);
  const establecerPagina = useStore((state) => state.establecerPagina);

  const grupoImagenes = 5;

  const grupoActual = Math.floor((pagina - 1) / grupoImagenes);

  const paginaInicio = grupoActual * grupoImagenes + 1;
  console.log(
    "La página de inicio de este grupo es la página No.: ",
    paginaInicio,
  );

  const paginaFinal = Math.min(totalPaginas, paginaInicio + grupoImagenes - 1);
  console.log("La página final de este grupo es la página No.: ", paginaFinal);

  const numeroPaginas = useMemo(() => {
    const arregloNumeroPaginas: number[] = [];

    for (let i = paginaInicio; i <= paginaFinal; i++) {
      arregloNumeroPaginas.push(i);
    }

    return arregloNumeroPaginas;
  }, [paginaInicio, paginaFinal]);

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      {/** Boton de paginacion inicial */}
      <button
        onClick={() => establecerPagina(1)}
        disabled={pagina === 1}
        className="px-4 py-2 bg-blue-500 rounded text-white hover:bg-blue-700 disabled:opacity-50 cursor-pointer"
      >
        &laquo;
      </button>

      {/** Boton de paginacion anterior */}
      <button
        onClick={() => {
          if (pagina > 1) {
            establecerPagina(pagina - 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        disabled={pagina <= 1}
        className="px-4 py-2 bg-blue-500 rounded text-white hover:bg-blue-700 disabled:opacity-50 cursor-pointer"
      >
        Anterior
      </button>

      {/** Botones de paginacion al regresar el grupo */}
      {paginaInicio > 1 && (
        <button
          onClick={() => {
            const nuevaPagina = paginaInicio - 1;
            establecerPagina(nuevaPagina);
          }}
          className="px-2 py1 bg-gray-300 text-black rounded cursor-pointer"
        >
          &laquo;
        </button>
      )}

      {/** Botones de paginacion numerica */}
      {numeroPaginas.map((num) => (
        <button
          key={num}
          className={`px-3 py-1 rounded cursor-pointer ${num === pagina ? "bg-blue-500 text-white" : "bg-gray-400 text-black"}`}
          onClick={() => establecerPagina(num)}
        >
          {num}
        </button>
      ))}

      {/** Boton de paginacion al ir al siguiente grupo */}
      {paginaFinal < totalPaginas && (
        <button
          onClick={() => {
            const nuevaPagina = paginaFinal + 1;
            establecerPagina(nuevaPagina);
          }}
          className="px-2 py1 bg-gray-300 text-black rounded cursor-pointer"
        >
          &raquo;
        </button>
      )}

      {/** Boton de paginacion anterior */}
      <button
        onClick={() => {
          if (pagina < totalPaginas) {
            establecerPagina(pagina + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        disabled={pagina >= totalPaginas}
        className="px-4 py-2 bg-blue-500 rounded text-white hover:bg-blue-700 disabled:opacity-50 cursor-pointer"
      >
        Siguiente
      </button>

      {/** Boton de paginacion final */}
      <button
        onClick={() => establecerPagina(totalPaginas)}
        disabled={pagina >= totalPaginas}
        className="px-4 py-2 bg-blue-500 rounded text-white hover:bg-blue-700 disabled:opacity-50 cursor-pointer"
      >
        &raquo;
      </button>
    </div>
  );
};
