import React, { Fragment, useState } from 'react';

// const state = {
//   contacts: [],
//   name: '',
// };

function App() {
  const [count, setCount] = useState([]);

  const handleAddContact = e => {
    console.log(e.target.value);
  };

  return (
    <Fragment>
      <p>{count}</p>
      <form>
        <input type="text" onChange={handleAddContact} />
        <button type="button" onClick={handleAddContact}>
          Добавить
        </button>
      </form>
      <span></span>
    </Fragment>
  );
}

export default App;
