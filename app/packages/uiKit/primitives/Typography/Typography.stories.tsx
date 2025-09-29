import { Meta, StoryObj } from "@storybook/nextjs";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  args: {
    children: "Hello World",
    as: "p",
    size: "base",
    weight: "normal",
    color: "default",
  },
  argTypes: {
    as: {
      control: "select",
      options: ["p", "span", "h1", "h2", "h3", "h4", "h5", "h6"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
    },
    weight: {
      control: "select",
      options: ["light", "normal", "medium", "semibold", "bold"],
    },
    color: {
      control: "select",
      options: ["default", "muted", "inverse"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {};
export const Heading: Story = { args: { as: "h1", size: "3xl", weight: "bold" } };
export const Muted: Story = { args: { color: "muted" } };
export const Inverse: Story = { args: { color: "inverse" } };
