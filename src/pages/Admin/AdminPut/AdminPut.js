async function PutMethod(id,num){
    console.log(id,num);
    const response = await fetch('https://mok2-pressa.herokuapp.com/ad',{
        method: 'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({id:id,faol:num})
    })
    return await response.json()
}

export default PutMethod