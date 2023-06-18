import type { Meta, StoryObj } from "@storybook/react";

import RepositoryListSkeleton from "./RepositoryListSkeleton";

const meta: Meta<typeof RepositoryListSkeleton> = {
  title: "UI/RepositoryListSkeleton",
  component: RepositoryListSkeleton,
  tags: ["autodocs"],
  args: {
    count: 2,
  },
};

export default meta;
type Story = StoryObj<typeof RepositoryListSkeleton>;

export const Default: Story = {};
