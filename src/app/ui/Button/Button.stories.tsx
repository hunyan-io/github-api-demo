import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";
import SearchIcon from "../Icon/SearchIcon";
import ArrowDownIcon from "../Icon/ArrowDownIcon";
import GithubIcon from "../Icon/GithubIcon";
import StarIcon from "../Icon/StarIcon";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
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
type Story = StoryObj<typeof Button>;

export const Indigo: Story = {
  args: {
    colorVariant: "indigo",
    children: "Button",
  },
};

export const Github: Story = {
  args: {
    colorVariant: "github",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    sizeVariant: "lg",
    children: "Large button",
  },
};

export const Small: Story = {
  args: {
    sizeVariant: "sm",
    children: "Small button",
  },
};

export const WithIcon: Story = {
  args: {
    icon: <GithubIcon />,
    children: "Sign in with GitHub",
  },
};
