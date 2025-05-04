import styled from "styled-components";

interface LikeButtonWithLoadingProps {
  liked?: boolean;
  loading?: boolean;
  onClick: () => void;
}

export const LikeButtonWithLoading = (props: LikeButtonWithLoadingProps) => {
  const { liked, loading, onClick } = props;

  const buttonTitle = liked ? "Liked" : "Like";
  const loadingMessage = liked ? "Removing Like..." : "Liking...";

  return (
    <StyledLikeButtonWithLoading onClick={onClick}>
      {loading ? loadingMessage : buttonTitle}
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
