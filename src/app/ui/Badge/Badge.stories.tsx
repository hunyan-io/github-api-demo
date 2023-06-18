import type { Meta, StoryObj } from "@storybook/react";

import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    children: "Badge",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const Indigo: Story = {
  args: {
    variant: "indigo",
    children: "Indigo",
  },
};

export const Yellow: Story = {
  args: {
    variant: "yellow",
    children: "Yellow",
  },
};

export const Pink: Story = {
  args: {
    variant: "pink",
    children: "Pink",
  },
};
