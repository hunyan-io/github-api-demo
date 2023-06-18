import type { Meta, StoryObj } from "@storybook/react";

import RepositoryList from "./RepositoryList";

const meta: Meta<typeof RepositoryList> = {
  title: "UI/RepositoryList",
  component: RepositoryList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RepositoryList>;

export const Default: Story = {
  args: {
    list: [
      {
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
      {
        id: "2",
        name: "vue/core",
        descriptionHTML:
          "🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.",
        stars: 167472,
        isArchived: false,
        url: "#",
        isFork: false,
        isPrivate: false,
        language: {
          color: "#007acc",
          name: "TypeScript",
        },
        updatedAt: new Date("2021-09-27T14:37:05Z"),
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    list: [],
  },
};
