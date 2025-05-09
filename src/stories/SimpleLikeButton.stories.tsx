import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { SimpleLikeButton } from "./SimpleLikeButton";

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

/**
 * Interactive story with click functionality.
 * Click the button to toggle between "Like" and "Liked" states.
 */
export const Default = Template.bind({});
Default.args = {
  isLiked: false,
};

/** Static demonstration of the liked state */
export const Liked = () => (
  <SimpleLikeButton isLiked={true} onClick={() => {}} />
);

/** Static demonstration of the unliked state */
export const Unliked = () => (
  <SimpleLikeButton isLiked={false} onClick={() => {}} />
);
