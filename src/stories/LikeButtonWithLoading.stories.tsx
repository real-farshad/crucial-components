import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import LikeButtonWithLoading from "./LikeButtonWithLoading";

const meta = {
  title: "LikeButtonWithLoading",
  component: LikeButtonWithLoading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LikeButtonWithLoading>;

export default meta;

const Template: StoryFn<typeof LikeButtonWithLoading> = (args) => {
  const [isLiked, setIsLiked] = useState(args.isLiked ?? false);
  const [isLoading, setIsLoading] = useState(args.isLoading ?? false);

  const simulateAsyncAction = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLiked(!isLiked);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <LikeButtonWithLoading
      {...args}
      isLiked={isLiked}
      isLoading={isLoading}
      onClick={simulateAsyncAction}
    />
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  isLiked: false,
  isLoading: false,
};

export const Liked = () => (
  <LikeButtonWithLoading isLiked={true} isLoading={false} onClick={() => {}} />
);

export const Unliked = () => (
  <LikeButtonWithLoading isLiked={false} isLoading={false} onClick={() => {}} />
);

export const LoadingWhileLiking = () => (
  <LikeButtonWithLoading isLiked={false} isLoading={true} onClick={() => {}} />
);

export const LoadingWhileRemoving = () => (
  <LikeButtonWithLoading isLiked={true} isLoading={true} onClick={() => {}} />
);
