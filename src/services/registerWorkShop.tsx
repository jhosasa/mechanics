import { useFetch } from "@/hooks/useFetch";

export function registerWorkShop() {
  const { data: workshop, error } = useFetch("url-backend");

  return { workshop, error };
  //TODO: it lacks to syncronize with the backend
}
