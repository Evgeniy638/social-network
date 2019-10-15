import React, { useRef } from "react"
import InputEdit from "../../../../../../../assets/components/InputEdit/InputEdit";

const Country = (props) => {

     const textInputCountry = useRef();

     return(
          <InputEdit
               additionalText = {"Страна: "}
               value = {props.country}
               userId = {props.userId} 
               textInput = {textInputCountry} 
               apiSaveNewValue = {props.saveNewCountry}
               id={props.match.params.id}
          />
     )
}

export default Country