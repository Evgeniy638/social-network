import React, { useRef } from "react"
import InputEdit from "../../../../../../../assets/components/InputEdit/InputEdit";

const Surname = (props) => {

     const textInputSurname = useRef();

     return(
          <InputEdit
               additionalText = {"Фамилия: "}
               value = {props.surname}
               userId = {props.userId} 
               textInput = {textInputSurname} 
               apiSaveNewValue = {props.saveNewSurname}
               id={props.match.params.id}
          />
     )
}

export default Surname