import React, { useEffect, useState } from "react";
import { useDrag } from "@use-gesture/react";
import styled from "styled-components";

import AppImage from "../ui/app-image";

const timer = (ms: number) => new Promise((res) => setTimeout(res, ms));

const INPUT_HEIGHT_REM = 0.6;
const CARD_OFFSET = 0.2;
const DRAGGING_OFFSET = 40;

interface Props {
  images: string[];
  selectedImageId: number;
  setSelectedImageId: (v: number) => void;
}

const Showcase3D = ({ images, selectedImageId, setSelectedImageId }: Props) => {
  const [isDragging, setIsDragging] = useState(false);

  const bind = useDrag(
    async ({ movement: [x], last }) => {
      if (Math.abs(x) > DRAGGING_OFFSET) {
        setIsDragging(true);
        if (last && x < 0) {
          setSelectedImageId(selectedImageId === 2 ? 0 : selectedImageId + 1);
        } else if (last && x > 0) {
          setSelectedImageId(selectedImageId === 0 ? 2 : selectedImageId - 1);
        }
        await timer(500);
        setIsDragging(false);
      }
    },
    {
      preventScroll: true,
      preventDefault: true,
      filterTaps: true,
    }
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const idx = Number(target.name.replace(/[^0-9\.]+/g, ""));
    if (!isDragging) setSelectedImageId(idx);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isDragging)
        setSelectedImageId(selectedImageId === 2 ? 0 : selectedImageId + 1);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [isDragging, selectedImageId, setSelectedImageId]);

  return (
    <SWrapper>
      <SInput
        type="radio"
        name="input-0"
        id="input-0"
        checked={selectedImageId === 0}
        onChange={handleChange}
        readOnly
      />
      <SInput
        type="radio"
        name="input-1"
        id="input-1"
        checked={selectedImageId === 1}
        onChange={handleChange}
        readOnly
      />
      <SInput
        type="radio"
        name="input-2"
        id="input-2"
        checked={selectedImageId === 2}
        onChange={handleChange}
        readOnly
      />
      {images.map((src, idx) => (
        <SLabel
          key={idx}
          htmlFor={`input-${idx}`}
          id={`nft-${idx}`}
          {...bind()}
        >
          <AppImage
            className="block md:hidden rounded-3xl"
            alt="Hero card"
            src={src}
            priority
            height={250}
            width={250}
          />
          <AppImage
            className="hidden md:block rounded-3xl"
            alt="Hero card"
            src={src}
            height={450}
            width={450}
          />
        </SLabel>
      ))}
    </SWrapper>
  );
};

const SWrapper = styled.div`
  width: auto;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;

  > #input-0:checked ~ #nft-2,
  #input-1:checked ~ #nft-0,
  #input-2:checked ~ #nft-1 {
    transform: translatex(-${CARD_OFFSET * 100}%) scale(0.9);
    opacity: 0.4;
    z-index: 0;
  }

  > #input-0:checked ~ #nft-1,
  #input-1:checked ~ #nft-2,
  #input-2:checked ~ #nft-0 {
    transform: translatex(${CARD_OFFSET * 100}%) scale(0.9);
    opacity: 0.4;
    z-index: 0;
  }

  > #input-0:checked ~ #nft-0,
  #input-1:checked ~ #nft-1,
  #input-2:checked ~ #nft-2 {
    transform: translatex(0) scale(1);
    opacity: 1;
    z-index: 1;
  }

  @media screen and (min-width: 768px) {
    width: 24rem;
    height: 400px;
  }
`;

const SInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 6.4rem;
  height: ${`${INPUT_HEIGHT_REM}rem`};
  border-radius: 1.5rem;
  cursor: pointer;
  margin: 0;
`;

const SLabel = styled.label`
  width: fit-content;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto 4rem;
  transition: transform 0.4s ease;
  cursor: pointer;
`;

export default Showcase3D;
