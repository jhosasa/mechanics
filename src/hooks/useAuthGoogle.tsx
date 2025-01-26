import { useContext, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { AuthProvider } from "@/context/AuthContext";

const { VITE_URL_SUPABASE: URL, VITE_API_TOKEN_SUPABASE: API } = import.meta
  .env;
export const supabase = createClient(URL as string, API as string);

export function useAuthGoogle() {
  const { setIsSessionUser, setInfoUser, infoUser, isSessionUser } =
    useContext(AuthProvider);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      setInfoUser(data.session?.user);
      setIsSessionUser(data.session !== null);
    };

    fetchSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setInfoUser(session?.user);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      setIsSessionUser(false);
    }
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error during Sign-Out:", error.message);
    }

    setInfoUser(null);
    setIsSessionUser(false);
  };

  return {
    handleGoogleSignIn,
    handleSignOut,
    infoUser,
    isSessionUser,
  };
}
