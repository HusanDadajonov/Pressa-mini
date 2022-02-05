import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css"

function Login({setCheckPages}){
    setCheckPages(true)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const [err,setErr] = useState("")
    
   async function formSubmit(e){
        console.log(e);
        let response = await fetch('https://mok2-pressa.herokuapp.com/auth/login',{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(e)
        })
        let data = await response.json()
        // console.log(data)
        if(data.status != 200){
            setErr(data.message)
        }
        else if ((data.status == 200) && (data.token)){
            window.localStorage.setItem("token",data.token)
            window.location.href = "/admin";
        }
    }
    return (
    <div className="my-form">
        <div className="form-title">
            <h1>Sign In</h1>
        </div>
   
        <form action="" onSubmit={handleSubmit(formSubmit)}>
            <span className="err">{err}</span>
            <div className="single-input">
                <span><i className="fas fa-user"></i></span>
                <input {...register("username",{required:true})} type="text" placeholder="User Name" autoComplete="off"/>
            </div>
            <div className="single-input">
                <span><i className="fas fa-unlock"></i></span>
                <input {...register("password",{required:true})} type="password" placeholder="Password" autoComplete="off"/>
            </div>

            <div className="single-input submit-btn">
                <input type="submit" value="Login" />
            </div>
        </form>
  </div>
    )
}
export default Login