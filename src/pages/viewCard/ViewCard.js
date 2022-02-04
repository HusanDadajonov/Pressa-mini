import React, { useEffect, useState } from 'react';
import './viewCard.css';
import ViewImg from '../../assets/info.jpg'
import { useParams } from "react-router-dom";
import apiCalls from '../../config/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { info } from 'sass';
// import {Swiper , SwiperSlide} from 'swiper/react';s
// import Similar from '../../components/similar/Similar'

const VIEW_IMG = 'https://mok2-pressa.herokuapp.com/data/ad/active/id'

const ViewCard =  () => {
    const [infoCard, setInfoCard] = useState({})
    const [error, setError] = useState('');
    const { id } = useParams();
    const [similar, setSimilar] = useState([]);


    useEffect( async () => {

        const getPostsById = async () => {
            try {
                const data = await apiCalls.getPostsById(id);
                setInfoCard(data);
                console.log(data);
            } catch (err) {
                setError(err.message);
                console.log(err.message)
            }
        }
        getPostsById();

        // const getImgById = async () => {
        //     try {
        //         const data = await apiCalls.getImgById(id);
        //         setInfoCard(data);
        //         console.log(data);
        //     } catch (err) {
        //         setError(err.message);
        //         console.log(err.message)
        //     }
        // }
        // getImgById();

        // const discover = async () => {
        //     try {
        //         const data = await apiCalls.discover(id);
        //         setSimilar(data);
        //         console.log(data);
        //     } catch (err) {
        //         setError(err.message);
        //         console.log(err.message)
        //     }

        // }
        // discover();

    }, [])

    // const newArr =
    //     <Swiper grabCursor={true} spaceBetween={0} slidesPerView={6} loop >
    //         {similar.map((el, i) => (
    //             <SwiperSlide key={i}>
    //                 <Similar similarEl={el}
    //                     id={el.id}
    //                 // name={el.original_name}
    //                 // imgLink={el.profile_path}
    //                 // charName={el.character}
    //                 />
    //             </SwiperSlide>
    //         ))}
    //     </Swiper>

    // console.log(mappedCards)
    return (
        <div className='container'>
            <div className='card-view'>
                <h2 className='card-view__date'>
                    {infoCard.date}
                </h2>
                <h4 className='card-view__name'>Shahnoza Maxmudova </h4>
                <span className='card-view__job'>Grafik design</span>

                <h3 className='card-view__title'> {infoCard.title}</h3>
                <p className='card-view__text'>{infoCard.short_description}</p>
                <p className='card-view__text--content'>{infoCard.description}</p>
                {/* <img className='card-view__img' src={`https://mok2-pressa.herokuapp.com/data/ad/active/${infoCard.id}` + infoCard.img} alt={infoCard.title} /> */}
                <p className='card-view__text--content'>
                {infoCard.description}
                </p>
                {/* {console.log(newArr)} */}
                {/* <>{infoCard.category}</>
        <>{infoCard.description}</>
        <>{infoCard.img}</>  */}
            </div>



        </div>


    );
};

export default ViewCard;
