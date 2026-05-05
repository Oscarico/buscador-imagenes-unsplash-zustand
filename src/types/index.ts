// Interfaz para cada imagen - Foto

export interface Foto {
  id: string;
  urls: {
    small: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  description?: string;
}

// Interfaz para el estado global del store

export interface stateStore {
  entrada: string;
  resultados: Foto[];
  pagina: number;
  totalPaginas: number;
  obtenerDatos: () => Promise<void>;
  establecerPagina: (numero: number) => void;
  establecerEntrada: (palabraBusqueda: string) => void;
}
