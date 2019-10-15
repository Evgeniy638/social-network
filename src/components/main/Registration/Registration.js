import React from "react"
import s from "./styleRegistration.module.css"
import { Field, reduxForm, reset } from 'redux-form';
import { minLengthCreator, maxLengthCreator } from "../../../assets/validators/validators";
import { LoginInput } from "../../../assets/components/FormsControls/FormsControls";
import styleFormsControls from "../../../assets/components/FormsControls/styleFormsControls.module.css"

const minLenght6 = minLengthCreator(6)
const maxLength50 = maxLengthCreator(50)
const minLength1 = minLengthCreator(1)

const Registration = props => {
     return(
          <div className={s.wrap}>
               <form onSubmit={props.handleSubmit}>
                    <div>
                         Логин:
                         <Field
                              name="login"
                              component={LoginInput}
                              validate={[minLenght6, maxLength50]}
                         />
                    </div>
                    <div>
                         Пароль:
                         <Field
                              name="password"
                              component={LoginInput}
                              validate={[minLenght6, maxLength50]}
                              type = "password"
                         />
                    </div>
                    <div>
                         Никнейм:
                         <Field
                              name="userId"
                              component={LoginInput}
                              validate={[minLenght6, maxLength50]}
                         />
                    </div>
                    <div>
                         email:
                         <Field
                              name="email"
                              component={LoginInput}
                              validate={[minLenght6, maxLength50]}
                         />
                    </div>
                    <div>
                         Телефон:
                         <Field
                              name="phone"
                              component={LoginInput}
                              validate={[minLenght6, maxLength50]}
                         />
                    </div>
                    <div>
                         Имя:
                         <Field
                              name="name"
                              component={LoginInput}
                              validate={[minLength1, maxLength50]}
                         />
                    </div>
                    <div>
                         Фамилия:
                         <Field
                              name="surname"
                              component={LoginInput}
                              validate={[minLength1, maxLength50]}
                         />
                    </div>
                    <div>
                         Страна:
                         <Field
                              name="country"
                              component={LoginInput}
                              validate={[minLength1, maxLength50]}
                         />
                    </div>
                    <div>
                         Город:
                         <Field
                              name="city"
                              component={LoginInput}
                              validate={[minLength1, maxLength50]}
                         />
                    </div>
                    {props.error && 
                         <div className={`${styleFormsControls.errorMessage} ${s.error}`}>
                              {props.error}
                         </div>
                    }
                    <button>зарегестрироваться</button>
               </form>
          </div>
     )
}

const RegistrationReduxForm = reduxForm({
     form: 'Registration',
     onSubmitSuccess(result, dispatch) {
          dispatch(reset('ordersTradesSearchForm'))
     }
})(Registration);

export default RegistrationReduxForm