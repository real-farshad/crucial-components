import styled from "styled-components";

interface FillImageProps {
  src: string;
  alt: string;
  objectFit?: "cover" | "contain" | "fill";
}

const FillImage = (props: FillImageProps) => {
  const { src, alt, objectFit = "cover" } = props;

  return (
    <StyledFillImage>
      <Image src={src} alt={alt} objectFit={objectFit} />
    </StyledFillImage>
  );
};

const StyledFillImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img<FillImageProps>`
  width: 100%;
  height: 100%;
  object-fit: ${({ objectFit }) => objectFit};
  display: block;
`;

export default FillImage;
