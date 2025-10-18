"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ArtworkCard from "./ArtworkCard";

const artworks = [
  "/artworks/art1.jpg",
  "/artworks/art2.jpg",
  "/artworks/art3.jpg",
  "/artworks/art4.jpg",
  "/artworks/art5.jpg",
  "/artworks/art6.jpg",
  "/artworks/art7.jpg",
  "/artworks/art8.jpg",
  "/artworks/art9.jpg",
  "/artworks/art10.jpg",
  "/artworks/art11.jpg",
  "/artworks/art12.jpg",
  "/artworks/art13.jpg",
  "/artworks/art14.jpg",
  "/artworks/art15.jpg",
  "/artworks/art16.jpg",
  "/artworks/art17.jpg",
  "/artworks/art18.jpg",
  "/artworks/art19.jpg",
  "/artworks/art20.jpg",
  "/artworks/art21.jpg",
  "/artworks/art22.jpg",
  "/artworks/art23.jpg",
  "/artworks/art24.jpg",
  "/artworks/art25.jpg",
  "/artworks/art26.jpg",
  "/artworks/art27.jpg",
  "/artworks/art28.jpg",
  "/artworks/art29.jpg",
  "/artworks/art30.jpg",
  "/artworks/art31.jpg",
  "/artworks/art32.jpg",
];

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Calculate track width for animation
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth);
    }
  }, []);

  useEffect(() => {
    // Handle autoplay for background audio
    const playAudio = async () => {
      try {
        await audioRef.current?.play();
      } catch (err) {
        console.warn(
          "Autoplay blocked — waiting for user interaction to start audio."
        );
        const resumeAudio = () => {
          audioRef.current?.play();
          window.removeEventListener("click", resumeAudio);
        };
        window.addEventListener("click", resumeAudio);
      }
    };

    playAudio();
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Hidden looping background audio */}
      <audio
        ref={audioRef}
        src="/audio/background.mp3" // Place your audio in /public/audio/
        loop
        hidden
      />

      <motion.div
        ref={trackRef}
        className="flex gap-6"
        animate={{ x: [0, -trackWidth / 2] }}
        transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
      >
        {artworks.map((art, idx) => (
          <ArtworkCard key={idx} src={art} />
        ))}
        {artworks.map((art, idx) => (
          <ArtworkCard key={`dup-${idx}`} src={art} />
        ))}
      </motion.div>
    </div>
  );
}
