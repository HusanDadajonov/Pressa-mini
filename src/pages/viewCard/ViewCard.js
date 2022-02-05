import React, { useEffect, useState } from 'react';
import './viewCard.css';
import ViewImg from '../../assets/info.jpg'
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import OnlineImg from "../../assets/online.png"
import ViewCardItem from './ViewCardItem/ViewCardItem';


const ViewCard =  () => {
    let filtred = [];
    const [infoCard, setInfoCard] = useState({})
    const [error, setError] = useState('');
    const { id } = useParams();
    const [similar, setSimilar] = useState([]);

    const [user,setUser] = useState([])
    const [allUser,setAlluser] = useState([])
    const [bool,setBool] = useState(false)
    const [activeChange,setActiveChange] = useState(2)
    const [page,setPage] = useState(1);
    const [limit,setLimit] = useState(2);
    
    useEffect(async ()=>{
        const respnose = await fetch(`https://mok2-pressa.herokuapp.com/ad/active/${id}`)
        const obj = await respnose.json();
        setUser(obj)
    },[id])

    useEffect(async ()=> {
        const respnose = await fetch(`https://mok2-pressa.herokuapp.com/ad?page=${page}&category=${user.length != 0 ? user.category : ""}&limit=${limit}`)
        const obj = await respnose.json();
        setAlluser(obj)
    },[user,page])

    if(user.length != 0)filtred = allUser.filter(item => item.id != user.id);
    if(filtred.length == 0 && page != 1)setPage(1);
    if(page == 1 && limit != 3)setLimit(3)
    if(page != 1 && limit != 2)setLimit(2)
    return (
        <div className='container'>
            <div className='card-view'>
                <h2 className='card-view__date'>
                    
                    {user.date}
                </h2>
                <h4 className='card-view__name'>{user.length != 0 ? `${user.user.first_name} ${user.user.last_name}` : ""}</h4>
                <span className='card-view__job'>{user.length != 0 ? `${user.user.user_job}` : ""}</span>

                <h3 className='card-view__title'>{user.length != 0 ? `${user.title}` : ""}</h3>
                <p className='card-view__text'>{user.length != 0 ? `${user.short_description}` : ""}</p>
                <p className='card-view__text--content'> {user.length != 0 ? `${user.description}` : ""}</p>
                <img className='card-view__img' src={user.length != 0 ? `https://mok2-pressa.herokuapp.com/data${user.img}` : ""} alt='user' />
            </div>

            <div className='card-view__formats'>
                <span className='card-view__format'>
                    <img className='card-view__format-img' src={OnlineImg} alt="format" />
                    {user.length != 0 ? `${user.watch_type}` : ""}
                </span>
                <a target="_blank" className='card-view__link' href={user.length != 0 ? `${user.link}` : ""} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                    </svg>
                    LINK
                </a>
            </div>
            <div className='card-view__wrap'>
                <div className='card-view__item'>
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.99999 1.33333C10.5267 1.33333 12.78 2.75333 13.88 5C12.78 7.24667 10.5333 8.66667 7.99999 8.66667C5.46666 8.66667 3.21999 7.24667 2.11999 5C3.21999 2.75333 5.47332 1.33333 7.99999 1.33333ZM7.99999 0C4.66666 0 1.81999 2.07333 0.666656 5C1.81999 7.92667 4.66666 10 7.99999 10C11.3333 10 14.18 7.92667 15.3333 5C14.18 2.07333 11.3333 0 7.99999 0ZM7.99999 3.33333C8.91999 3.33333 9.66666 4.08 9.66666 5C9.66666 5.92 8.91999 6.66667 7.99999 6.66667C7.07999 6.66667 6.33332 5.92 6.33332 5C6.33332 4.08 7.07999 3.33333 7.99999 3.33333ZM7.99999 2C6.34666 2 4.99999 3.34667 4.99999 5C4.99999 6.65333 6.34666 8 7.99999 8C9.65332 8 11 6.65333 11 5C11 3.34667 9.65332 2 7.99999 2Z" fill="black"/>
                    </svg>
                    <span className='card-view__count'>{user.length != 0 ? `${user.active}` : ""}</span>
                </div>
                <div className='card-view__item'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="16" height="16" fill="white"/>
                        <path d="M13.3333 11.4468L12.5533 10.6668H2.66668V2.66683H13.3333V11.4468ZM13.3333 1.3335H2.66668C1.93334 1.3335 1.33334 1.9335 1.33334 2.66683V10.6668C1.33334 11.4002 1.93334 12.0002 2.66668 12.0002H12L14.6667 14.6668V2.66683C14.6667 1.9335 14.0667 1.3335 13.3333 1.3335Z" fill="black"/>
                    </svg>
                    <span className='card-view__count card-view__comment-0count'>764</span>
                </div>
                <div className='card-view__item'>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3874 7.80839C10.004 7.81093 9.62592 7.89837 9.28032 8.06444C8.93472 8.2305 8.63021 8.47107 8.38866 8.76884L5.07901 7.24381C5.23462 6.76731 5.23462 6.25367 5.07901 5.77718L8.38866 4.25215C8.77908 4.72326 9.32337 5.04132 9.92547 5.15019C10.5276 5.25906 11.1488 5.15174 11.6795 4.84717C12.2101 4.5426 12.6162 4.06037 12.8259 3.48557C13.0356 2.91077 13.0356 2.28036 12.8257 1.7056C12.6159 1.13084 12.2098 0.648681 11.679 0.344209C11.1483 0.0397381 10.5271 -0.0674685 9.92501 0.0415099C9.32292 0.150488 8.77869 0.468646 8.38836 0.939833C7.99802 1.41102 7.78668 2.00495 7.79162 2.61679C7.79358 2.77139 7.80877 2.92554 7.83705 3.07754L4.41059 4.6545C4.04528 4.2973 3.58269 4.05585 3.08077 3.9604C2.57884 3.86494 2.05991 3.91973 1.58899 4.1179C1.11806 4.31607 0.716091 4.6488 0.433433 5.07441C0.150774 5.50001 0 5.99957 0 6.51049C0 7.02141 0.150774 7.52097 0.433433 7.94658C0.716091 8.37219 1.11806 8.70492 1.58899 8.90309C2.05991 9.10126 2.57884 9.15604 3.08077 9.06059C3.58269 8.96514 4.04528 8.72369 4.41059 8.36649L7.83705 9.94344C7.80877 10.0954 7.79358 10.2496 7.79162 10.4042C7.79162 10.9176 7.94387 11.4195 8.2291 11.8463C8.51433 12.2732 8.91973 12.6059 9.39406 12.8024C9.86838 12.9989 10.3903 13.0503 10.8938 12.9501C11.3974 12.85 11.8599 12.6027 12.2229 12.2397C12.586 11.8767 12.8332 11.4141 12.9334 10.9106C13.0335 10.4071 12.9821 9.88515 12.7856 9.41083C12.5892 8.93651 12.2565 8.5311 11.8296 8.24587C11.4027 7.96064 10.9008 7.80839 10.3874 7.80839ZM10.3874 1.31889C10.6441 1.31889 10.8951 1.39501 11.1085 1.53762C11.3219 1.68024 11.4883 1.88294 11.5865 2.1201C11.6848 2.35727 11.7105 2.61823 11.6604 2.87C11.6103 3.12177 11.4867 3.35303 11.3052 3.53454C11.1237 3.71606 10.8924 3.83967 10.6406 3.88975C10.3889 3.93983 10.1279 3.91413 9.89074 3.81589C9.65358 3.71766 9.45088 3.5513 9.30826 3.33787C9.16565 3.12443 9.08953 2.87349 9.08953 2.61679C9.08953 2.27257 9.22627 1.94244 9.46967 1.69904C9.71308 1.45563 10.0432 1.31889 10.3874 1.31889ZM2.60002 7.80839C2.34332 7.80839 2.09238 7.73227 1.87894 7.58966C1.66551 7.44704 1.49915 7.24434 1.40091 7.00718C1.30268 6.77002 1.27698 6.50905 1.32706 6.25729C1.37714 6.00552 1.50075 5.77425 1.68226 5.59274C1.86378 5.41122 2.09504 5.28761 2.34681 5.23753C2.59858 5.18745 2.85954 5.21315 3.0967 5.31139C3.33386 5.40962 3.53657 5.57598 3.67918 5.78942C3.8218 6.00286 3.89792 6.25379 3.89792 6.51049C3.89792 6.85472 3.76118 7.18484 3.51777 7.42825C3.27437 7.67165 2.94424 7.80839 2.60002 7.80839ZM10.3874 11.7021C10.1307 11.7021 9.87979 11.626 9.66635 11.4834C9.45291 11.3407 9.28656 11.138 9.18832 10.9009C9.09009 10.6637 9.06438 10.4028 9.11446 10.151C9.16454 9.89922 9.28816 9.66796 9.46967 9.48644C9.65119 9.30493 9.88245 9.18131 10.1342 9.13123C10.386 9.08115 10.647 9.10686 10.8841 9.20509C11.1213 9.30333 11.324 9.46968 11.4666 9.68312C11.6092 9.89656 11.6853 10.1475 11.6853 10.4042C11.6853 10.7484 11.5486 11.0785 11.3052 11.322C11.0618 11.5654 10.7317 11.7021 10.3874 11.7021Z" fill="black"/>
                    </svg>
                </div>
            </div>

            <ul className='card-view__list'>
              
                {
                    filtred.length != 0 ? 
                        filtred.map(item => (
                            <ViewCardItem key={item.id} obj={item}/>
                        )) 
                    : null
                  
                    // bool ? 
                    
                }
                
            </ul>
          
            <div className='card-view__pagenation-box'>
                <button  className={activeChange === 1 ? `card-view__pagenation card-view__pagenation--active` : `card-view__pagenation `} onClick={()=> {setActiveChange(1);setPage(page - 1 == 0 ? 1 : page - 1 )}}>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z" fill="white"/>
                    </svg>
                </button>
                <button className={activeChange === 2 ? `card-view__pagenation card-view__pagenation--active` : `card-view__pagenation `} onClick={()=> {setActiveChange(2);setPage(page + 1)}}>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.59 10.59L5.17 6L0.59 1.41L2 0L8 6L2 12L0.59 10.59Z" fill="white"/>
                    </svg>
                </button>
            </div>

        </div>


    );
};

export default ViewCard;
