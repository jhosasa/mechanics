import Header from "@/components/Header";
import Button from "@/components/ui/Button";
import React from "react";

interface OptionsButtonLoginProps {
  selectOptionButton: string;
  setSelectOptionButton: React.Dispatch<React.SetStateAction<string>>;
}

export default function OptionsButtonLogin({
  selectOptionButton,
  setSelectOptionButton,
}: OptionsButtonLoginProps) {
  return (
    <>
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
    </>
  );
}
