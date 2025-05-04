import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { SimpleLikeButton } from "./SimpleLikeButton";

const meta = {
  title: "SimpleLikeButton",
  component: SimpleLikeButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    liked: { control: "boolean" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof SimpleLikeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    liked: false,
  },
};
