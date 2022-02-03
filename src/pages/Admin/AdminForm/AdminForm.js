import "./AdminForm.scss"

function AdminForm(){
    return (
        <form className="admin__form form">
            <label className="form__label">
                <input className="form__search" type="search"  placeholder="Search"/>
            </label>
        </form>
    )
}

export default AdminForm