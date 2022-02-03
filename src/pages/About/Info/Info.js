import InfoImg from "../../../assets/info.jpg"
import "./Info.scss"
import Adversting from "../../../components/Advertising/Adversting"
function Info(){

    async function FetHandler(){
        let req =  await fetch(`https://mok2-pressa.herokuapp.com/ad/active/1`)
        console.log(await req.json());
    }
    FetHandler()

    return(
        <section className="info">
            <div className="info__container container">
                <h2 className="info__title">Reference site giving information on its origins,  random.</h2>
                <p className="info__desc--small">Reference site giving information on its origins, as well as a random Lipsum generator.</p>
                <div className="info__desc--wrap">
                    <p className="info__desc">Ta’kidlanishicha, hozirda qozonxonalardagi tabiiy gaz bosimini ko‘tarish bo‘yicha mutasaddilar bilan hamkorlikda ishlar olib borilmoqda.</p>
                    <p className="info__desc">Uy-joy kommunal xizmat ko‘rsatish vazirligi 25 yanvar kuni 3−4 soat ichida Toshkent shahridagi markaziy isitish qozonxonalar to‘liq ishlay boshlashi haqida xabar bergandi.</p>
                </div> 
                <div className="info__img-wrap">
                    <img className="info__img" src={InfoImg} alt="info" />
                </div>
                <div className="info__desc--wrap">
                    <p className="info__desc">Ta’kidlanishicha, hozirda qozonxonalardagi tabiiy gaz bosimini ko‘tarish bo‘yicha mutasaddilar bilan hamkorlikda ishlar olib borilmoqda.</p>
                    <p className="info__desc">Uy-joy kommunal xizmat ko‘rsatish vazirligi 25 yanvar kuni 3−4 soat ichida Toshkent shahridagi markaziy isitish qozonxonalar to‘liq ishlay boshlashi haqida xabar bergandi.</p>
                </div> 
                <div className="info__card-wrap">
                    <Adversting />
                    <Adversting />
                </div>
            </div>
            
        </section>
    )
}

export default Info