import React, {useState} from "react";
import PropTypes from "prop-types";

const styles = {
    form: {
      marginLeft: '50px',
    }
  }



function AddTodo({onCreate}){
    const [value, setValue] = useState('') // изначальное состояние текстового поля пустая строка

    function submitHandler(event){
        event.preventDefault(); // отменяем стандартное поведение стр. чтобы страница не обноалялась
        console.log(3333)
  
        if(value.trim()){ //условие пустой строки, через trim - удаляем все пробеоми
          onCreate(value)
          setValue(" ")
        }
    }

    return(
        <form style={styles.form} onSubmit={submitHandler}> 
            <input value={value} onChange={event => setValue(event.target.value)}></input>
            <button> Add Todo </button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo