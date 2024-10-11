import { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

import { TTodo } from '../utils/types';
import { TaskCard } from './task-card';
import { NoTasksPage } from './no-tasks-page';

import styles from './styles.module.scss';

type TTaskList = {
  todos: TTodo[];
  setTodos: React.Dispatch<React.SetStateAction<TTodo[]>>;
};

export const TaskList = (props: TTaskList) => {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const activeTodos = props.todos.filter((todo) => todo.status === false);
  const doneTodos = props.todos.filter((todo) => todo.status === true);

  return (
    <section className={styles.taskList}>
      <Box sx={{ typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label='lab API tabs example'>
              <Tab
                label='Все задачи'
                value='1'
                sx={{ textTransform: 'none' }}
              />
              <Tab label='Активные' value='2' sx={{ textTransform: 'none' }} />
              <Tab
                label='Завершенные'
                value='3'
                sx={{ textTransform: 'none' }}
              />
            </TabList>
          </Box>
          <ul className={styles.list}>
            {value === '1' && (
              <li>
                {props.todos.map((todo, index) => (
                  <TaskCard
                    key={index}
                    todo={todo}
                    todos={props.todos}
                    setTodos={props.setTodos}
                  />
                ))}
                {!props.todos.length && <NoTasksPage />}
              </li>
            )}
            {value === '2' && (
              <li>
                {activeTodos.map((todo, index) => (
                  <TaskCard
                    key={index}
                    todo={todo}
                    todos={props.todos}
                    setTodos={props.setTodos}
                  />
                ))}
                {!activeTodos.length && <NoTasksPage />}
              </li>
            )}
            {value === '3' && (
              <li>
                {doneTodos.map((todo, index) => (
                  <TaskCard
                    key={index}
                    todo={todo}
                    todos={props.todos}
                    setTodos={props.setTodos}
                  />
                ))}
                {!doneTodos.length && <NoTasksPage />}
              </li>
            )}
          </ul>
        </TabContext>
      </Box>
    </section>
  );
};
