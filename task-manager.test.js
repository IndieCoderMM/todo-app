/**
 * @jest-environment jsdom
 */

import { addNewTask, deleteTask } from './src/task-manager.js';
import updateTodoList from './src/update-list.js';

describe('Adding New Item', () => {
  test('list should contain one item after adding', () => {
    // Arrange
    const task = 'New task';
    const list = [];

    // Act
    addNewTask({ task, list });
    const { length } = list;

    // Assert
    expect(length).toBe(1);
  });
  test('One list item should be added to the document', () => {
    // Arrange
    document.body.innerHTML = "<ul id='container'></ul>";
    const container = document.querySelector('#container');
    const task = 'New task';
    const list = [];

    // Act
    addNewTask({ task, list });
    updateTodoList(list, container);
    const items = document.querySelectorAll('li');

    // Assert
    expect(items).toHaveLength(1);
  });
});

// delete test
describe('delete 1 item', () => {
  test('One list item should be deleted', () => {
    // Arrange
    const index = 0;
    const list = [{ index: 0 }];

    // Act
    deleteTask({ index, list });
    const { length } = list;

    // Assert
    expect(length).toBe(0);
  });
  test('one list item should be removed from the document', () => {
    // Arrange
    document.body.innerHTML = "<ul id='container'><li>Task 1</li></ul>";
    const container = document.querySelector('#container');
    const index = 0;
    const list = [{ index: 0 }];

    // Act
    deleteTask({ index, list });
    updateTodoList(list, container);
    const items = document.querySelectorAll('li');

    // Assert
    expect(items).toHaveLength(0);
  });
});
