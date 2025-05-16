import type { Meta, StoryFn } from "@storybook/react";
import styled from "styled-components";
import FillImage from "./FillImage";

import backgroundImage from "../assets/high-resolution-background-image.jpg";

const meta = {
  title: "FillImage",
  component: FillImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FillImage>;

export default meta;

type TemplateArgs = React.ComponentProps<typeof FillImage> & {
  width: number;
  height: number;
};

const Template: StoryFn<TemplateArgs> = (args) => {
  const { width, height, ...fillImageArgs } = args;
  return (
    <Container width={width} height={height}>
      <FillImage {...fillImageArgs} />
    </Container>
  );
};

const Container = styled.div<{ width: number; height: number }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`;

export const Default = Template.bind({});
Default.args = {
  width: 400,
  height: 400,
  src: backgroundImage,
  alt: "Background Image",
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  ...Default.args,
  width: 1200,
  height: 400,
};

export const Vertical = Template.bind({});
Vertical.args = {
  ...Default.args,
  width: 400,
  height: 800,
};
