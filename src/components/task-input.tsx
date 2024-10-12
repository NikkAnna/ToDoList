import { SyntheticEvent, useState } from 'react';

import { TextField, Button } from '@mui/material';

import { TTodo } from '../utils/types';

import styles from './styles.module.scss';

type TInputProps = {
  todos: TTodo[];
  setTodos: React.Dispatch<React.SetStateAction<TTodo[]>>;
};

export const TaskInput = (props: TInputProps) => {
  const [formValue, setFormValue] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const todo = {
      value: formValue,
      status: false,
      id: props.todos.length + 1
    };
    props.setTodos([todo, ...props.todos]);
    setFormValue('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField
        fullWidth
        id='outlined-basic'
        label='Что нужно сделать?'
        variant='outlined'
        onChange={handleInputChange}
        value={formValue}
        data-cy='input'
      />
      <Button
        variant='contained'
        type='submit'
        disabled={!formValue}
        data-cy='addButton'
      >
        Добавить
      </Button>
    </form>
  );
};
