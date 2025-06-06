"use client";
import React, { useState, useEffect } from "react";
import HomeworkTimetableCards from "@/app/dashboard/HomeworkTimetableCards";

import Image from "next/image";


export default function Home() {

  return (
    <div className="h-screen w-screen flex flex-col">
      <nav className="bg-black text-white p-2 pr-5 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#"> <img src="/logo.webp" alt="Logo" className="h-12 mr-5 rounded-md" /></a>
          <span className="font-bold font-size:large mr-2 text-orange-500">Gradio mcp Hackathon: Fake app to illustrate mcp scraping using playwright</span>
        </div>
        <div className="flex space-x-4 bg-black-500">
          <a href="/login" className="hover:underline text-orange-500">Log out</a>
          <a href="https://https://huggingface.co/spaces/sylvain471/fake-app-scaper" >
            <Image
              aria-hidden
              src="/hf-logo-white.png"
              alt="Globe icon"
              width={25}
              height={25}
            />
          </a>
          <a href="https://github.com/sdelahaies/fake-app" >
            <Image
              aria-hidden
              src="/github-mark-white.svg"
              alt="Globe icon"
              width={25}
              height={25}
            />
          </a>
        </div>
      </nav>
          <HomeworkTimetableCards/>
    </div>
  );
}
