import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";
import SearchIcon from "../Icon/SearchIcon";
import ArrowDownIcon from "../Icon/ArrowDownIcon";
import GithubIcon from "../Icon/GithubIcon";
import StarIcon from "../Icon/StarIcon";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Input",
  },
  argTypes: {
    icon: {
      options: ["SearchIcon", "ArrowDownIcon", "GithubIcon", "StarIcon"],
      mapping: {
        SearchIcon: <SearchIcon />,
        ArrowDownIcon: <ArrowDownIcon />,
        GithubIcon: <GithubIcon />,
        StarIcon: <StarIcon />,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    icon: <SearchIcon />,
    placeholder: "Search",
  },
};
