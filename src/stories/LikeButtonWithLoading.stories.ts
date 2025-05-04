import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { LikeButtonWithLoading } from "./LikeButtonWithLoading";

const meta = {
  title: "LikeButtonWithLoading",
  component: LikeButtonWithLoading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    liked: { control: "boolean" },
    loading: { control: "boolean" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof LikeButtonWithLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    liked: false,
    loading: false,
  },
};
