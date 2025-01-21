import { useAuthGoogle } from "@/hooks/useAuthGoogle";
import { createClient } from "@supabase/supabase-js";
import Button from "@/components/ui/Button";
import { Igoogle } from "@icons";

const { VITE_URL_SUPABASE: URL, VITE_API_TOKEN_SUPABASE: API } = import.meta
  .env;
  
export const supabase = createClient(URL as string, API as string);

interface RegisterGoogleProps {
  textButton: string;
}

export default function RegisterGoogle({
  textButton = "Conectar",
}: RegisterGoogleProps) {
  const { handleGoogleSignIn } = useAuthGoogle();

  return (
    <Button
      variant="border"
      className="flex justify-center gap-4 my-3 w-full hover:bg-gray-100"
      onClick={handleGoogleSignIn}
    >
      <Igoogle />
      <span className="font-semibold text-lg">{textButton}</span>
    </Button>
  );
}
