import { useState } from "react";
import './app.css'
function App() {
  const [themeColor, setThemeColor] = useState('black')

  const color = ['skyBlue', 'gold', 'yellow', 'pink', 'fuchsia', 'orange', 'teal', 'silver']
  const rendomColor = color[Math.floor(Math.random() * 7)];
  console.log(rendomColor);

  return (
    <>
      <div style={{backgroundColor: themeColor, height: '100vh'}}>
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-50">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
            <div className="text-center">
              <h1 style={{color: (themeColor == 'black')? rendomColor : 'black'}} className="text-4xl font-bold tracking-tight sm:text-6xl">
                  {/* To <span className="underline decoration--500"> change the theme color,</span> */}
                  {/* use the buttons on the left. */}
                  To <span className="underline decoration--500"> change the theme color</span> use the left-hand buttons.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                <span style={{color: (themeColor == 'black')? rendomColor : 'black'}} className="bold">Note:</span> To experience random colors, change the theme color by clicking on the black color on the left. Click the color black several times.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <h1 style={{color: (themeColor == 'black')? rendomColor : 'black'}} className="underline text-1xl decoration--500" >Made by Ravi</h1>
              </div>
            </div>
          </div>
      </div>
      <div className="theme-color absolute top-1/3 flex flex-col px-4">
        <button onClick={() => setThemeColor('black')} className="border rounded-full border-gray-950 my-1 p-0.5"><span className="rounded-full px-3 py-3 block bg-black"></span></button>
        <button onClick={() => setThemeColor('white')} className="border rounded-full border-gray-950 my-1 p-0.5"><span className="rounded-full px-3 py-3 block bg-white"></span></button>
        <button onClick={() => setThemeColor('skyBlue')} className="border rounded-full border-gray-950 my-1 p-0.5"><span className="rounded-full px-3 py-3 block bg-sky-300"></span></button>
        <button onClick={() => setThemeColor('teal')} className="border rounded-full border-gray-950 my-1 p-0.5"><span className="rounded-full px-3 py-3 block bg-teal-600"></span></button>
        <button onClick={() => setThemeColor('orange')} className="border rounded-full border-gray-950 my-1 p-0.5"><span className="rounded-full px-3 py-3 block bg-orange-600"></span></button>
        <button onClick={() => setThemeColor('yellow')} className="border rounded-full border-gray-950 my-1 p-0.5"><span className="rounded-full px-3 py-3 block bg-yellow-300"></span></button>
        <button onClick={() => setThemeColor('fuchsia')} className="border rounded-full border-gray-950 my-1 p-0.5"><span className="rounded-full px-3 py-3 block bg-fuchsia-600"></span></button>
      </div>
        </div>
    </>
  );
}

export default App;
