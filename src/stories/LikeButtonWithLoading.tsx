import styled, { css, keyframes } from "styled-components";
import { HeartIcon } from "./svg/HeartIcon";

interface LikeButtonWithLoadingProps {
  isLiked?: boolean;
  isLoading?: boolean;
  onClick: () => void;
}

const LikeButtonWithLoading = (props: LikeButtonWithLoadingProps) => {
  const { isLiked, isLoading, onClick } = props;

  return (
    <StyledLikeButtonWithLoading isLoading={isLoading} onClick={onClick}>
      <span>Like</span>

      <Icon>
        <HeartIcon size={21} filled={isLiked ? true : false} />
      </Icon>
    </StyledLikeButtonWithLoading>
  );
};

const StyledLikeButtonWithLoading = styled.button<{ isLoading?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  padding: 0;
  opacity: 0.87;

  ${({ isLoading }) =>
    isLoading &&
    css`
      animation: ${blink} 1s infinite linear;
    `}
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const blink = keyframes`
  0% { opacity: 0.87; }
  50% { opacity: 0.25; }
  100% { opacity: 0.87; }
`;

export default LikeButtonWithLoading;
