import { useForm, type SubmitHandler } from "react-hook-form";
import IconoLupa from "./IconoLupa";
import { useStore } from "../store/store";

interface DatosFormulario {
  consulta: string
}

export const FormularioBusqueda = () => {

  const { obtenerDatos, establecerEntrada } = useStore();

  const { register: registrar, handleSubmit: manejarEnvio, reset: reiniciar, formState: { errors } } = useForm<DatosFormulario>();

  const funcionEnvio: SubmitHandler<DatosFormulario> = (datos) => {
    establecerEntrada(datos.consulta);
    obtenerDatos();
    reiniciar();
  }

  return (
    <div>
      <form onSubmit={manejarEnvio(funcionEnvio)} className="flex flex-col items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar imagenes..."
            className="w-96 px-4 py-2 border border-gray-300 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            { ...registrar('consulta', { required: 'Debés incluir una descripción de la imagen que deseas buscar.' }) }
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-2 mr-3 focus:outline-none cursor-pointer"
          >
            <IconoLupa />
          </button>
        </div>
        { errors.consulta && (
          <p className="text-white bg-red-500 font-bold text-sm mt-2 rounded p-2">{ errors.consulta.message }</p>
        ) }

      </form>
    </div>
  );
};
