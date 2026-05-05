import { create } from "zustand";
import type { stateStore } from "../types";
import axios from "axios";

export const useStore = create<stateStore>((set, get) => ({
  entrada: "",
  resultados: [],
  pagina: 1,
  totalPaginas: 0,
  obtenerDatos: async () => {
    const { entrada, pagina } = get();

    try {
      const respuesta = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: { query: entrada, page: pagina, per_page: 12 },
          headers: {
            Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_KEY}`,
          },
        },
      );

      console.log("Estamos recibiendo respuesta de la API: ", respuesta.data, " Estamos en la página: ", pagina);

      set({
        resultados: respuesta.data.results,
        totalPaginas: respuesta.data.total_pages
      });
    } catch (error) {
      console.log("Error al obtener los resultados: ", error);
      set({
        resultados: [],
      });
    }
  },
  establecerPagina: (numero: number) => {
    set({ pagina: numero });
    get().obtenerDatos();
  },
  establecerEntrada: (palabraBusqueda: string) => {
    set({
        entrada: palabraBusqueda,
        pagina: 1
    })
  }

}));
