import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('fetches and displays todos', async () => {
  render(<TodoList />);

  // Waiting for an element to appear after async data fetching
  const todoItem = await waitFor(() => screen.getByText('Learn React'));
  expect(todoItem).toBeInTheDocument();
});

test('adds a new todo', async () => {
  render(<TodoList />);
  
  // Simulate adding a new todo
  fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
    target: { value: 'New Todo' },
  });
  fireEvent.click(screen.getByText('Add Todo'));
  
  // Wait for the new todo to appear in the DOM
  await waitFor(() => {
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });
});
