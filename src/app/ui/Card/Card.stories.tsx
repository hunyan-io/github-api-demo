import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";
import CardTitle from "./CardTitle";
import CardText from "./CardText";
import CardFooter from "./CardFooter";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <CardTitle>Card title</CardTitle>
        <CardText>Card text</CardText>
        <CardFooter>Card footer</CardFooter>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};
