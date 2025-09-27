
import type { Meta, StoryObj } from '@storybook/nextjs';
import { fn, userEvent, expect } from 'storybook/test';
import { Button, ButtonProps } from './';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    isLoading: false,
    disabled: false,
    onClick: fn(), // Mocked click
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    isLoading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// ==================== Stories ====================

// Primary Button
export const Primary: Story = {
  args: { variant: 'primary', children: 'Primary Button' },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button', { name: 'Primary Button' });

    if (!button.hasAttribute('disabled')) {
      await userEvent.click(button);
      await expect(args.onClick).toHaveBeenCalled();
    } else {
      await expect(args.onClick).not.toHaveBeenCalled();
    }
  },
};

// Secondary Button
export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary Button' },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button', { name: 'Secondary Button' });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

// Danger Button
export const Danger: Story = {
  args: { variant: 'danger', children: 'Danger Button' },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button', { name: 'Danger Button' });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

// Disabled Button
export const Disabled: Story = {
  args: { children: 'Disabled Button', disabled: true },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button', { name: 'Disabled Button' });
    await expect(button).toBeDisabled();
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

// Loading Button
export const Loading: Story = {
  args: { children: 'Loading Button', isLoading: true },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button', { name: 'Loading...' });
    await expect(button).toBeDisabled();
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

// Sizes
export const Small: Story = { args: { size: 'sm', children: 'Small Button' } };
export const Medium: Story = { args: { size: 'md', children: 'Medium Button' } };
export const Large: Story = { args: { size: 'lg', children: 'Large Button' } };
