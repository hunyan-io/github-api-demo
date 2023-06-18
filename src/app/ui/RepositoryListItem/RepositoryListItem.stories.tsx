import type { Meta, StoryObj } from "@storybook/react";

import RepositoryListItem from "./RepositoryListItem";

const meta: Meta<typeof RepositoryListItem> = {
  title: "UI/RepositoryListItem",
  component: RepositoryListItem,
  tags: ["autodocs"],
  args: {
    repository: {
      id: "1",
      name: "react",
      descriptionHTML:
        "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
      stars: 167472,
      isArchived: false,
      url: "#",
      isFork: true,
      isPrivate: false,
      language: {
        color: "#f1e05a",
        name: "JavaScript",
      },
      updatedAt: new Date("2021-09-27T14:37:05Z"),
    },
  },
};

export default meta;
type Story = StoryObj<typeof RepositoryListItem>;

export const Default: Story = {};
