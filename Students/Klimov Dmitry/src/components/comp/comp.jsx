import './style.css';

import React from 'react';

function AddMessage() {
    const [value, setValue] = React.useState([
        {title: ''}
    ]);
    const onClickHandler =  () => {
        setValue(value.map(v => {
            v.title = "Нормально";
            console.log(v);
            return v;
        }))
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <button className="mt-5 p-4" onClick={onClickHandler}>Нажми</button>
            <h2 className="mt-3">{ value[0].title }</h2>
        </div>
    )
}

export default AddMessage