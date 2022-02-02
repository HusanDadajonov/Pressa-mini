import React from 'react';


const AddItem = (props) => {
    return (
        <>
            <div>
                <label className={`add-card__label_style M-label  ${props.class}`}> {props.text}</label> 
                <input className={`add-card__input_style  M-input ${props.classInput}`} type={props.type} defaultValue={props.content} />
            </div>
        </>
    );
};

export default AddItem;
