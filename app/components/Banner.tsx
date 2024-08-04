"use client";
import React, { useEffect, useRef } from "react";

interface Banner {
  id: number;
  title: string;
  description: string;
  images: string[];
  buttonText: string;
  templateId: number;
}

const Banner: React.FC<Banner> = ({
  id,
  title,
  description,
  images,
  buttonText,
  templateId,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const populateBanner = (
    canvas: HTMLCanvasElement | null,
    ctx: CanvasRenderingContext2D | null,
    banner: Banner
  ) => {
    // Set text properties
    if (canvas) {
      if (ctx) {
        const bgImg = new Image();
        bgImg.src = `/templates/${templateId}.png`;
        bgImg.onload = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
          ctx.font = "140px Roboto";
          ctx.fillStyle = "black";
          ctx.textAlign = "center";
  
          // Draw the title
          ctx.fillText(banner.title, canvas.width / 2, 100);
  
          // Draw the description
          ctx.font = "70px Arial";
          ctx.fillText(banner.description, canvas.width / 2, 150);
  
          // Draw the button text
          ctx.font = "80px Arial";
          ctx.fillStyle = "white";
          ctx.fillText(banner.buttonText, canvas.width / 2, canvas.height - 50);
        };
        bgImg.onerror = () => {
          console.error(`Failed to load image /templates/${templateId}.png`);
        };
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (typeof window !== "undefined") {
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          populateBanner(canvas, ctx, {
            id,
            title,
            description,
            images,
            buttonText,
            templateId,
          });
        }
      }
    }
  }, [id, title, description, images, buttonText, templateId]);
  return (
    <>
      <div className="banner-holder">
        <canvas
          ref={canvasRef}
          id="banner-canvas"
          className="w-full"
          width={1080}
          height={1080}
        ></canvas>
      </div>
    </>
  );
};

export default Banner;
