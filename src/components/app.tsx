import { useState } from 'react';

import { TaskInput } from './task-input';
import { TTodo } from '../utils/types';
import { TaskList } from './task-list';

import styles from './styles.module.scss';

const App = () => {
  const [todos, setTodos] = useState<TTodo[]>([]);

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>My todos</h1>
      <TaskInput setTodos={setTodos} todos={todos} />
      <TaskList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
