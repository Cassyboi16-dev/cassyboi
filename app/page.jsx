"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio("/loading.mp3");
    audio.loop = false;
    audioRef.current = audio;

    const timeout = setTimeout(() => setIsLoading(false), 3200);

    return () => {
      audio.pause();
      audio.currentTime = 0;
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (!isLoading && audioRef.current) {
      audioRef?.current?.play().catch(() => {
        // Autoplay may be blocked in some browsers.
      });
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <main className="fixed inset-0 z-50 flex min-h-screen w-full flex-col items-center justify-center bg-black px-6 text-white">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="h-16 w-16 rounded-full border-4 border-white/20 border-t-white animate-spin" />
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/70">
              Loading
            </p>
            <h1 className="mt-2 text-3xl font-semibold">Just a moment...</h1>
            <p className="mt-3 max-w-xs text-sm text-white/70">
              Reminder Always to stay hydrated and take breaks while browsing my
              portfolio! 😊
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-black" >
      <Image
        src="/Cassyboi.jpeg"
        alt="Cassyboi"
        width={300}
        height={300}
        loading="eager"
        className="rounded-full hover:scale-105 transition-all duration-500 active:scale-95 hover:shadow-[0_0_20px_rgba(255,0,0,0.8)]"
      />

      <h1 className="text-4xl font-bold text-white mt-8">Hi, I'm Cassyboi!</h1>
      <p className="text-lg text-gray-400 mt-4 text-center max-w-xl">
        I'm a passionate software developer with a love for creating innovative
        solutions. I specialize in web development and have experience with
        various programming languages and frameworks. Feel free to explore my
        portfolio and reach out if you'd like to collaborate on a project or
        just want to say hi!
      </p>
      <h1 className="text-2xl font-bold text-white mt-8">
        Check out my skills and social media links below!
      </h1>
      <section>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
         
        </div>
      </section>
    </main>
  );
}
