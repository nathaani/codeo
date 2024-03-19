import { useState } from "react";

import "./App.css";
import "./output.css";
import "./input.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="bg-white z-50 opacity-90 backdrop-blur-xl rounded-bl-[7vw] rounded-br-[7vw] h-36 w-full flex space-x-8 fixed top-0" >
        <section className="max-w-4xl mx-auto p-4 flex justify-between items-center justify-center">
          <div className="m-8">
            <div className="text-4xl">Hello,</div>
            <div className="text-4xl font-bold">Zabel</div>
          </div>
          <div className="logo">
            <img src="../images/CODEO.png" alt="logo" className="h-16 m-8" />
          </div>
        </section>
      </header>
      <main className="max-w-4xl">
        <section
          id="hero"
          className="z-0 flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 my-20"
        >
          <figure className="my-12">
            <blockquote className="bg-white dark:bg-black pl-14 pr-8 py-12 rounded-2xl h-36 w-60 shadow-sm" />
            <blockquote className="bg-white dark:bg-black pl-14 pr-8 py-12 rounded-2xl relative h-36 w-60 shadow-sm mt-8">
              <p className="text-2xl sm:text-3xl text-center">CSS</p>
            </blockquote>
            <blockquote className="bg-white dark:bg-black pl-14 pr-8 py-12 rounded-2xl relative h-36 w-60 shadow-sm mt-8">
              <p className="text-2xl sm:text-3xl text-center">CSS</p>
            </blockquote>
            <blockquote className="bg-white dark:bg-black pl-14 pr-8 py-12 rounded-2xl relative h-36 w-60 shadow-sm mt-8">
              <p className="text-2xl sm:text-3xl text-center">CSS</p>
            </blockquote>
          </figure>
        </section>
      </main>
      <footer className="fixed bg-white opacity-90 rounded-tl-[7vw] rounded-tr-[7vw] h-16">
        <div className="footerIcons">
          <a href="home.html">
            <img src="../images/home.png" alt="home" />
          </a>
          <a href="account.html">
            <img src="../images/profile.png" alt="profile" />
          </a>
          <a href="textbook.html">
            <img src="../images/textbook.png" alt="textbook" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
