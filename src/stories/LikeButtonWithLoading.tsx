import styled from "styled-components";

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
      {isLoading ? loadingMessage : buttonTitle}
    </StyledLikeButtonWithLoading>
  );
};

const StyledLikeButtonWithLoading = styled.button`
  font-size: 20px;
  background-color: #fff;
  color: #000;
  padding: 10px 40px;
  border: 2px solid #000;
  border-radius: 5px;
`;
