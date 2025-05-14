import { Meta } from "@storybook/react";
import Image from "./Image";
import backgroundImage from "../assets/background.png";

const meta = {
  title: "Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Image>;

export default meta;

export const Default = {
  args: {
    src: backgroundImage,
    alt: "background",
  },
};
