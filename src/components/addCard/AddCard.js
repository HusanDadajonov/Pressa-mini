import React, { useState, useRef } from 'react';
import './addCard.css';
import AddItem from './file/AddItem';
import { FaCloudUploadAlt } from 'react-icons/fa';
import apiCalls from '../../config/api';
import { useNavigate, useParams } from 'react-router-dom';
import Checked from '../checked/Checked';

let token = '555'
const AddCard = () => {
    const [checkbox, setCheckbox] = useState(false)
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [route, setRoute] = useState();
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

    let navigate = useNavigate();
    const HandleSubmit = (e) => {
        e.preventDefault();
        const newObj = {
            //   title: messege,
            duration: 0,

            active: true
        }
        console.log('Blog qo`shildi');
        console.log(newObj);

        // postni serverga jo`natish
        fetch('https://mok2-pressa.herokuapp.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newObj)
        }).then(async response => {
            // imgni jo`natish
            var postId = await response.json()
            var myHeaders = { 'token': token };
            console.log(myHeaders)

            var formData = new FormData()
            formData.append("postId", postId.id);
            formData.append("postCover", file)
            console.log(file);

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formData,
                redirect: 'follow',
            };
            console.log(formData)

            fetch('https://mok2-pressa.herokuapp.com/', requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                })
                .catch(error => console.log('error', error));
        }
        )

        navigate('/');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='add-card'>
            <div className='container'>
                <h3>E’lon berish</h3>
                <form>
                    <div className=' navigate-div'>
                        <AddItem class='' text='Yonalishni belgilang '
                            type='text' value={route}
                            onChange={e => setRoute(e.target.value)}
                            content='Information technologies' />
                        <AddItem classInput='M-input'
                            text='Ichki yonalish' type='text'
                            content='Java developer'
                            value={job}
                            onChange={(e) => { setJob(e.target.value) }}
                        />
                    </div>
                    <div className='row time-div '>
                        <AddItem class='S-label'
                            classInput='S-input' text='bolib o’tadigan sanani kiriting' type='text'
                            content='30.01.2022'
                            value={date}
                            onChange={e => setdate(e.target.value)}
                        />
                        <AddItem
                            classInput='S-input'
                            text='bolib o’tadigan soatni kiriting'
                            type='text' content='11:00'
                            value={time}
                            onChange={e => setTime(e.target.value)}
                        />
                    </div>
                    <div className='row check-div'>
                        <div className='checkbox1'>
                            <span className='add-card__label_style S-label'>tadbir turi</span>
                            <Checked check={setCheckbox} />
                            <span className='add-card__checkbox check-box-div'>
                                <span className=' check-box offline'>Offline</span>
                                <span className='check-box online'>Online </span>
                            </span>
                        </div>
                        <AddItem
                            classInput='Link-input'
                            text='Link kriting'
                            content='https://www.com.ges'
                            value={link}
                            onChange={e => setLink(e.target.value)}
                        />
                    </div>
                    <div>
                        <h4>Organizator</h4>
                        <div className='row info-Divrow '>
                            <AddItem value={name} onChange={e => setname(e.target.value)} classInput='L-input' text='Ism' content='Ism' />
                            <AddItem classInput='L-input' class='S-label '
                                value={surname} onChange={e => setSurname(e.target.value)} text='Familya' content='Familya' />
                        </div>
                        <AddItem
                            classInput='L-input'
                            text='telefon nomer'
                            type='number'
                            content='+9989212345678'
                            value={phone}
                            onChange={e => setphone(e.target.value)}
                        />
                    </div>
                    <div>
                        <h3> Post</h3>
                        <AddItem
                            value={postTitle}
                            classInput='post-input'
                            text='Sarlavhani kriting'
                            content='Sarlovha'
                            onChange={(e => setPostTitle(e.target.value))}
                        />
                        <AddItem
                            value={postDesc}
                            classInput='post-input'
                            text='Description'
                            content='Description'
                            onChange={(e => setPostDesc(e.target.value))}
                        />
                        <label htmlFor='file' >
                            <div className='upload-img'>
                                <FaCloudUploadAlt /> Upload img </div>
                            <input style={{
                                display: 'none'
                            }} type='file' id='file' accept='.png, .JPG, .jpeg'
                                onChange={(e) => { setFile(e.target.files[0]) }}
                            />
                            <span>{file ? file.name : ''}</span>
                        </label>
                    </div>
                </form>
                <div>
                    <h4>Mavzu matni</h4>
                    <textarea className='textarea' type='textarea' value={textArea}
                        onChange={(e) => { setTextArea(e.target.value) }}
                    > </textarea>
                    <div>
                        <button onClick={() => { navigate('/') }} type='button' className='button delete-btn ' > Bekor qilish </button>
                        <button onSubmit={handleSubmit} type='button' className='button submit-btn'>E'lon berish </button>
                    </div>

                </div>


            </div>
        </div>

    );
};

export default AddCard;
