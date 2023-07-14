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

// 以下のコメントがドキュメントに含まれる
/**
 * オレンジ色
 */
export const BaseCircle = {
  args: {
    variant: "orange",
  },
};

/**
 * 緑色
 */
export const GreenCircle = {
  args: {
    variant: "green",
  },
};

/**
 * 黄色
 */
export const YellowCircle = {
  args: {
    variant: "yellow",
  },
};

type Story = StoryObj<typeof meta>;
/**
 * 3色
 */
export const GroupedCircle: Story = {
  render: () => (
    <div>
      <Circle variant={"orange"} />
      <Circle variant={"green"} />
      <Circle variant={"yellow"} />
    </div>
  ),
};
