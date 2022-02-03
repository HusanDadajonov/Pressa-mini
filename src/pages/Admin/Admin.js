import AdminItem from "./AdminItem/AdminItem"
import Logo from "../../assets/logo.svg"
import "./Admin.scss"
import AdminForm from "./AdminForm/AdminForm"
import { useState, useEffect } from "react"
function Admin(){
    const [arr,setArr] = useState();
    const [btnCheck,setBtnCheck] = useState("pendding")
    useEffect(()=> {
        fetch(`https://mok2-pressa.herokuapp.com/ad/${btnCheck}`)
        .then(req => req.json())
        .then(data => setArr(data))
    },[btnCheck])
 
    const [active,setActive] = useState(1);
    return(
        <div className="admin">
            <div className="row">
                <div className="admin__col col-sm-2">
                        <img className="admin__logo" src={Logo} alt="logo" />
                    <ul className="admin__list">
                        <AdminItem 
                            icon={
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 10L3 8M3 8L10 1L17 8M3 8V18C3 18.2652 3.10536 18.5196 3.29289 18.7071C3.48043 18.8946 3.73478 19 4 19H7M17 8L19 10M17 8V18C17 18.2652 16.8946 18.5196 16.7071 18.7071C16.5196 18.8946 16.2652 19 16 19H13M7 19C7.26522 19 7.51957 18.8946 7.70711 18.7071C7.89464 18.5196 8 18.2652 8 18V14C8 13.7348 8.10536 13.4804 8.29289 13.2929C8.48043 13.1054 8.73478 13 9 13H11C11.2652 13 11.5196 13.1054 11.7071 13.2929C11.8946 13.4804 12 13.7348 12 14V18C12 18.2652 12.1054 18.5196 12.2929 18.7071C12.4804 18.8946 12.7348 19 13 19M7 19H13" stroke="#181818" strokeWidth="2" />
                                </svg>
                            } 
                            text="Bosh sahifa"
                        />
                        <AdminItem 
                            icon={
                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 10V9M10 10V7M14 10V5M6 18L10 14L14 18M1 1H19M2 1H18V13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V1Z" stroke="#181818" strokeWidth="2" />
                                </svg>
                            } 
                            text="Statistika"
                        />
                        <AdminItem 
                            icon={
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 9V15M11 9V15M1 5H17M16 5L15.133 17.142C15.0971 17.6466 14.8713 18.1188 14.5011 18.4636C14.1309 18.8083 13.6439 19 13.138 19H4.862C4.35614 19 3.86907 18.8083 3.49889 18.4636C3.1287 18.1188 2.90292 17.6466 2.867 17.142L2 5H16ZM12 5V2C12 1.73478 11.8946 1.48043 11.7071 1.29289C11.5196 1.10536 11.2652 1 11 1H7C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2V5H12Z" stroke="#181818" strokeWidth="2" />
                                </svg>
                            } 
                            text="O’chirilganlar"
                        />
                        <AdminItem 
                            icon={
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.675 4.317C13.249 2.561 10.751 2.561 10.325 4.317C10.049 5.452 8.749 5.99 7.753 5.382C6.209 4.442 4.443 6.209 5.383 7.752C5.5243 7.98375 5.60889 8.24559 5.62987 8.51621C5.65085 8.78683 5.60764 9.05859 5.50375 9.30935C5.39985 9.56011 5.23822 9.7828 5.032 9.95929C4.82578 10.1358 4.5808 10.2611 4.317 10.325C2.561 10.751 2.561 13.249 4.317 13.675C4.58056 13.7391 4.82529 13.8645 5.03127 14.0409C5.23726 14.2174 5.3987 14.44 5.50247 14.6906C5.60624 14.9412 5.64942 15.2128 5.62848 15.4832C5.60755 15.7537 5.5231 16.0153 5.382 16.247C4.442 17.791 6.209 19.557 7.752 18.617C7.98375 18.4757 8.24559 18.3911 8.51621 18.3701C8.78683 18.3491 9.05859 18.3924 9.30935 18.4963C9.56011 18.6001 9.7828 18.7618 9.95929 18.968C10.1358 19.1742 10.2611 19.4192 10.325 19.683C10.751 21.439 13.249 21.439 13.675 19.683C13.7391 19.4194 13.8645 19.1747 14.0409 18.9687C14.2174 18.7627 14.44 18.6013 14.6906 18.4975C14.9412 18.3938 15.2128 18.3506 15.4832 18.3715C15.7537 18.3924 16.0153 18.4769 16.247 18.618C17.791 19.558 19.557 17.791 18.617 16.248C18.4757 16.0162 18.3911 15.7544 18.3701 15.4838C18.3491 15.2132 18.3924 14.9414 18.4963 14.6907C18.6001 14.4399 18.7618 14.2172 18.968 14.0407C19.1742 13.8642 19.4192 13.7389 19.683 13.675C21.439 13.249 21.439 10.751 19.683 10.325C19.4194 10.2609 19.1747 10.1355 18.9687 9.95905C18.7627 9.78258 18.6013 9.55999 18.4975 9.30938C18.3938 9.05877 18.3506 8.78721 18.3715 8.51677C18.3924 8.24634 18.4769 7.98466 18.618 7.753C19.558 6.209 17.791 4.443 16.248 5.383C16.0162 5.5243 15.7544 5.60889 15.4838 5.62987C15.2132 5.65085 14.9414 5.60764 14.6907 5.50375C14.4399 5.39985 14.2172 5.23822 14.0407 5.032C13.8642 4.82578 13.7389 4.5808 13.675 4.317Z" stroke="#181818" strokeWidth="2" />
                                    <path d="M14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213Z" stroke="#181818" strokeWidth="2" />
                                </svg>
                            } 
                            text="Sozlamalar"
                        />
                        <AdminItem 
                            icon={
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 13L6 10M6 10L9 7M6 10H14M1 10C1 8.8181 1.23279 7.64778 1.68508 6.55585C2.13738 5.46392 2.80031 4.47177 3.63604 3.63604C4.47177 2.80031 5.46392 2.13738 6.55585 1.68508C7.64778 1.23279 8.8181 1 10 1C11.1819 1 12.3522 1.23279 13.4442 1.68508C14.5361 2.13738 15.5282 2.80031 16.364 3.63604C17.1997 4.47177 17.8626 5.46392 18.3149 6.55585C18.7672 7.64778 19 8.8181 19 10C19 12.3869 18.0518 14.6761 16.364 16.364C14.6761 18.0518 12.3869 19 10 19C7.61305 19 5.32387 18.0518 3.63604 16.364C1.94821 14.6761 1 12.3869 1 10Z" stroke="#181818" strokeWidth="2" />
                                </svg>
                            } 
                            text="Chiqish"
                        />
                    </ul>
                </div>
                <div className="admin__col col-sm-10">
                    <div className="admin__header">
                        <AdminForm />
                        <button className="admin__notification"><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15H17L15.595 13.595C15.4063 13.4063 15.2567 13.1822 15.1546 12.9357C15.0525 12.6891 15 12.4249 15 12.158V9C15.0002 7.75894 14.6156 6.54834 13.8992 5.53489C13.1829 4.52144 12.17 3.75496 11 3.341V3C11 2.46957 10.7893 1.96086 10.4142 1.58579C10.0391 1.21071 9.53043 1 9 1C8.46957 1 7.96086 1.21071 7.58579 1.58579C7.21071 1.96086 7 2.46957 7 3V3.341C4.67 4.165 3 6.388 3 9V12.159C3 12.697 2.786 13.214 2.405 13.595L1 15H6M12 15H6M12 15V16C12 16.7956 11.6839 17.5587 11.1213 18.1213C10.5587 18.6839 9.79565 19 9 19C8.20435 19 7.44129 18.6839 6.87868 18.1213C6.31607 17.5587 6 16.7956 6 16V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="admin__notification--count">3</span></button>
                        <div className="admin__account">
                            <div className="admin__img-wrap">
                                <img className="admin__user" src="https://www.replinfosys.com/archicad/images/Softwares-support-icon.png" alt="user" />
                            </div>
                            <div className="admin__user--texts">
                                <h3 className="admin__user-name">Abbos Janozakov</h3>
                                <span className="admin__user-id">id:124332</span>
                            </div>
                        </div>
                    </div>
                    <ul className="admin__btns-wrap">
                        <li onClick={() => { setBtnCheck("pendding"); setActive(1)}} className={active === 1 ? `admin__btns--item admin__btns--item--act` : `admin__btns--item`}>
                            <button id="1" className="admin__btns-btn">Kutilmoqda</button>
                        </li>   
                        <li onClick={() => {setBtnCheck("");setActive(2)}} className={active === 2 ? `admin__btns--item admin__btns--item--act` : `admin__btns--item`}>
                            <button id="2" className="admin__btns-btn">Qabul qilingan</button>
                        </li>
                        <li onClick={() => {setBtnCheck("rejected"); setActive(3)}} className={active === 3 ? `admin__btns--item admin__btns--item--act` : `admin__btns--item`}>
                            <button id="2" className="admin__btns-btn">Rad etilgan</button>
                        </li>
                    </ul>
                    <ul className="admin__post-list">
                            {
                               arr !== undefined ? 
                               arr.map(item => (
                                    <li key={item.id} className="admin__post-item">
                                        <div className="admin__post--wrap">
                                            <h3 className="admin__post-title">{item.title}</h3>
                                            <div className="adim__post-btns-box">
                                                <button className="admin__post--btn admin__post--btn-cancel">Bekor qilish</button>
                                                <button className="admin__post--btn admin__post--btn-confirmation">Tasdiqlash</button>
                                            </div>
                                        </div>
                                        <div className="admin__post--texts">
                                            <p className="admin__post--name">{`${item.user.first_name} ${item.user.last_name}`}</p>
                                            <a className="admin__post--tel" href="tel:+997262347">{item.user.contact}</a>
                                            <time className="admin__post--date">{item.date}</time>
                                            <span className="admin__post--field">{item.user.user_job}</span>
                                        </div>
                                    </li> 
                               ))
                           : ""
                            }
                              
                    </ul>
                </div>
            </div>
        </div>
       
    )
}

async function putz(id){
    const response = await fetch('https://mok2-pressa.herokuapp.com/ad',{
        method: 'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({id:id})
    })
}

export default Admin