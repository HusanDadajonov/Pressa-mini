import cardArrow from "../../assets/cardArrow.svg";
import "./Adversting.scss";
import {Link} from 'react-router-dom';


function Adversting(){
    return (
        <Link to='/elon_berish'>
        <div className="adversting">
            <h3 className="adversting__title">Uyushtirmoqchi bo`lgan tadbiringiz haqida e`lon bering</h3>
            <div className="adversting__text-wrap">
                <p className="adversting__desc">Shu orqali yo`q joydan yaxshigina auditoriya jalb qilib olasiz))</p>
                <img className="adversting__arrow" src={cardArrow} alt="adverstingArrow" />
            </div>
        </div>
        </Link>
    )
}

export default Adversting