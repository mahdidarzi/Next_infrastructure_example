import type { Meta, StoryObj } from '@storybook/nextjs';
import { fn, userEvent, expect } from 'storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { label: 'Button', primary: true },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button', { name: 'Button' });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};
