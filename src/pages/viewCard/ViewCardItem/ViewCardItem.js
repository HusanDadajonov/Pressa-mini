import {BsFillArrowRightCircleFill} from 'react-icons/bs';

function ViewCardItem ({obj}){
    return (
        <li className='card-view__item'>
                      <div className='card'>
                <div className='card-hover'>
            <ul className="ul">
            <a href={`/ad/active/${obj.id}`} > 
                <li>
                <BsFillArrowRightCircleFill className='card-icon'/>
                </li>
            </a> 
            <li className='info-content'>
                {obj.watch_type}
            </li>
            </ul>
                <div className='card-info' >
                    <h3 className='info-title'> {obj.title} </h3>
                    <span>{obj.category}</span>        
                    <div className='info-content'>
                    <div>
                        <p className='info-content-title'>Tadbir sanasi:</p>
                        <span className='info-content-text'>{obj.date}</span>
                    </div>
                    <div>
                        <p className='info-content-title'>Speaker:</p>
                        <span className='info-content-text'>{`${obj.user.first_name} ${obj.user.last_name}`}</span>
                    </div>
                    </div> 
                </div>
                <div className='card-img' >
                    <img  className='card-img__img' src={`https://mok2-pressa.herokuapp.com/data${obj.img}`}/>
                </div>
            </div>
            </div>
        </li>
      
    )
}
export default ViewCardItem