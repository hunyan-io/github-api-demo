import type { Meta, StoryObj } from "@storybook/react";

import Galaxy from "./Galaxy";

const meta: Meta<typeof Galaxy> = {
  title: "UI/Galaxy",
  component: Galaxy,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Galaxy>;

export const Default: Story = {};
