function AdminCard({item,cancelBtn,acceptBtn,Cancel,Accept,RemoveItem,setClickedCancel}){
    return(
        <li  className="admin__post-item">
            <div className="admin__post--wrap">
                <h3 className="admin__post-title">{item.title}</h3>
                <div className="adim__post-btns-box">
                    {cancelBtn ? "" : <button id={item.id}  className="admin__post--btn admin__post--btn-cancel" onClick={(e)=> {Cancel(e);RemoveItem(e);setClickedCancel(true)}}>Bekor qilish</button>}
                    {acceptBtn ? "" : <button id={item.id} className="admin__post--btn admin__post--btn-confirmation" onClick={(e)=> {Accept(e);RemoveItem(e)}}>Tasdiqlash</button>}
                    
                </div>
            </div>
            <div className="admin__post--texts">
                <p className="admin__post--name">{`${item.user.first_name} ${item.user.last_name}`}</p>
                <a className="admin__post--tel" href="tel:+997262347">{item.user.contact}</a>
                <time className="admin__post--date">{item.date}</time>
                <span className="admin__post--field">{item.user.user_job}</span>
            </div>
        </li> 
    )
}

export default AdminCard