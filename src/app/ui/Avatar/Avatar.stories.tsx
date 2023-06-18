import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    src: "https://avatars.githubusercontent.com/u/40696130?v=4",
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Label",
    className: "text-white",
  },
};

export const WithBorder: Story = {
  args: {
    bordered: true,
  },
};
