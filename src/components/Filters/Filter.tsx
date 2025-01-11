import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import {
  Icar,
  Imoto,
  Istar
} from "@icons";
import ReactSlider from "react-slider";
import Tipografy from "@/components/Tipografy";

export default function Filter()
{
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 120]);
    const [rating, setRating] = useState<number>(0);
    const [hoveredRating, setHoveredRating] = useState<number>(0);
    const [showOtherInput, setShowOtherInput] = useState<boolean>(false);
  
    // Estados para controlar la selección de botones
    const [selectedCar, setSelectedCar] = useState<string | null>(null);
    const [selectedServices, setSelectedServices] = useState<string[]>([]); // Cambiado a un array

    const handleRangeChange = (values: [number, number]) => {
        setPriceRange(values);
      };
    
      const handleMouseEnter = (index: number) => {
        setHoveredRating(index);
      };
    
      const handleMouseLeave = () => {
        setHoveredRating(0);
      };
    
      const handleClick = (index: number) => {
        setRating(index);
      };
    
      const handleCarSelection = (type: string) => {
    
        if (type === "otros") {
          setShowOtherInput(true);
          setPriceRange([0, 200]); // Establecer el rango máximo a 200
        } else if (type === "imoto") {
          setShowOtherInput(false);
          setPriceRange([0, 180]); // Establecer el rango máximo a 180
        } else {
          setShowOtherInput(false);
          setPriceRange([0, 120]); // Establecer el rango máximo a 120
        }
    
        // Alternar selección de automóvil
        setSelectedCar((prev) => (prev === type ? null : type));
      };
    
      const handleServiceSelection = (type: string) => {
        // Alternar selección de servicio
        setSelectedServices((prev) => {
          if (prev.includes(type)) {
            return prev.filter((service) => service !== type); // Eliminar si ya está seleccionado
          } else {
            return [...prev, type]; // Agregar si no está seleccionado
          }
        });
      };
    return(
        <form>
            <Tipografy as="h5" className="mt-3">Selecione su tipo transporte </Tipografy>
          <div className="flex flex-col gap-4 p-4">
            <div className="flex justify-around border border-slate-600 rounded-lg items-center p-1">
              <Button
                type="button"
                variant="normal"
                className={`px-12 py-2 rounded-lg bg-white hover:bg-gray-100 ${
                  selectedCar === "icar" ? "border border-black" : ""
                }`}
                onClick={() => handleCarSelection("icar")}
              >
                <Icar />
              </Button>
              <div className=" flex justify-center">
                <div className="w-px h-7 bg-slate-600"></div>
              </div>
              <Button
              type="button"
                variant="normal"
                className={`px-12 py-2 rounded-lg bg-white hover:bg-gray-100 ${
                  selectedCar === "imoto" ? "border border-black" : ""
                }`}
                onClick={() => handleCarSelection("imoto")}
              >
                <Imoto />
              </Button>
              <div className="flex justify-center">
                <div className="w-px h-7 bg-slate-600"></div>
              </div>
              <Button
              type="button"
                variant="normal"
                className={`px-12 py-2 rounded-lg bg-white hover:bg-gray-100 ${
                  selectedCar === "otros" ? "border border-black" : ""
                }`}
                onClick={() => handleCarSelection("otros")}
              >
                <Tipografy as="p">Otros</Tipografy>
              </Button>
            </div>
          </div>

          {showOtherInput && (
            <Input
              type="text"
              placeholder="Especifica otro tipo de transporte..."
              className="mb-4 bg-white w-96 ml-4"
            />
          )}

          <div className="flex justify-center items-center">
            <div className="w-11/12 h-px bg-slate-600"></div>
          </div>

          <div className="flex flex-col gap-4 mt-4 mb-4">
            <Tipografy as="h5">Rango de precios</Tipografy>
            <div className="flex flex-col items-center">
              <ReactSlider
                className="w-full h -3 bg-gray-300 rounded-lg mb-3"
                thumbClassName="w-6 h-6 bg-gray-300 rounded-full cursor-pointer"
                trackClassName="bg-gray-600 h-3 rounded-lg"
                value={priceRange}
                onChange={handleRangeChange}
                min={30}
                max={120}
                step={1}
                ariaLabel={["Min price", "Max price"]}
              />
              <div className="flex justify-between w-full mt-2">
                <div>
                  <Tipografy as="p" className="block text-sm text-gray-700">
                    Mínimo
                  </Tipografy>
                  <Input
                    type="number"
                    value={priceRange[0]}
                    readOnly
                    className="w-20 text-center bg-white"
                  />
                </div>
                <div>
                  <Tipografy
                    as="p"
                    className="block text-sm text-gray-700 text-right"
                  >
                    Máximo
                  </Tipografy>
                  <Input
                    type="number"
                    value={priceRange[1]}
                    readOnly
                    className="w-20 text-center bg-white"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="w-11/12 h-px bg-slate-600"></div>
          </div>

          <div className="mt-4">
            <Tipografy as="h5" className="mb-4">
              Servicios
            </Tipografy>
            <div className="flex gap-3">
              <Button
              type="button"
                variant="normal"
                className={`flex hover:bg-gray-100 rounded-full border border-gray px-4 py-2 gap-2 ${
                  selectedServices.includes("ayuda")
                    ? "border border-black"
                    : ""
                }`}
                onClick={() => handleServiceSelection("ayuda")}
              >
                <Tipografy as="p"> Ayuda en carretera </Tipografy>
              </Button>

              <Button
              type="button"
                variant="normal"
                className={`flex hover:bg-gray-100 rounded-full border border-gray px-4 py-2 gap-2 ${
                  selectedServices.includes("domicilio")
                    ? "border border-black"
                    : ""
                }`}
                onClick={() => handleServiceSelection("domicilio")}
              >
                <Tipografy as="p"> A domicilio </Tipografy>
              </Button>
            </div>

            <div className="flex gap-3 py-3">
              <Button
              type="button"
                variant="normal"
                className={`flex hover:bg-gray-100 rounded-full border border-gray px-4 py-2 gap-2 ${
                  selectedServices.includes("revision")
                    ? "border border-black"
                    : ""
                }`}
                onClick={() => handleServiceSelection("revision")}
              >
                <Tipografy as="p"> Revisión </Tipografy>
              </Button>

              <Button
              type="button"
                variant="normal"
                className={`flex hover:bg-gray-100 rounded-full border border-gray px-4 py-2 gap-2 ${
                  selectedServices.includes("cambioAceite")
                    ? "border border-black"
                    : ""
                }`}
                onClick={() => handleServiceSelection("cambioAceite")}
              >
                <Tipografy as="p"> Cambio de aceite </Tipografy>
              </Button>
            </div>
          </div>

          <div className="flex justify-center items-center mt-1">
            <div className="w-11/12 h-px bg-slate-600"></div>
          </div>

          <div className="mt-4 mb-4">
            <Tipografy as="h5">Filtrar por puntuación</Tipografy>
            <div className="flex justify-center my-4">
              {[0, 1, 2, 3, 4].map((star) => (
                <div
                  key={star}
                  onMouseEnter={() => handleMouseEnter(star)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(star)}
                  className={`cursor-pointer ${
                    star <= (hoveredRating || rating)
                      ? "text-yellow-500"
                      : "text-gray-400"
                  }`}
                >
                  <Istar />
                </div>
              ))}
            </div>
          </div>

          <Button type="submit">Aplicar</Button>
        </form> 
    );
}