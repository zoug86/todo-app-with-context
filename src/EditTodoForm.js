import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { DispatchContext } from './contexts/todos.context';


function EditTodoForm({ id, task, toggleEditForm }) {
    const dispatch = useContext(DispatchContext);
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: "EDIT", newTask: value, id: id })
            toggleEditForm();
            reset();
        }}
            style={{ marginLeft: "1rem", wirth: "50%" }}

        >
            <TextField onChange={handleChange} margin="normal" value={value} fullWidth autoFocus />
        </form >
    )
}

export default EditTodoForm;