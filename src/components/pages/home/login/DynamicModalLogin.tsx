import { useSelectOptionButton } from "@/hooks/useSelectOptionButton";
import RegisterGoogle from "@/components/pages/home/login/RegisterGoogle";
import Login from "@/components/pages/home/login/Login";
import Register from "@/components/pages/home/login/Register";
import Button from "@/components/ui/Button";
import Header from "@/components/Header";
import DynamicModalButton from "@/components/DynamicModalButton";
import { Iperson } from "@icons";


export default function DynamicModalLogin() {
  const { selectOptionButton, setSelectOptionButton } =
    useSelectOptionButton("login");
  return (
    <DynamicModalButton icon={<Iperson />}>
      <Header className="p-3 bg-gray-100">
        <Button
          variant="normal"
          className={`w-full p-2 font-semibold ${
            selectOptionButton === "login"
              ? "shadow-md bg-white"
              : "text-gray-300"
          }`}
          type="button"
          onClick={() => setSelectOptionButton("login")}
        >
          Iniciar Sesión
        </Button>
        <Button
          variant="normal"
          type="button"
          className={`w-full p-2 font-semibold ${
            selectOptionButton === "register"
              ? "shadow-md bg-white"
              : "text-gray-300"
          }`}
          onClick={() => setSelectOptionButton("register")}
        >
          Registrarse
        </Button>
      </Header>
      <RegisterGoogle
        textButton={
          selectOptionButton === "login"
            ? "Conectar con Google"
            : "Registrarse con Google"
        }
      />
      {selectOptionButton === "login" ? <Login /> : <Register />}
    </DynamicModalButton>
  );
}
