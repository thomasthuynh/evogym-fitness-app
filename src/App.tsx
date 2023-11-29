import Navbar from "@/scenes/navbar";
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("benefits");

  return (
    <div className="app bg-gray-50">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
