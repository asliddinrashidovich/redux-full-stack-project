import React from 'react'

const Input = ({label, type, state, setState}) => {

  return (
    <div className="form-floating my-2">
      <input type={type} onChange={e => setState(e.target.value)} value={state}  className="form-control" id="floatingInput" placeholder={label}></input>
      <label for="floatingInput">{label}</label>
    </div>
  )
}

export default Input