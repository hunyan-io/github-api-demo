import type { Meta, StoryObj } from "@storybook/react";
import ArrowDownIcon from "./ArrowDownIcon";
import SearchIcon from "./SearchIcon";
import GithubIcon from "./GithubIcon";
import StarIcon from "./StarIcon";

const icons = [ArrowDownIcon, SearchIcon, GithubIcon, StarIcon];

const Icon = () => (
  <div className="flex flex-wrap gap-4 text-white text-lg">
    {icons.map((Icon, index) => (
      <div key={index} className="flex flex-col items-center gap-2 w-32">
        <Icon />
        <span className="text-sm">{Icon.name}</span>
      </div>
    ))}
  </div>
);

const meta: Meta<typeof Icon> = {
  title: "UI/Icon",
  component: Icon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};
