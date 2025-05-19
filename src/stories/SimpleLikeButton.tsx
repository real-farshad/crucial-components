import styled from "styled-components";
import { ThumbsUpIcon } from "./svg/ThumbsUpIcon";

interface SimpleLikeButtonProps {
  isLiked?: boolean;
  onClick: () => void;
}

const SimpleLikeButton = (props: SimpleLikeButtonProps) => {
  const { isLiked, onClick } = props;

  return (
    <StyledSimpleLikeButton onClick={onClick}>
      <span>Like</span>

      <Icon>
        <ThumbsUpIcon size={22} filled={isLiked ? true : false} />
      </Icon>
    </StyledSimpleLikeButton>
  );
};

const StyledSimpleLikeButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  padding: 0;
  opacity: 0.87;
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
`;

export default SimpleLikeButton;
