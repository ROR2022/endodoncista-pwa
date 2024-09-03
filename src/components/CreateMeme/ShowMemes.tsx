"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getMemes } from "@/api/rorUserApi";

/**
 * 
 *  <div
         key={index}
         dangerouslySetInnerHTML={{ __html: meme }}
         style={{ overflow:'auto'}}
       />
 */

const ShowMemes = () => {
  const [memes, setMemes] = useState<any[]>([]);
  useEffect(() => {
    getMemes().then((res) => {
      console.log("res getMemes:  ", res);
      const tempMemes = res.map((meme: any) => meme.memeURL);
      setMemes(tempMemes);
    });
  }, []);

  return (
    <div
        style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            
            marginTop: "5vh",
            marginBottom: "3vh",
        }}
    >
      {memes.map((meme, index) => (
         <Image
            key={`${meme}`}
            src={meme}
            alt="meme"
            width={300}
            height={300}
            style={{ 
              margin: "10px",
              objectFit: "contain", 
            }}
          />
      ))}
    </div>
  );
};

export default ShowMemes;
