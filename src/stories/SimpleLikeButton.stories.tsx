import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import SimpleLikeButton from "./SimpleLikeButton";

const meta = {
  title: "SimpleLikeButton",
  component: SimpleLikeButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SimpleLikeButton>;

export default meta;

const Template: StoryFn<typeof SimpleLikeButton> = (args) => {
  const [isLiked, setIsLiked] = useState(args.isLiked ?? false);

  return (
    <SimpleLikeButton
      {...args}
      isLiked={isLiked}
      onClick={() => setIsLiked(!isLiked)}
    />
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  isLiked: false,
};

export const Liked = () => (
  <SimpleLikeButton isLiked={true} onClick={() => {}} />
);

export const Unliked = () => (
  <SimpleLikeButton isLiked={false} onClick={() => {}} />
);
