import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import RegisterWorkShop from "@/components/pages/home/workshop/RegisterWorkShop";

export default function Register() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleToggleModal = () => setIsVisible((prev) => !prev);

  return (
    <form className="flex flex-col gap-3 w-full">
      <Input
        type="text"
        placeholder="Nombre"
        className="w-full"
        required
        autoComplete="off"
      />
      <Input
        type="email"
        placeholder="Correo electronico"
        className="w-full"
        required
        autoComplete="email"
      />
      <Input
        type="password"
        placeholder="Contraseña"
        className="w-full"
        autoComplete="off"
        required
      />
      <select className="w-full p-3 border">
        <option value=" " disabled selected>
          Registrarse como:
        </option>
        <option value="user">Registrarse como: Usuario</option>
        <option value="mechanic">Resgistrarse como: Mecánico</option>
      </select>
      <Button variant="primary" className="w-full" type="submit">
        Registrarse
      </Button>
      <Button
        variant="normal"
        className="text-center text-md font-semibold"
        onClick={handleToggleModal}
        type="button"
      >
        Registrar como mecánico/taller{" "}
      </Button>
        <RegisterWorkShop
          classNameModal="h-[90%]"
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
    </form>
  );
}
