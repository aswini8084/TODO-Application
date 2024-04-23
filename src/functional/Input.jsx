import React, { useEffect, useState } from 'react'

export default function Input(props) {
    let [todo, setTodo] = useState('');
    let [error, setError] = useState(false);

    const inputChange = (event) => {

        setTodo(event.target.value);

        if (event.target.value.length > 0) {
            setError(false)
        }
        else {
            setError(true);
        }

    }
    const submit = (event) => {
        event.preventDefault();

        if (todo.length > 0) {
            if(props.editData.index !== ''){
                props.updateTodo(props.editData.index, todo)
            }
            else{
                props.addTodo(todo);
            }
           
        }
        else {
            setError(true)
        }


        setTodo(' ')

    }
    useEffect(() => {
        setTodo(props.editData.value)
    }, [props.editData.value])
    return (
        <form className="row " onSubmit={submit}>
            <div className="col-10">

                <input type="text" clasName="form-control" placeholder='Enter Todo' value={todo} onChange={inputChange} />

                {
                    error && <p className="text-danger">please enter todo</p>
                }

            </div>

            <div className="col-2">
                <button type="submit" className="btn btn-primary mb-3">
                    {
                        props.editData.index !== '' ? "update" : "Add"
                    }
                </button>
            </div>
        </form>
    )
}
