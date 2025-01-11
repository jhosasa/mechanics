import { useState } from "react";
import { useAuthGoogle } from "@/hooks/useAuthGoogle";
import { useSelectOptionButton } from "@/hooks/useSelectOptionButton";
import Input from "@/components/ui/Input";
import Header from "@/components/Header";
import Button from "@/components/ui/Button";
import DynamicModalButton from "@/components/DynamicModalButton";
import Menu from "@/components/pages/home/header/Menu";
import Section from "@/components/Section";
import LogoutWithImage from "@/components/LogoutWithImage";
import Login from "@/components/pages/home/login/Login";
import Register from "@/components/pages/home/login/Register";
import RegisterGoogle from "@/components/pages/home/login/RegisterGoogle";
import Filter from "@/components/Filters/Filter";
import OptionsButtonLogin from "@/components/OptionsButtonLogin";
import { Ihamburguer, Ifilter, Iperson, ImagnifyingGlass } from "@icons";

export default function HomeHeader() {
  const [visibilityMenu, setVisibilityMenu] =
    useState<string>("-translate-x-full");

  const { selectOptionButton, setSelectOptionButton } =
    useSelectOptionButton("login");
  const { isSessionUser } = useAuthGoogle();

  const handleMenu = () => {
    setVisibilityMenu((prev) =>
      prev === "-translate-x-full" ? "translate-x-0" : "-translate-x-full"
    );
  };

  const isVisible = visibilityMenu === "translate-x-0";

  return (
    <>
      {isVisible && (
        <div
          className="absolute inset-0 z-20 bg-gray-400 opacity-50 cursor-pointer"
          onClick={handleMenu}
        ></div>
      )}
      <Menu visibilityMenu={visibilityMenu} handleMenu={handleMenu} />
      <Header className="gap-3 justify-between p-5 absolute z-20 w-full">
        <Button
          variant="border"
          onClick={handleMenu}
          type="button"
          aria-label="Toggle menu"
        >
          <Ihamburguer />
        </Button>

        <div className="relative w-full">
          <Input
            type="text"
            placeholder="Buscar mecánicos..."
            className="w-full"
          />
          <div className="absolute top-0 right-0 translate-y-1/2 -translate-x-1/5 px-3 text-slate-950 text-sm">
            <ImagnifyingGlass />
          </div>
        </div>

        <DynamicModalButton
          icon={<Ifilter />}
          classNameModal="h-3/4"
        >
          <Filter />
        </DynamicModalButton>

        {!isSessionUser ? (
          <DynamicModalButton icon={<Iperson />}>
            <OptionsButtonLogin
              selectOptionButton={selectOptionButton}
              setSelectOptionButton={setSelectOptionButton}
            />
            <RegisterGoogle
              textButton={
                selectOptionButton === "login"
                  ? "Conectar con Google"
                  : "Registrarse con Google"
              }
            />
            {selectOptionButton === "login" ? <Login /> : <Register />}
          </DynamicModalButton>
        ) : (
          <LogoutWithImage />
        )}
      </Header>
    </>
  );
}
