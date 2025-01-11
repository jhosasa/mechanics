import { useRef, useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Section from "@/components/Section";
import Tipografy from "@/components/Tipografy";
import { List, ListItem } from "@/components/List";
import Modal from "@/components/ui/Modal";

import { Iplus, Iupload } from "@icons";

interface RegisterWorkShopProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  classNameModal?: string;
}

export default function RegisterWorkShop({ isVisible, setIsVisible, classNameModal }: RegisterWorkShopProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleUpload = () => {
    fileInputRef.current?.click();
  };
  const serviceInputRef = useRef<HTMLInputElement>(null);
  const [service, setService] = useState<
    Array<{ value: string; checked: boolean }>
  >([]);

  const handleService = () => {
    if (serviceInputRef.current) {
      const value = serviceInputRef.current.value.trim();
      if (value.length > 0 && !service.some((item) => item.value === value)) {
        setService((prev) => [...prev, { value, checked: true }]);
        serviceInputRef.current.value = "";
      }
    }
  };

  const toggleService = (value: string) => {
    setService((prev) => prev.filter((item) => item.value !== value));
  };

  return (
    <Modal
      title="Registre su taller 👨‍🔧"
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      classNameModal = {classNameModal}
    >
      <form className="flex flex-col gap-3 my-3 w-full">
        <Input
          type="text"
          placeholder="Nombre del mecánico o taller"
          className="w-full"
          requiredL
          autoComplete="off"
        />
        <Input
          type="text"
          placeholder="Ubicación"
          className="w-full"
          required
          autoComplete="off"
        />
        <div className="flex gap-3 items-center">
          <Input
            type="text"
            placeholder="latitud (opcional)"
            className="w-full placeholder:font-semibold"
            required
            autoComplete="email"
          />
          <Input
            type="text"
            placeholder="longitud (opcional)"
            className="w-full placeholder:font-semibold"
            autoComplete="off"
            required
          />
        </div>
        <Section className="flex flex-col gap-3">
          <Tipografy as="h6">Servicios ofrecidos</Tipografy>
          <div className="flex gap-y-2 flex-wrap items-center w-full">
            <div className="flex gap-3 items-center w-1/2">
              <Input
                type="checkbox"
                className="w-4 h-4 cursor-pointer accent-slate-900"
              />
              <label className="text-sm font-semibold">Automóviles</label>
            </div>
            <div className="flex gap-3 items-center w-1/2">
              <Input
                type="checkbox"
                className="w-4 h-4 cursor-pointer accent-slate-900"
              />
              <label className="text-sm font-semibold">Camiones</label>
            </div>
            <div className="flex gap-3 items-center w-1/2">
              <Input
                type="checkbox"
                className="w-4 h-4 cursor-pointer accent-slate-900"
              />
              <label className="text-sm font-semibold">
                Electrónica Automotriz
              </label>
            </div>
            <div className="flex gap-3 items-center w-1/2">
              <Input
                type="checkbox"
                className="w-4 h-4 cursor-pointer accent-slate-900"
              />
              <label className="text-sm font-semibold">Motos</label>
            </div>
            <div className="flex gap-3 items-center w-1/2">
              <Input
                type="checkbox"
                className="w-4 h-4 cursor-pointer accent-slate-900"
              />
              <label className="text-sm font-semibold">Cambio de aceite</label>
            </div>
            <div className="flex gap-3 items-center w-1/2">
              <Input
                type="checkbox"
                className="w-4 h-4 cursor-pointer accent-slate-900"
              />
              <label className="text-sm font-semibold">Gomero</label>
            </div>
          </div>
        </Section>

        <Section>
          <Tipografy as="h6">Servicios personalizados</Tipografy>
          <List className="mt-1 list-disc pl-5 flex flex-wrap gap-3">
            {service.map((item, index) => (
              <ListItem key={index} className="flex items-center gap-2">
                <Input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleService(item.value)}
                  className="cursor-pointer accent-slate-900 w-4 h-4"
                />
                <span>{item.value}</span>
              </ListItem>
            ))}
          </List>
          <div className="flex gap-3 items-center">
            <Input
              type="text"
              placeholder="Ej: Cambio de filtro de aire"
              className="w-full"
              required
              autoComplete="off"
              ref={serviceInputRef}
            />
            <Button
              variant="primary"
              className="w-max"
              type="button"
              onClick={handleService}
            >
              <Iplus />
            </Button>
          </div>
        </Section>

        <div>
          <label className="font-semibold">
            Precio estimado a cobrar
            <Input
              type="text"
              className="w-full"
              required
              autoComplete="email"
            />
          </label>
        </div>

        <Section className="flex flex-col gap-3">
          <Tipografy as="h6">Fotos del taller</Tipografy>
          <div className="flex gap-3 items-center">
            <Button
              variant="primary"
              className="w-max flex gap-3"
              type="button"
              onClick={handleUpload}
            >
              <Iupload />
              <span>Subir fotos</span>
            </Button>
            <Tipografy as="div">0 foto(s) seleccionada(s)</Tipografy>
            <Input
              type="file"
              className="w-full hidden"
              ref={fileInputRef}
              accept="image/jpg, image/jpeg, image/png"
            />
          </div>
        </Section>

        <Button variant="primary" className="w-full" type="submit">
          Registrar taller
        </Button>
      </form>
    </Modal>
  );
}
