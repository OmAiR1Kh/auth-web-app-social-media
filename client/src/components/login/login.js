import './login.css'
import {useState} from 'react'
import Input from '../input/input'
import {FcGoogle} from 'react-icons/fc'
import {MdVisibilityOff} from 'react-icons/md'
import {MdVisibility} from 'react-icons/md'

const Login = () =>{
    const [visible, setVisible] = useState(false)

    const handleClick = () =>{
        setVisible(!visible)
    }

    return (
        <form className="login">
            <Input type='email' text='Email' />
            <Input type={visible? 'text' : 'password'}
            icon={visible? <MdVisibility/> : <MdVisibilityOff/>}
            text='Password' 
            handleClick={handleClick}
            />
           <div className='login_btn'>
                <button>Login</button>
                <button className="btn-alt">Sign in <FcGoogle /></button>
            </div> 
        </form>
    )
}
export default Login