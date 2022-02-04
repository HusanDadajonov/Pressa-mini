import React, {useState} from 'react';
import './addCard.css';
import AddItem from './file/AddItem';
import {FaCloudUploadAlt} from 'react-icons/fa';
import apiCalls from '../../config/api';
import { useNavigate, useParams } from 'react-router-dom';
import Checked from '../checked/Checked';

const AddCard = () => {
const [file, setFile] = useState(null);
const [message, setMessage] = useState('');
const [check,setCheck] = useState(false);
const [option1,setOption1] = useState("");
const [option2,setOption2] = useState("");
const [option3,setOption3] = useState("");
console.log(check);

function SelectHandler(e){
    if(e.target.value == "BIZNES"){
        setOption1("MARKETING")
        setOption2("BOSHQARUV")
        setOption3("SAVDONI BOSHQARISH")
    }
    if(e.target.value == "TIBBIYOT"){
        setOption1("LOR")
        setOption2("RENGEN")
        setOption3("JARROHLIK")
    }
    if(e.target.value == "TA'LIM"){
        setOption1("OLIY TA'LIM")
        setOption2("XUSUSIY TA'LIM")
        setOption3("OLIY VA O'RTA MAXSUS TA'LIM")
    }
    if(e.target.value == "IT"){
        setOption1("FRONTEND")
        setOption2("BACKEND")
        setOption3("DESIGN")
    }
}

function formHandler(e){
    e.preventDefault()
}

let navigate = useNavigate();

    return (
        <div className='add-card'>
            <div className='container'>
                <h3>E’lon berish</h3>
                <form onSubmit={formHandler}>
                    <div className='ro1'>
                        <div className=' navigate-div'>
                            <select onChange={SelectHandler} className='add-card__input_style  M-input'>
                                <option selected hidden disabled>KATEGORIYANI TANLANG</option>
                                <option>IT</option>
                                <option>BIZNES</option>
                                <option>TA'LIM</option>
                                <option>TIBBIYOT</option>
                            </select>
                            <select className='add-card__input_style  M-input'>
                            <option selected hidden disabled>SUB KATEGORIYANI TANLANG</option>
                                <option>{option1}</option>
                                <option>{option2}</option>
                                <option>{option3}</option>
                            </select>
                            {/* <AddItem class='' text='Yonalishni belgilang ' type='text' content='Information technologies' />
                            <AddItem classInput='M-input' text='Yonalishni belgilang ' type='text' content='Java developer' /> */}
                        </div>
                        <div className='row time-div '>
                                
                            <AddItem class='S-label' classInput='S-input' text='bolib o’tadigan sanani kiriting' type='date' content='30.01.2022' />
                            <AddItem classInput='S-input'  text='bolib o’tadigan soatni kiriting' type='time' content='11:00' />
                        </div>
                        <div className='post-input-wrap'>
                            <div className='post-input-wrap-link'>
                                tadbir turi
                                <div className='post-input-format--wrap'>
                                    <Checked setCheck={setCheck}/>
                                    <div className='post-input-format'>
                                        <span className='post-input-format-text'>Online</span>
                                        <span className='post-input-format-text'>Offline</span>
                                    </div>
                                </div>
                            </div>
                            <AddItem classInput='M-input' text='Link kriting' content='https://www.com.ges' />

                        </div>
                        <div>
                            <h4>Organizator</h4>
                            <div className='row info-Divrow '>
                                <AddItem classInput='L-input' text='Ism' content='Ism' />
                                <AddItem classInput='L-input' class='S-label ' text='Familya' content='Familya' />
                            </div>
                            <div className='post-inputs-wraps'>
                                <AddItem classInput='L-input' text='telefon nomer' type='number'  content="998" />
                                <AddItem classInput='L-input' text='mutaxasisligi' type='text'  content='fermer'/>
                            </div>
                                
                            
                        </div>
                        <div>
                            <h3> Post</h3>
                            <AddItem classInput='post-input' text='Sarlavhani kriting' content='Sarlovha' />
                            <AddItem classInput='post-input' text='Description' content='Description' />
                            <label htmlFor='file' >
                                <div className='upload-img'> 
                                <FaCloudUploadAlt/> Upload img </div>
                                <input  style={{
                                    display: 'none'
                                    }} type='file' id='file' accept='.png, .JPG, .jpeg'
                                    onChange={(e) => {setFile(e.target.files[0]) }}      
                                />
                                <span>{file ? file.name : '' }</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <h4>Mavzu matni</h4>
                        <textarea required className='textarea' type='textaerea' > </textarea>
                        <div>
                        <button onClick={() => { navigate('/') }} type='button' className='button delete-btn ' > Bekor qilish </button>
                        <button type='sumbit' className='button submit-btn'>E'lon berish </button> 
                        </div>
                    
                    </div>
                </form>
                
            </div>
        </div>

    );
};

export default AddCard;
