import Button from "@/components/ui/Button";
import Aside from "@/components/Aside";
import Header from "@/components/Header";
import Tipografy from "@/components/Tipografy";
import AvatarWithText from "@/components/AvatarWithText";
import { List, ListItem } from "@/components/List";
import { Igearplus, Iclosex, Imessage } from "@icons";
import Notification from "../../../Notifications/Notifications";

interface Notification {
  id: number;
  message: string;
  timestamp: string;
}

export default function Menu({ visibilityMenu, handleMenu }: MenuProps) {

  return (
    <Aside
      className={`${visibilityMenu} absolute z-30 h-full inset-0 transition-transform lg:w-1/4`}
    >
      <div className="px-3 py-5">
        <Header className="justify-between mb-7">
          <Tipografy as="h3">Menú</Tipografy>
          <Button variant="normal" onClick={handleMenu}>
            <Iclosex />
          </Button>
        </Header>
        <List className="flex-col mb-7">
          <ListItem type="menu">
            <Igearplus />
            <span>Mecánicos solicitados</span>
          </ListItem>

          <Notification/>

          <ListItem type="menu">
            <Imessage />
            <span>Mensajes</span>
          </ListItem>
        </List>

        <div className="flex flex-col gap-5">
          <Tipografy as="h5" className="text-lg font-semibold">
            Talleres cercanos
          </Tipografy>
          <AvatarWithText
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwW0oqt9Seh3IodYGwH5hRJsZZn9RGu4bsQA&s"
            alt="Nombre de taller cercano"
            classNameAvatar="rounded-full w-14 h-14 object-cover"
            text="Taller Mecánico Express"
          />
          <AvatarWithText
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwW0oqt9Seh3IodYGwH5hRJsZZn9RGu4bsQA&s"
            alt="Nombre de taller cercano"
            classNameAvatar="rounded-full w-14 h-14 object-cover"
            text="Taller Mecánico Express"
          />
        </div>
      </div>
    </Aside>
  );
}
