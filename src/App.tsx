import { useEffect, useState } from "react";
import "./App.css";
import { ComponentAsync } from "./components";

function App() {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => setName("Eduardo"), 2000);
  });
  return (
    <>
        <ComponentAsync />
    </>
  );
}

export default App;
