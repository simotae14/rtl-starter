import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';

import App from './App';

test('shows 6 products by default', async () => {
  render(<App />);
  // retrieve the 6 headings of the 6 products
  const headings = await screen.findAllByRole('heading');
  expect(headings).toHaveLength(6);
});

test('clicking on the button loads 6 more products', async () => {
  render(<App />);

  // retrieve button load more
  const button = await screen.findByRole('button', {
    name: /load more/i
  });

  await user.click(button);
  await waitFor(async () => {
    const headings = await screen.findAllByRole('heading');
    expect(headings).toHaveLength(12);
  });
});