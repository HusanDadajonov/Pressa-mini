function AdminItem({text,icon}){
    return(
        <li className="admin__item">
            {icon}
            {text}
        </li>
    )
}

export default AdminItem