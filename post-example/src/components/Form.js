import React from 'react';

const Form = () => {
  const handleSubmit =(e) => {
    e.preventDefault()
  }
  const handleChange =() => {

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title"  onChange={handleChange}/>
        <input type="text" name="body"  onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form;
