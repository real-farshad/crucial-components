import styled from "styled-components";

interface SimpleLikeButtonProps {
  liked?: boolean;
  onClick: () => void;
}

export const SimpleLikeButton = (props: SimpleLikeButtonProps) => {
  const { liked, onClick } = props;

  return (
    <StyledSimpleLikeButton onClick={onClick}>
      {liked ? "Liked" : "Like"}
    </StyledSimpleLikeButton>
  );
};

const StyledSimpleLikeButton = styled.button`
  font-size: 20px;
  background-color: #fff;
  color: #000;
  padding: 10px 40px;
  border: 2px solid #000;
  border-radius: 5px;
`;
