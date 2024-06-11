import React, { useState } from "react"

function App() {
  const [color, setColor] = useState("")
  return (

    <div className=" text-black-300 text-3xl font-extrabold w-full h-screen text-wrap  text-center justify-around"
      style={{ backgroundColor: color, color:color }}>
      BG Changer
      <div className=" text-slate-50 hover:p-6 bg-slate-300 my-60 py-3 gap-3 flex rounded-3xl justify-center text-center scroll-my-96 flex-wrap">

        <div onClick={() => setColor("red")} className=" hover:bg-red-900 hover:p-5 bg-red-600 from-neutral-950 outline-none rounded-full py-4 px-4">RED</div>
        <div onClick={() => setColor("green")} className="hover:bg-green-900 hover:p-5 bg-green-600 from-neutral-950 outline-none rounded-full py-4 px-4">Green</div>
        <div onClick={() => setColor("blue")} className="hover:bg-blue-900 hover:p-5 bg-blue-600 from-neutral-950 outline-none rounded-full py-4 px-4">Blue</div>
        <div onClick={() => setColor("lime")} className="hover:bg-lime-900 hover:p-5 bg-lime-500 from-neutral-950 outline-none rounded-full py-4 px-4">Lime</div>
        <div onClick={() => setColor("gray")} className="hover:bg-gray-900 hover:p-5 bg-gray-600 from-neutral-950 outline-none rounded-full py-4 px-4">Gray</div>
        <div onClick={() => setColor("yellow")} className="hover:bg-yellow-900 hover:p-5 bg-yellow-600 from-neutral-950 outline-none rounded-full py-4 px-4">Yellow</div>
        <div onClick={() => setColor("pink")} className="hover:bg-pink-900 hover:p-5 bg-pink-600 from-neutral-950 outline-none rounded-full py-4 px-4">Pink</div>
        <div onClick={() => setColor("purple")} className="hover:bg-purple-900 hover:p-5 bg-purple-600 from-neutral-950 outline-none rounded-full py-4 px-4">Purple</div>
        <div onClick={() => setColor("orange")} className="hover:bg-orange-900 hover:p-5 bg-orange-600 from-neutral-950 outline-none rounded-full py-3 px-3 ">Orange</div>

      </div>
    </div>

  )
}
export default App;