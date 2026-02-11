import React from "react";
import Image from "next/image";

export default function Header() {
  return (


    
    <div className="relative pr-3">
      <div className="absolute inset-2 animate-gradient opacity-100"></div>
      <div className="relative">
        <div className="px-2">
          <Image
            src="/header.svg"
            alt="Picture of the author"
            width={500}
            height={500}
            className="w-full"
          />
    <div className="flex h-full flex-col items-justify-space-y-2 text-">
  

<br></br>
      <h1>Shadcn and radix component with Next.js</h1>
      <p>
        {" "}
        <a href="https://tomaslonnblad-tl8888-lzvd.bolt.host/dashboard/motionxx/app">
         This page demonstrates the usage of the 3D nextjs and on html
          and Gesap with the designm tool tailwind. Framer Motion.
        Different examples.
        </a>{" "}
        
      </p>
</div>
<br></br>
        </div>
      </div>
    </div>



  );
}
