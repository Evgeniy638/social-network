import React from "react";
import s from "./styleNewPost.module.css"
import { Field, reduxForm, reset } from 'redux-form'
import { minLengthCreator, maxLengthCreator } from "../../../../../assets/validators/validators";
import { ProfileTextarea } from "../../../../../assets/components/FormsControls/FormsControls";

const minLength1 = minLengthCreator(1)
const maxLength300 = maxLengthCreator(300)

const NewPost = (props) => {
     if (props.userId !== props.idUrl) return <></>

          return (
               <form className={s.wrap} onSubmit={props.handleSubmit}>
                    <div>
                         <Field
                              name="textNewPost" 
                              component={ProfileTextarea}
                              placeholder="введите пост"
                              validate={[minLength1, maxLength300]}
                         />
                    </div>
                    <div><button>Опубликовать</button></div>
               </form>
          )
}

const NewPostReduxForm = reduxForm({
     form: 'NewPost',
     onSubmitSuccess(result, dispatch){
          return dispatch(reset('NewPost'))
     }
})(NewPost)


export default NewPostReduxForm;