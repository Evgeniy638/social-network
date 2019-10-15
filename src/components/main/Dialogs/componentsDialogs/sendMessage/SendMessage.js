import React from "react";
import s from "./styleSendMessage.module.css"
import { Field, reduxForm, reset } from 'redux-form'
import { minLengthCreator, maxLengthCreator } from "../../../../../assets/validators/validators";
import { DialogTextarea } from "../../../../../assets/components/FormsControls/FormsControls";

const minLength1 = minLengthCreator(1)
const maxLength300 = maxLengthCreator(300)

const SendMessage = (props) => {
     if (props.isDeleteThisProfile) return (
          <div className={s.errorMessage}>
               <span>
                    Профиль собеседника удалён
               </span>
          </div>
     )
     
     return (
          <form className={s.wrap} onSubmit={props.handleSubmit}>
               <div>
                    <Field
                         placeholder="введите сообщение"
                         name="textareaMessage"
                         component={DialogTextarea}
                         validate={[minLength1, maxLength300]}
                         isdeletethisprofile={props.isDeleteThisProfile.toString()}
                    />
               </div>
               <div>
                    <button>Отправить сообщение</button>
               </div>
          </form>
     )
}

const SendMessageReduxForm = reduxForm({
     form: 'SendMessage',
     onSubmitSuccess(result, dispatch){
          return dispatch(reset('SendMessage'))
     }
})(SendMessage)

export default SendMessageReduxForm;