import styled from "styled-components";

interface ImageProps {
  src: string;
  alt: string;
  objectFit?: "cover" | "contain" | "fill";
}

const Image: React.FC<ImageProps> = ({ src, alt, objectFit = "cover" }) => {
  return (
    <ImageContainer>
      <StyledImage src={src} alt={alt} objectFit={objectFit} loading="lazy" />
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const StyledImage = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  object-fit: ${({ objectFit }) => objectFit || "cover"};
  display: block;
`;

export default Image;
