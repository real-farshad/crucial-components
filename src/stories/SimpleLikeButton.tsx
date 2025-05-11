import styled from "styled-components";
import { HeartIcon } from "./svg/HeartIcon";

interface SimpleLikeButtonProps {
  isLiked?: boolean;
  onClick: () => void;
}

export const SimpleLikeButton = (props: SimpleLikeButtonProps) => {
  const { isLiked, onClick } = props;

  return (
    <StyledSimpleLikeButton onClick={onClick}>
      <Icon>
        <HeartIcon size={22} />
      </Icon>

      <span>{isLiked ? "Liked" : "Like"} </span>
    </StyledSimpleLikeButton>
  );
};

const StyledSimpleLikeButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  padding: 0;
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 3px;
`;
