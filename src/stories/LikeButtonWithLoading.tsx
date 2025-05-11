import styled from "styled-components";
import { ThumbsUpIcon } from "./svg/ThumbsUpIcon";

interface LikeButtonWithLoadingProps {
  isLiked?: boolean;
  isLoading?: boolean;
  onClick: () => void;
}

export const LikeButtonWithLoading = (props: LikeButtonWithLoadingProps) => {
  const { isLiked, isLoading, onClick } = props;

  const buttonTitle = isLiked ? "Liked" : "Like";
  const loadingMessage = isLiked ? "Removing Like..." : "Liking...";

  return (
    <StyledLikeButtonWithLoading onClick={onClick}>
      <Icon>
        <ThumbsUpIcon size={22} />
      </Icon>

      <span>{isLoading ? loadingMessage : buttonTitle}</span>
    </StyledLikeButtonWithLoading>
  );
};

const StyledLikeButtonWithLoading = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  padding: 0;
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;
