import React from "react"
import s from "./styleLogin.module.css"
import { Field, reduxForm, reset } from 'redux-form';
import { minLengthCreator, maxLengthCreator } from "../../../assets/validators/validators";
import { LoginInput } from "../../../assets/components/FormsControls/FormsControls";
import { NavLink } from "react-router-dom"
import styleFormsControls from "../../../assets/components/FormsControls/styleFormsControls.module.css"

const minLenght6 = minLengthCreator(3)//временно 3 из-за тестового логина и пароля
const maxLength50 = maxLengthCreator(50)

const Login = (props) => {
     return (
          <div className={s.wrap}>
               <form onSubmit={props.handleSubmit}>
                    <div className={s.item}>
                         Логин:
                         <Field
                              name="login"
                              component={LoginInput}
                              validate={[minLenght6, maxLength50]}
                         />
                    </div>
                    <div className={s.item}>
                         Пароль:
                         <Field
                              name="password"
                              component={LoginInput}
                              validate={[minLenght6, maxLength50]}
                              type="password"
                         />
                    </div>

                    {props.error &&
                         <div className={`${styleFormsControls.errorMessage} ${s.error}`}>
                              <span>
                                   {props.error}
                              </span>
                         </div>
                    }

                    <button>Войти</button>
               </form>

               <NavLink 
                    to={"/registration"} 
                    className={s.registration}
               ><button>Зарегестрироваться</button></NavLink>
          </div>
     )
}

const LoginReduxForm = reduxForm({
     form: 'Login',
     onSubmitSuccess(result, dispatch) {
          dispatch(reset('ordersTradesSearchForm'))
     }
})(Login);

export default LoginReduxForm