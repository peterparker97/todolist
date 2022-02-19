import React, { useState } from 'react'
import todoimg from "../images/todoimg.svg";

const Todo: React.FC = () => {
  const [inputData, setInputData] = useState('');
  const [Items, setItems] = useState(['']);
  const addItem: any = () => {
    if (!inputData) {

    } else {
      setItems([...Items, inputData]);
      setInputData('');
    }

  }
  const deleteItem = (id: any) => {
    const updatedItems = Items.filter((elem, ind) => {
      return ind !== id; 
    })
    setItems(updatedItems);
  }
  const removeAll = () => {
    setItems([]);
  }
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todoimg} alt="image" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>

          <div className="addItems">
            <input type="text" placeholder='✍ Add Items...'
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i className='fa fa-plus add-btn' title='Add Item' onClick={addItem}></i>
          </div>

          <div className="showItems">
            {
              Items.map((elem, ind) => {
                return (
                  <div className="eachItem" key={ind}>
                    <h3>{ elem }</h3>
                    <i className='far fa-trash-alt add-btn' title='Delete Item' onClick={() => deleteItem(ind)}></i>
                  </div>
                )
              })
            }

          </div>

          <div className="showItems">
            <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}><span> CHECK LIST </span></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo