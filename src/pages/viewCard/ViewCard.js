import React, { useEffect, useState } from 'react';
import './viewCard.css'
import { useParams } from "react-router-dom";
import apiCalls from '../../config/api';
import { Swiper, SwiperSlide } from 'swiper/react';
// import {Swiper , SwiperSlide} from 'swiper/react';s
// import Similar from '../../components/similar/Similar'


const ViewCard =  () => {
    const [infoCard, setInfoCard] = useState({})
    const [error, setError] = useState('');
    const { id } = useParams();
    const [similar, setSimilar] = useState([]);


    useEffect( async () => {

        // const getPostsById = async () => {
        //     try {
        //         const data = await apiCalls.getPostsById(id);
        //         setInfoCard(data.json());
        //         console.log(data.json());
        //     } catch (err) {
        //         setError(err.message);
        //         console.log(err.message)
        //     }
        // }
        // getPostsById();

    }, [id])

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
                    12 Fevral  |  12:00
                    {infoCard.date}
                </h2>
                <h4 className='card-view__name'>Shahnoza Maxmudova</h4>
                <span className='card-view__job'>Grafik design</span>

                <h3 className='card-view__title'>Reference site giving information on its origins, random.</h3>
                <p className='card-view__text'>Reference site giving information on its origins, as well as a random Lipsum generator.</p>
                <p className='card-view__text--content'> Ta’kidlanishicha, hozirda qozonxonalardagi tabiiy gaz bosimini ko‘tarish bo‘yicha mutasaddilar bilan hamkorlikda ishlar olib borilmoqda.
                    Uy-joy kommunal xizmat ko‘rsatish vazirligi 25 yanvar kuni 3−4 soat ichida Toshkent shahridagi markaziy isitish qozonxonalar to‘liq ishlay boshlashi haqida xabar bergandi.</p>
                <img className='card-view__img' src='./assets/cardArrow.svg' alt=' ' />
                <p className='card-view__text--content'>
                    Ta’kidlanishicha, hozirda qozonxonalardagi tabiiy gaz bosimini ko‘tarish bo‘yicha mutasaddilar bilan hamkorlikda ishlar olib borilmoqda.
                    Uy-joy kommunal xizmat ko‘rsatish vazirligi 25 yanvar kuni 3−4 soat ichida Toshkent shahridagi markaziy isitish qozonxonalar to‘liq ishlay boshlashi haqida xabar bergandi.
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
