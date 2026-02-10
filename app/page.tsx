"use client";

import React from "react";
import { useState, useEffect } from "react";


import Header from "@/components/Header";

import Hero from "@/components/Hero";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  const [documentHeight, setDocumentHeight] = useState(0);

  useEffect(() => {
    setDocumentHeight(document.documentElement.scrollHeight);
  }, []);

  return (
    <div className="min-h-screen ">
      <div className="flex justify-between">
      
        <div className="space-x-2 mb-2 pt-2 mr-2">
          {/* @ts-ignore */}
        
        </div>
      </div>

      <motion.div
        className="relative w-screen"
        style={{
          y: useTransform(scrollY, [0, 1000], [0, documentHeight], {
            clamp: false,
          }),
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Header />
      </motion.div>

      <div className="p-2">
        <Hero />
      </div>
    </div>
  );
}
