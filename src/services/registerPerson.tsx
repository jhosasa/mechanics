import { supabase } from "@/components/pages/home/login/RegisterGoogle";

export function registerPerson() {
  // This an example of how you can use the Supabase client to create a new user
  let { data, error } = supabase.from("User").insert({
    name: "test",
    phone: 12345678,
    email: "test@test.com",
    password: "123456",
    role: "user"
  });
  //TODO: it lacks to syncronize with the backend
  return {
    data,
    error
  }
}
