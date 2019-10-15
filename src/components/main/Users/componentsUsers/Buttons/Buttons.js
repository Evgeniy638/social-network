import React from "react"
import s from "./styleButtons.module.css"

const Buttons = (props) => {
     let buttonPages = []

     let currentPage=props.currentPage
     let numberOfPages=props.numberOfPages

     for (let i = 1; i <= numberOfPages; i++) buttonPages.push(i)

     return (
          <div className={s.wrap}>
               <span
                    onClick={() => { props.getNewUsers(currentPage - 1) }}
               > &lt; </span>

               {buttonPages.map(item => {
                    if (((item <= currentPage + 2) && (item >= currentPage - 2)) || (item === numberOfPages) || (item === 1)) {
                         return (
                              <span
                                   key={item}
                                   className={currentPage === item ? s.currentPage : null}
                                   onClick={() => { props.getNewUsers(item) }}
                              >{item}</span>
                         )
                    }else if ((item === currentPage + 3) || (item === currentPage - 3)){
                         return <span key={item}>...</span>
                    }else{
                         return null
                    }
               }
               )}

               <span
                    onClick={() => { props.getNewUsers(currentPage + 1) }}
               > &gt; </span>
          </div>
     )
}

export default Buttons