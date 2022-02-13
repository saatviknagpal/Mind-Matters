import React, { useState, useRef, useEffect, Fragment } from "react";
import Navbar from "../../components/navbar/Navbar";
import voice from "../VoiceRoom/voice.png";

const Selection = () => {
  return (
    <>
      <Navbar />
      <div class="text-center mt-10 ">
        <h1 className="xl:text-5xl text-4xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
          Voice Rooms
        </h1>
      </div>
      <div class="p-10 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-5">
        <div class="rounded overflow-hidden bg-slate-200 shadow-lg">
          <img class="w-full" src={voice} alt="Mountain" />
          <div class="px-6 py-4">
            <div class="font-bold text-center text-xl mb-2">Mountain</div>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button
              //   onClick={onSubmit}
              type="submit"
              class="w-full text-center text-center bg-cyan-500 py-3 rounded   text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Join
            </button>
          </div>
        </div>

        <div class="rounded overflow-hidden bg-slate-200 shadow-lg">
          <img class="w-full" src={voice} alt="River" />
          <div class="px-6 py-4">
            <div class="font-bold text-center text-xl mb-2">River</div>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button
              //   onClick={onSubmit}
              type="submit"
              class="w-full text-center text-center bg-cyan-500 py-3 rounded   text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Join
            </button>
          </div>
        </div>

        <div class="rounded overflow-hidden bg-slate-200 shadow-lg">
          <img class="w-full" src={voice} alt="Forest" />
          <div class="px-6 py-4">
            <div class="font-bold text-center text-xl mb-2">Forest</div>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button
              //   onClick={onSubmit}
              type="submit"
              class="w-full text-center bg-cyan-500 py-3 rounded   text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Join
            </button>
          </div>
        </div>
        <div class="rounded overflow-hidden bg-slate-200 shadow-lg">
          <img class="w-full" src={voice} alt="Forest" />
          <div class="px-6 py-4">
            <div class="font-bold text-center text-xl mb-2">Forest</div>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button
              //   onClick={onSubmit}
              type="submit"
              class="w-full text-center bg-cyan-500 py-3 rounded   text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Join
            </button>
          </div>
        </div>
        <div class="rounded overflow-hidden bg-slate-200 shadow-lg">
          <img class="w-full" src={voice} alt="Forest" />
          <div class="px-6 py-4">
            <div class="font-bold text-center text-xl mb-2">Forest</div>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button
              //   onClick={onSubmit}
              type="submit"
              class="w-full text-center bg-cyan-500 py-3 rounded   text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Join
            </button>
          </div>
        </div>
        <div class="rounded overflow-hidden bg-slate-200 shadow-lg">
          <img class="w-full" src={voice} alt="Forest" />
          <div class="px-6 py-4">
            <div class="font-bold text-center text-xl mb-2">Forest</div>
          </div>
          <div class="px-6 pt-4 pb-2">
            <button
              //   onClick={onSubmit}
              type="submit"
              class="w-full text-center bg-cyan-500 py-3 rounded   text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Selection;
