import React, { useState, useRef, useEffect } from 'react';
import './addCard.css';
import AddItem from './file/AddItem';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import Checked from '../checked/Checked';

const AddCard = () => {
    const [inpValsArr,setInpValsArr] = useState({})
    const [file, setFile] = useState();
    const [option1,setOption1] = useState("");
    const [option2,setOption2] = useState("");
    const [option3,setOption3] = useState("");
    const [job, setJob] = useState();
    const [time, setTime] = useState();
    const [date, setdate] = useState();
    const [link, setLink] = useState();
    const [name, setname] = useState();
    const [surname, setSurname] = useState();
    const [phone, setphone] = useState();
    const [postTitle, setPostTitle] = useState();
    const [postDesc, setPostDesc] = useState();
    const [textArea, setTextArea] = useState();
    const [category,setCategory] = useState();
    const [subCategory,setSubCategory] = useState();
    const [formCheck,setFormCheck] = useState(false);
    const [count,setCount] = useState(1);
    let arr = [];
    let newDate = null
    const [checkBall,setCheckball] = useState(true)
   

    const handleSubmit = (e) => {
        e.preventDefault();
        setname("")
        setJob("")
        setTime("")
        setdate("")
        setLink("")
        setname("")
        setSurname("")
        setphone("")
        setPostTitle("")
        setPostDesc("")
        setTextArea("")
        setCategory("")
        setSubCategory("")
        if(time != undefined && job != undefined && date != undefined && link != undefined && name != undefined && surname != undefined && phone != undefined && postTitle != undefined && postDesc != undefined && file != undefined && textArea != undefined && subCategory != undefined && category != undefined){
            newDate =  date.split('-')[2] + '/' + date.split('-')[1] + '/' + date.split('-')[0]
            let formdata = new FormData()
            formdata.append("file",file)
            formdata.append("user_job",job)
            formdata.append("date",`${newDate} ${time}`)
            formdata.append("link",link)
            formdata.append("first_name",name)
            formdata.append("last_name",surname)
            formdata.append("contact",phone)
            formdata.append("title",postTitle)
            formdata.append("short_description",postDesc)
            formdata.append("watch_type",checkBall ? "ON" : "OFF")
            formdata.append("category",category)
            formdata.append("subcategory",subCategory)
            formdata.append("description",textArea)
            PostRequest();
            async function  PostRequest(){
                const response = await fetch("https://mok2-pressa.herokuapp.com/ad",{
                    method: "POST",
                    body: formdata
                })
            }
            console.log(formdata);
            
           
        }
        e.target.reset()
    }

function SelectHandler(e){
    setCategory(e.target.value)
    if(e.target.value == "Biznes"){
        setOption1("Marketing")
        setOption2("Boshqaruv")
        setOption3("Savdoni boshqarish")
    }
    if(e.target.value == "Ta'lim"){
        setOption1("Oliy Ta'lim")
        setOption2("Xususiy Ta'lim")
        setOption3("Oliy va o'rta maxsus Ta'lim")
    }
    if(e.target.value == "IT"){
        setOption1("Frontend")
        setOption2("Backend")
        setOption3("Dizayn")
    }
}


    
    return (
        <div className='add-card'>
            <div className='container'>
                <h3>E’lon berish</h3>
                <form onSubmit={handleSubmit}>
                    <div className='ro1'>
                        <div className=' navigate-div'>
                            <select onChange={SelectHandler}  className='add-card__input_style  M-input'>
                                <option selected hidden disabled>KATEGORIYANI TANLANG</option>
                                <option>IT</option>
                                <option>Biznes</option>
                                <option>Ta'lim</option>
                            </select>
                            <select onChange={(e)=> setSubCategory(e.target.value)} className='add-card__input_style  M-input'>
                            <option selected hidden disabled>SUB KATEGORIYANI TANLANG</option>
                                <option>{option1}</option>
                                <option>{option2}</option>
                                <option>{option3}</option>
                            </select>
                        </div>
                        <div className='row time-div '>
                                
                            <AddItem id="date" date={date} setdate={setdate}  class='S-label' classInput='S-input' text='bolib o’tadigan sanani kiriting' type='date' content='30.01.2022' />
                            <AddItem id="time" time={time} setTime={setTime} classInput='S-input'  text='bolib o’tadigan soatni kiriting' type='time' content='11:00' />    
                        </div>
                        <div className='post-input-wrap'>
                            <div className='post-input-wrap-link'>
                                Tadbir turi
                                <div className='post-input-format--wrap'>
                                    <Checked  setCheckball={setCheckball} checkBall={checkBall}/>
                                    <div className='post-input-format'>
                                        <span className='post-input-format-text'>Online</span>
                                        <span className='post-input-format-text'>Offline</span>
                                    </div>
                                </div>
                            </div>
                            <AddItem id="link" link={link} setLink={setLink} classInput='M-input' type='text' text='Link kriting' content='https://www.com.ges' />

                        </div>
                        <div>
                            <h4>Organizator</h4>
                            <div className='row info-Divrow '>
                                <AddItem name={name} id="name"  setname={setname} classInput='L-input' text='Ism'  type='text' content='Ism' />
                                <AddItem surname={surname} id="last-name"  setSurname={setSurname} classInput='L-input' class='S-label ' type='text' text='Familya' content='Familya' />
                            </div>
                            <div className='post-inputs-wraps'>
                                <AddItem phone={phone} id="phone" phone={998}  setphone={setphone} classInput='L-input' text='Telefon nomer' type='number'  content="998" />
                                <AddItem job={job} id="job"  setJob={setJob} classInput='L-input' text='Mutaxasisligi' type='text'  content='fermer'/>
                            </div>
                                
                            
                        </div>
                        <div>
                            <h3> Post</h3>
                            <AddItem postTitle={postTitle} id="title"  setPostTitle={setPostTitle} classInput='post-input' text='Sarlavhani kiriting' type='text' content='Sarlovha' />
                            <AddItem postDesc={postDesc} id="desc"  setPostDesc={setPostDesc} classInput='post-input' text='Qisqacha izohni kiriting' type='text' content='Description' />
                            <AddItem id="file" setFile={setFile}  classInput='file-inp' type="file"/>
                            <label id="file" htmlFor='file' >
                                <div className='upload-img'> 
                                <FaCloudUploadAlt/> Upload img </div>
                            </label>
                        </div>
                    </div>
                    <div>
                        <h4>Mavzu matni</h4>
                        <textarea value={textArea} onChange={(e)=> setTextArea(e.target.value)} required className='textarea' type='textaerea' > </textarea>
                        <div>
                        <button  type='button' className='button delete-btn ' > Bekor qilish </button>
                        <button type='sumbit' className='button submit-btn'>E'lon berish </button> 
                        </div>
                    
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddCard;
