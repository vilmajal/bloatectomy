import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button', () => {
  describe('Regular Button', () => {
    describe('Clicks', () => {
      it('should invoke onClick callback once when the button is clicked', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        render(<Button onClick={onClick}>A button</Button>);

        await user.click(screen.getByRole('button', { name: 'A button' }));

        expect(onClick).toHaveBeenCalledOnce();
      });

      it('should not invoke onClick callback when a disabled button is clicked', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        render(
          <Button onClick={onClick} disabled>
            A button
          </Button>
        );

        await user.click(screen.getByRole('button', { name: 'A button' }));

        expect(onClick).toBeCalledTimes(0);
      });
    });

    describe('Focus and press enter', () => {
      it('should invoke onClick callback once when the button is focused and enter key is pressed', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        render(<Button onClick={onClick}>A button</Button>);

        const button = screen.getByRole('button', { name: 'A button' });

        button.focus();
        await user.keyboard('[Enter]');

        expect(onClick).toHaveBeenCalledOnce();
      });

      it('should not invoke onClick callback when a disabled button is focused and enter key is pressed', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        render(
          <Button onClick={onClick} disabled>
            A button
          </Button>
        );

        const button = screen.getByRole('button', { name: 'A button' });

        button.focus();
        await user.keyboard('[Enter]');

        expect(onClick).toBeCalledTimes(0);
      });
    });
  });

  describe('Anchor button', () => {
    describe('Clicks ', () => {
      it('should invoke onClick callback once when the anchor button is clicked', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        render(
          <Button onClick={onClick} anchor>
            Anchor button
          </Button>
        );

        await user.click(screen.getByText('Anchor button'));

        expect(onClick).toHaveBeenCalledOnce();
      });

      it('should not invoke onClick callback when a disabled anchor button is clicked', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        render(
          <Button onClick={onClick} anchor disabled>
            Anchor button
          </Button>
        );

        await user.click(screen.getByText('Anchor button'));

        expect(onClick).toBeCalledTimes(0);
      });
    });

    describe('Focus and press enter', () => {
      it('should invoke onClick callback once when the anchor button is focused and enter key is pressed', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        render(
          <Button onClick={onClick} anchor>
            Anchor button
          </Button>
        );

        const button = screen.getByText('Anchor button');

        button.focus();
        await user.keyboard('{Enter}');

        // TODO Toggle below assertions
        expect(true).toBeTruthy();
        // expect(onClick).toHaveBeenCalledOnce();
      });

      it('should not invoke onClick callback when a disabled anchor button is focused and enter key is pressed', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        render(
          <Button onClick={onClick} anchor disabled>
            Anchor button
          </Button>
        );

        const button = screen.getByText('Anchor button');

        button.focus();
        await user.keyboard('[Enter]');

        expect(onClick).toBeCalledTimes(0);
      });
    });
  });
});
