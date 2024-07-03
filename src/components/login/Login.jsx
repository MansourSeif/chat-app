import React, { useState } from 'react'
import "./login.css"
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../lib/firebase'
import { doc, setDoc } from 'firebase/firestore'
import { db} from '../../lib/firebase.js'
import upload from '../../lib/uploads.js'

const Login = () => {
    const [loading, setLoading] =useState(false)

    const [avatar,setAvatar] = useState({
        file: null , 
        url:""
    })

    const handleAvatar = (e) =>{
        if(e.target.files[0]){ //checks if image uploaded
            setAvatar({
                file:e.target.files[0], // takes only one image
                url:URL.createObjectURL(e.target.files[0]) // create an url for the image 
            })
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.target) // gets the data from the form 
        const { email , pwd} = Object.fromEntries(formData) // get every input value from the form of sign in 

        try{
            await  signInWithEmailAndPassword(auth,email,pwd)
            toast.success("Login Successful")
        }catch(err){
            console.log(err.message)
            toast.error(err.message)
        }finally{
            setLoading(false)
        }
    }

    const handleRegister = async (e) => {

        e.preventDefault()
        setLoading(true)
        
        const formData = new FormData(e.target) // gets the data from the form
        const {username , email , pwd} = Object.fromEntries(formData) // get every input value from the form
         
        try {
            const response = await createUserWithEmailAndPassword(auth,email,pwd)

            const imgUrl = await upload(avatar.file)

            await setDoc(doc(db,"users" ,response.user.uid) , //create table with the name users and the proprities 
            {                                              //and the response.user.uid stands for the user unique id (table pk)
                username,
                email,
                avatarUrl:imgUrl,
                id:response.user.uid,
                blocked:[] ,
            })

            await setDoc(doc(db,"userchats" ,response.user.uid) , {
                chats:[] , 
            })

            toast.success("Account created! You can log in now! ")
        }catch(err){
            console.log(err)
            toast.error(err.message)
        }finally{
            setLoading(false)
        }

        }

  return (
    <div className='login'>
        <div className="item">
            <h2>Welcome back , </h2>
            <form action="" onSubmit={handleLogin}>
                <input type="text" placeholder='Email' name='email' />
                <input type="password" placeholder='Password' name='pwd' />
                <button disabled={loading}> {loading? "Loading..." : "Sign In"}</button>
            </form>

        </div>
        <div className="seperator"></div>
        <div className="item">
            <h2>Create an account </h2>
            <form action="" onSubmit={handleRegister}>
                <label htmlFor="file">
                    <img src={avatar.url || "./avatar.png" } alt="" />
                    Upload an image</label>
                <input type="file" id='file' style={{display:"none"} } onChange={handleAvatar} />
                <input type="text" name='username' placeholder='Username' />
                <input type="text" placeholder='Email' name='email' />
                <input type="password" placeholder='Password' name='pwd' />
                <button disabled={loading}> {loading? "Loading..." : "Sign Up"}</button>
            </form>
        </div>
    </div>
  )
}

export default Login