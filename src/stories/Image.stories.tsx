import { Meta } from "@storybook/react";
import Image from "./Image";
import backgroundImage from "../assets/high-resolution-background-image.jpg";

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
