import { act, render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Counter from './Counter.svelte';

describe('Counter.svelte', () => {
  it('カウントボタンを表示', () => {
    render(Counter, { initial: 5 });
    expect(screen.queryByRole('button')).toBeInTheDocument();
    expect(screen.queryByText('5', { exact: false })).toBeInTheDocument();
  });

  it('カウンターをリセットする', async () => {
    const { component } = render(Counter, { initial: 5 });

    await act(() => {
      component.reset();
    });

    expect(screen.queryByText('0', { exact: false })).toBeInTheDocument();
  });
});
