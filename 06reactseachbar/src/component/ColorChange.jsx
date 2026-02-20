import React, { useState } from "react";

function ColorChange() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-screen h-screen transition-colors duration-300"
      style={{ backgroundColor: color }}
    >
      {/* Bottom fixed button container */}
      <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 px-4">
        <div className="flex flex-wrap justify-center items-center gap-3 bg-white shadow-lg rounded-xl px-4 py-3">


          {/* Buttons */}
          <button  
            className=" btn-outline-none px-4 py-1 rounded-full text-white bg-red-500 hover:bg-red-600 transition-colors shadow-lg"type  
            

            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default ColorChange;


//test change 


///hhahahahhahaha