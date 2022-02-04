import "./AdminForm.scss"

function AdminForm({setSearch}){
    function FormHandler (e){
        e.preventDefault()
    }

    return (
        <form className="admin__form form" onSubmit={FormHandler}>
            <label className="form__label">
                <input className="form__search" type="search"  placeholder="Search" onChange={(e)=> setSearch(e.target.value)}/>
            </label>
        </form>
    )
}

export default AdminForm