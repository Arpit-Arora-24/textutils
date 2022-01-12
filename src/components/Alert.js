import React from "react";

export default function Alert(props) {
    const Capitalize=(word)=>{
        let newWord= word.toLowerCase()
        return newWord.charAt(0).toUpperCase() + newWord.slice(1)
    }
  return (
    <div style={{height:'65px'}}>
     { props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{Capitalize(props.alert.type)}: </strong> {props.alert.msg}
        {/* <strong>{props.alert.type}</strong> {props.alert.msg} */}
        
      </div>
    )}
    </div>
    
  );
}
