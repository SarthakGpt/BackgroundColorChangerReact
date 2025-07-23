import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("pink");

  return (
    <>
      <div className="main_container min-h-screen flex flex-col items-center justify-start bg-gray-100 py-10 px-4" style={{backgroundColor:color}}>
        <div className="navbar text-white bg-black text-2xl font-bold py-4 px-6 rounded-xl shadow-md w-full max-w-2xl text-center mb-8">
          Project : Color Changer
        </div>

        <div className="btn_container flex gap-6 flex-wrap justify-center max-w-2xl">
          <div className="flex gap-6 flex-wrap justify-center max-w-2xl">
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow cursor-pointer"
              onClick={() => setColor("red")}
            >
              Red
            </button>

            <button
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow cursor-pointer"
              onClick={() => setColor("green")}
            >
              Green
            </button>

            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow cursor-pointer"
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
