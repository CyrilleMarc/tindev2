import React from 'react'


function Button(props) {
  return (
    <div>
     <button onClick={props.function}>
              {props.children}
            </button>
    </div>
  )
}

export default Button