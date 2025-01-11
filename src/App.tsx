import Home from "@/components/pages/home/Home";
import { AuthContext } from "@/context/AuthContext";

function App() {
  return (
    <AuthContext>
      <Home />
    </AuthContext>
  );
}

export default App;
