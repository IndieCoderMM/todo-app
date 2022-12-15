/**
 * @jest-environment jsdom
 */

import { addNewTask, deleteTask, updateTask } from './src/task-manager.js';
import updateTodoList from './src/update-list.js';
import updateTodoStatus from './src/update-status.js';
import clearAllCompleted from './src/clear-all.js';


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

// Edit Function
describe('Editing Todo Items', () => {
  test('task description should be changed', () => {
    // Arrange
    const task = 'New Task';
    const index = 0;
    const list = [
      {
        index: 0,
        task: 'Old task',
      },
    ];

    // Act
    updateTask({ task, index, list });
    const updatedTask = list[0].task;

    // Assert
    expect(updatedTask).toBe('New Task');
  });

  test('task should be updated in document', () => {
    // Arrange
    document.body.innerHTML = "<ul id='container'></ul>";
    const container = document.querySelector('#container');
    const task = 'New Task';
    const index = 0;
    const list = [
      {
        index: 0,
        task: 'Old task',
      },
    ];

    // Act
    updateTask({ task, index, list });
    updateTodoList(list, container);
    const input = document.querySelector('.task-input');

    // Assert
    expect(input.value).toBe('New Task');
  });
});

//update function
describe('Update check box', () => {
  test('check box should be updated', () => {
 // Arrange
    const index = 0;
 const completed = true;
 const list = [{completed: false}];

// Act
updateTodoStatus({index,completed,list});
const updateCeckBox = list[0].completed;

// Assert
expect(updateCeckBox).toBe(true);
})

test('Check box should be checked in document', () => {
   // Arrange
  document.body.innerHTML = "<ul id='container'></ul>";
  const container = document.querySelector('#container');
  const index = 0;
  const completed = true;
  const list = [{completed: false}];
  
// Act
  updateTodoStatus({index,completed,list});
  updateTodoList(list, container);
  const input = document.querySelector('.todo-check');
  
// Assert
  expect(input.checked).toBe(true);
})
})

//Clear-all Function
describe('clear all completed item', () => {
  test('completed item should be deleted', () => {
    //Arrange
    const list = [{index:0, completed:true}];

    //Act
    clearAllCompleted(list);

    //Assert
    expect(list.length).toBe(0);

  })
  test('completed item should be deleted from document', () => {
    //Arrange
    document.body.innerHTML = "<ul id='container'></ul>";
    const container = document.querySelector('#container');
    const list = [{index:0, completed:true}, {index:1, completed:false}];

    //Act
    clearAllCompleted(list);
    updateTodoList(list, container);
    const items = document.querySelectorAll('li');

    //Assert
    expect(items.length).toBe(1);
  })
})
