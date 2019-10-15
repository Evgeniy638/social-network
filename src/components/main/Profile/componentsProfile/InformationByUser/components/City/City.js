import React, { useRef } from "react"
import InputEdit from "../../../../../../../assets/components/InputEdit/InputEdit";

const City = (props) => {

     const textInputCity = useRef();

     return(
          <InputEdit
               additionalText = {"Город: "}
               value = {props.city}
               userId = {props.userId} 
               textInput = {textInputCity} 
               apiSaveNewValue = {props.saveNewCity}
               id = {props.match.params.id}
          />
     )
}

export default City