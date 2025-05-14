import styled from "styled-components";

interface ImageProps {
  src: string;
  alt: string;
}

const Image = (props: ImageProps) => {
  const { src, alt } = props;

  return <StyledImage src={src} alt={alt} loading="lazy" />;
};

const StyledImage = styled.img<ImageProps>`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

export default Image;
