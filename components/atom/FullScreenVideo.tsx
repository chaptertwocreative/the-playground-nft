import styled from "styled-components";
import { FC, useEffect, useRef } from "react";

const IVideoContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  video {
    height: 99%;
    width: 100%;
  }
`;

interface Prop {
  videoSrc: string;
}

const FullScreenVideo: FC<Prop> = ({ videoSrc }) => {
  const video = useRef<HTMLVideoElement>(null);

  return (
    <IVideoContainer>
      <video
        autoPlay
        muted
        style={{ objectFit: "cover" }}
        ref={video}
        onEnded={() => {
          if (video && video.current) {
            video.current.pause();
          }
        }}
        onLoadedMetadata={(e) => console.log(e)}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </IVideoContainer>
  );
};

export default FullScreenVideo;
