import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

test('button has correct initial colour', () => {
  render(<App />);
  const buttonEl = screen.getByRole("button", { name: 'Change to Midnight Blue' } );
  expect(buttonEl).toHaveStyle({ backgroundColor: 'MediumVioletRed' })
});

test('button turns blue when clicked', () => {
  render(<App />)
  const buttonEl = screen.getByRole("button", { name: 'Change to Midnight Blue' } );
  fireEvent.click(buttonEl);
  expect(buttonEl).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  expect(buttonEl.textContent).toBe("Change to Medium Violet Red");
});

test('checkbox initially is unchecked', () => {
  render(<App />);
  const checkboxEl = screen.getByRole("checkbox");
  expect(checkboxEl).not.toBeChecked();
});

test('toggling checkbox disables button', () => {
  render(<App />);
  const checkboxEl = screen.getByRole("checkbox", { name: 'Disable button'});
  const buttonEl = screen.getByRole("button", { name: 'Change to Midnight Blue' } );
  fireEvent.click(checkboxEl)
  expect(buttonEl).toBeDisabled();
  fireEvent.click(checkboxEl)
  expect(buttonEl).toBeEnabled();
});
test('toggling checkbox changes button colour to grey', () => {
  render(<App />);
  const checkboxEl = screen.getByRole("checkbox", { name: 'Disable button'});
  const buttonEl = screen.getByRole("button", { name: 'Change to Midnight Blue' } );
  fireEvent.click(checkboxEl)
  expect(buttonEl).toHaveStyle({ backgroundColor: 'grey' });
  fireEvent.click(checkboxEl)
  expect(buttonEl).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

describe('replacing camel case with spaces', () => {
  test('works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  })
  test('works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  })
  test('works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  })
})
