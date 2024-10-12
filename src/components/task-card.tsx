import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { TTodo } from '../utils/types';
import { useState } from 'react';

import styles from './styles.module.scss';

type TCardProps = {
  todo: TTodo;
  todos: TTodo[];
  setTodos: React.Dispatch<React.SetStateAction<TTodo[]>>;
};

export const TaskCard = (props: TCardProps) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxClick = () => {
    setChecked(!checked);

    const updatedTodo = props.todos.filter((todo) => todo.id !== props.todo.id);
    const newTodo = {
      value: props.todo.value,
      status: !props.todo.status,
      id: props.todo.id
    };
    if (props.todo.status) {
      updatedTodo.unshift(newTodo);
      props.setTodos(updatedTodo);
    } else {
      updatedTodo.push(newTodo);
      props.setTodos(updatedTodo);
    }
  };

  const handleDelete = () => {
    const newTodoList = props.todos.filter((todo) => todo.id !== props.todo.id);
    props.setTodos(newTodoList);
  };

  return (
    <article className={styles.card}>
      <ListItem
        key={props.todo.id}
        secondaryAction={
          <IconButton edge='end' aria-label='delete' onClick={handleDelete}>
            <DeleteOutlinedIcon />
          </IconButton>
        }
        disablePadding
        data-cy='taskCard'
      >
        <ListItemButton role={undefined} dense>
          <ListItemIcon>
            <Checkbox
              edge='start'
              checked={props.todo.status}
              tabIndex={-1}
              disableRipple
              onClick={handleCheckboxClick}
              data-cy='checkbox'
            />
          </ListItemIcon>
          <ListItemText id={props.todo.value} primary={props.todo.value} />
        </ListItemButton>
      </ListItem>
    </article>
  );
};
