import { useRef } from "react";

const AddItem = (props) => {
    const clearVal = useRef()
    function inpuValHandler(e){
        if(e.target.id == "time")props.setTime(e.target.value);
        if(e.target.id == "date")props.setdate(e.target.value);
        if(e.target.id == "link")props.setLink(e.target.value);
        if(e.target.id == "name")props.setname(e.target.value);
        if(e.target.id == "last-name")props.setSurname(e.target.value);
        if(e.target.id == "phone")props.setphone(e.target.value);
        if(e.target.id == "job")props.setJob(e.target.value);
        if(e.target.id == "title")props.setPostTitle(e.target.value);
        if(e.target.id == "desc")props.setPostDesc(e.target.value);
        if(e.target.id == "file")props.setFile(e.target.files[0])
    }



    return (

            <div>
                <label className={`add-card__label_style M-label  ${props.class}`}> {props.text}</label> 
                <input ref={clearVal}  id={props.id} onChange={inpuValHandler}  className={`add-card__input_style  M-input ${props.classInput}`} type={props.type} defaultValue={props.phone} placeholder={props.content} required autoComplete="off" />
            </div>
       
    );
};

export default AddItem;
