import React, { useRef } from "react"
import InputEdit from "../../../../../../../assets/components/InputEdit/InputEdit";

const Name = (props) => {

     const textInputName = useRef();

     return(
          <InputEdit
               additionalText = {"Имя: "}
               value = {props.name}
               userId = {props.userId} 
               textInput = {textInputName} 
               apiSaveNewValue = {props.saveNewName}
               id={props.match.params.id}
          />
     )
}

export default Name