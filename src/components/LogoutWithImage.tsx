import { useState } from "react";
import { useAuthGoogle } from "@/hooks/useAuthGoogle";
import Button from "@/components/ui/Button";
import { List, ListItem } from "@/components/List";
import { Ilogout } from "@icons";

export default function LogoutWithImage() {
  const { infoUser, handleSignOut } = useAuthGoogle();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="relative">
      {/* Botón del avatar */}
      <Button
        variant="normal"
        type="button"
        onClick={handleToggleMenu}
        className="flex items-center"
      >
        <img
          src={infoUser?.user_metadata?.avatar_url + "-mo"}
          className="w-12 h-10 rounded-full object-cover"
          alt={infoUser?.identities?.[0]?.identity_data?.full_name}
        />
      </Button>

      {/* Menú desplegable */}
      {isMenuOpen && (
        <List className="absolute text-black hover:bg-gray-100 right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
          <ListItem type="menu" className="w-full" onClick={handleSignOut}>
            <Ilogout />
            Cerrar Sesión
          </ListItem>
        </List>
      )}
    </div>
  );
}
