
const AddItem = (props) => {
    return (

            <div>
                <label className={`add-card__label_style M-label  ${props.class}`}> {props.text}</label> 
<<<<<<< HEAD
                <input  className={`add-card__input_style  M-input ${props.classInput}`} type={props.type} defaultValue={props.content} required/>
=======
                <input className={`add-card__input_style  M-input ${props.classInput}`} type={props.type} 
                defaultValue={props.content} 
                />
>>>>>>> ae872aa255055bc2360838af755cc6422e44795a
            </div>
       
    );
};

export default AddItem;
