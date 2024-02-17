import React from 'react'

const UserInputFields = ({inputType, labelText, inputName}) => {
  return (
    <div className='flex flex-col '>
      <label>{labelText}</label>
        <input type={inputType} name={inputName} className='border-b-2 bg-lightGray focus:outline-none border-b-darkGray'/>
    </div>
  )
}

export default UserInputFields
