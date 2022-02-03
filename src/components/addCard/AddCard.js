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


let navigate = useNavigate();
// const HandleSubmit = (e) => {
//     e.preventDefault();
//     const newObj = {
//     //   title: messege,
//       duration: 0,
     
//       active: true
//     }
//     console.log('Blog qo`shildi');
//     console.log(newObj);

//     // postni serverga jo`natish
//     fetch('https://mok2-pressa.herokuapp.com/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newObj)
//     }).then(async response => {
//       // imgni jo`natish
//       var postId = await response.json()
//     //   var myHeaders = { 'token': token };  
//     //   console.log(myHeaders)

//       var formData = new FormData()
//       formData.append("postId", postId.id);
//       formData.append("postCover", file)
//       console.log(file);  
  
//       var requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: formData,
//       redirect: 'follow',
//     };
//     console.log(formData)

//   fetch('https://mok2-pressa.herokuapp.com/', requestOptions)
//   .then(response => response.json())
//   .then(result => {
//     console.log(result)
//   })
//   .catch(error => console.log('error', error));
// }
// )

//    navigate('/');
// }
    return (
        <div className='add-card'>
            <div className='container'>
                <h3>E’lon berish</h3>
                <div className='ro1'>
                    <div className=' navigate-div'>
                        <AddItem class='' text='Yonalishni belgilang ' type='text' content='Information technologies' />
                        <AddItem classInput='M-input' text='Yonalishni belgilang ' type='text' content='Java developer' />
                    </div>
                    <div className='row time-div '>
                        <AddItem class='S-label' classInput='S-input' text='bolib o’tadigan sanani kiriting' type='text' content='30.01.2022' />
                        <AddItem classInput='S-input' text='bolib o’tadigan soatni kiriting' type='text' content='11:00' />
                    </div>
                    <div>
                        tadbir turi
                        <Checked/>
                    </div>
                    <AddItem classInput='M-input' text='Link kriting' content='https://www.com.ges' />

                    <div>
                        <h4>Organizator</h4>
                        <div className='row info-Divrow '>
                          <AddItem classInput='L-input' text='Ism' content='Ism' />
                          <AddItem classInput='L-input' class='S-label ' text='Familya' content='Familya' />
                        </div>
                        <AddItem classInput='L-input' text='telefon nomer' type='number'  content='+9989212345678'/>
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
                    <textarea className='textarea' type='textaerea' > </textarea>
                    <div>
                      <button onClick={() => { navigate('/') }} type='button' className='button delete-btn ' > Bekor qilish </button>
                      <button type='button' className='button submit-btn'>E'lon berish </button> 
                    </div>
                   
                </div>


            </div>
        </div>

    );
};

export default AddCard;
