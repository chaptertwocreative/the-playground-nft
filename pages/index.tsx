import Head from "next/head";
import styled from "styled-components";
import FullScreenVideo from "../components/atom/FullScreenVideo";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const { ref, inView, entry } = useInView();

  useEffect(() => {
    if (inView) console.log(ref);
  }, [ref, inView]);

  return (
    <main style={{ overflow: "hidden" }}>
      <section id="intro-video">
        <FullScreenVideo videoSrc={"/playground-intro-web.mp4"} />
      </section>
      <section id="enter-portal" ref={ref}>
        <FullScreenVideo videoSrc={"/intro-portal.MOV"} />
      </section>
      <section id="playground-room">
        <div
          style={{
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src="/playground-room.png"
            alt="The Playground Room"
            width={1600}
            height={900}
          />
        </div>
      </section>
      <section id="characters">
        <div
          style={{
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src="/characters.png"
            alt="NFT artwork"
            width={1600}
            height={900}
          />
        </div>
      </section>
      <section id="footer-tv">
        <FullScreenVideo videoSrc="/discord-tv.mp4" />
      </section>
    </main>
  );
}
