import type { Meta, StoryObj } from "@storybook/react";
import Circle from "./Circle";

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: "Circle",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
    },
  },
};

export default meta;

export const BaseCircle = {
  args: {
    variant: "orange",
  },
};
export const GreenCircle = {
  args: {
    variant: "green",
  },
};
export const YellowCircle = {
  args: {
    variant: "yellow",
  },
};

type Story = StoryObj<typeof meta>;

export const GroupedCircle: Story = {
  render: () => (
    <div>
      <Circle variant={"orange"} />
      <Circle variant={"green"} />
      <Circle variant={"yellow"} />
    </div>
  ),
};
