import { useState } from "react";
import { Map, Marker } from "pigeon-maps";
import Section from "@/components/Section";
import InfoPlace from "@/components/pages/home/InfoPlace/InfoPlace";

export default function MapHome() {
  const provider = (x: number, y: number, z: number) => {
    return `https://tile.openstreetmap.org/${z}/${x}/${y}.png`;
  };

  const [isChangeColorMarker, setIsChangeColorMarker] =
    useState<boolean>(false);
  const [movingWorkShop, setMovingWorkShop] =
    useState<string>("translate-x-full");

  const handleWorkShop = () => {
      setMovingWorkShop((prev) =>
        prev === "translate-x-full" ? "translate-x-0" : "translate-x-full"
    );
    setIsChangeColorMarker(!isChangeColorMarker);
  };

  return (
    <>
      <Section className="absolute inset-0 z-10 flex items-center justify-center">
        <Map
          height={window.innerHeight}
          attributionPrefix={false}
          provider={provider}
          defaultCenter={[50.879, 4.6997]}
          defaultZoom={11}
        >
          <Marker
            color={!isChangeColorMarker ? "#93C0D0" : "#EA443C"}
            width={50}
            anchor={[50.879, 4.6997]}
            onClick={handleWorkShop}
          />
        </Map>
      </Section>

      <InfoPlace
        isVisible={movingWorkShop === "translate-x-0"}
        handleWorkShop={handleWorkShop}
        movingWorkShop={movingWorkShop}
      />
    </>
  );
}
