import { FormularioBusqueda } from "./components/FormularioBusqueda";
import { Resultados } from "./components/Resultados";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="bg-blue-200 p-4">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Buscador de imágenes
          </h1>
        </header>

        <main className="flex flex-col flex-grow p-4">
          <section className="bg-blue-100 p-4">
            <FormularioBusqueda />
          </section>

          <section className="bg-blue-50 flex-grow p-4">
            <Resultados />
          </section>
        </main>

        <footer className="bg-blue-200 p-4 text-center text-gray-800">
          Todos los derechos reservados © 2026
        </footer>
      </div>
    </>
  );
}

export default App;
