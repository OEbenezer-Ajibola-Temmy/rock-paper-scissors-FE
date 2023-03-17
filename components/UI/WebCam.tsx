import Image from 'next/image';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import Button from '../General/Button';

interface Props {
  continousCapture: boolean;
}

const WebCam = ({ continousCapture }: Props) => {
  const videoRef = useRef(
    null
  ) as unknown as React.MutableRefObject<HTMLVideoElement>;
  const canvasRef = useRef(null);
  const [capturedImages, setCapturedImages] = useState<string[]>([]);

  const captureImage = () => {
    const canvas = canvasRef.current as unknown as HTMLCanvasElement;
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    setCapturedImages((prev) => [
      ...prev,
      canvas.toDataURL('image/png'),
    ]) as any;
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();

        // capture images on interval of 1s then stop after 2s
        const interval = setInterval(() => {
          captureImage();
        }, 20);
        !continousCapture && setTimeout(() => {
          clearInterval(interval);
          stopCamera();
        }, 1000);
      }
    } catch (error) {
      console.error('Error starting camera', error);
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject as MediaStream;
    if (stream) {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
    }
  };

  return (
    <Wrapper>
      <Inner>
        <video ref={videoRef} />
        <canvas
          ref={canvasRef}
          width="640"
          height="480"
          style={{ display: 'none' }}
        />
        <div
          style={{
            width: '40%',
            marginBottom: '1em',
          }}
        >
          <Button onClick={startCamera} type="button" text="Start Camera" />
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1em',
            marginTop: '-9em',
            width: '100%',
            justifyContent: 'center',
            height: '100%',
            position: 'absolute',
            top: '0',
            left: '0',
          }}
        >
          {capturedImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              width="100"
              height="100"
              alt="captured images"
            />
          ))}
        </div>
      </Inner>
    </Wrapper>
  );
};

export default WebCam;

const Wrapper = styled.div`
  width: 542px;
  height: 485px;
  background: url('/images/test_cam_image.png') no-repeat center center #1c1c1c;
  border: 6px solid #67eb00;
  box-shadow: 0.878652px 6.5811px 16px 2px rgba(0, 0, 0, 0.8);
  border-radius: 30px;
  overflow: hidden;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  gap: 1em;
  position: relative;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
