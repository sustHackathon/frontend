import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signInFailure , signInSuccess , signInStart} from '../redux/user/userSlice' 
import { IP_ADDRESS } from '../global/constant' 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {

    const {isLoaded,error} = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const[wrong , setWrong] = useState(null);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //setIsLoaded(true);
            dispatch(signInStart());
            //dispatch(founderStart());
            const res = await fetch(`http://${IP_ADDRESS}/signin`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const data = await res.json();
        console.log(data);
        
        // const token = data.accessToken;
        // const decoded = jwtDecode(token);
        // console.log(decoded)
        
        //setIsLoaded(false);
        if(data.detail === 'error' || data.detail === 'wrong password'){
            //setError(true);
            setWrong(data.detail);
            dispatch(signInFailure(data.message));
            //dispatch(founderFailure(data.message));
            return;
        }
        // if( data.accessToken.role === 'FOUNDER'){
        //     dispatch(founderSuccess(data));
        //     navigate('/courses')
        // }
        
        dispatch(signInSuccess(data));
        toast.success('Sign In Successful');
        navigate('/medicine');   
        } catch (error) {
            // setIsLoaded(false);
            // setError(true);
            dispatch(signInFailure(error));
            //dispatch(founderFailure(error));
        }
    }
  return (
    <div className='bg-white'>
            <div className='flex max-w-7xl p-3 mx-auto flex-col md:flex-row'>
              <div className='w-[500px] h-[500px] mt-10'>
                <img src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-login_516790-1261.jpg" alt="" />
              </div>
              <div className='p-5 max-w-2xl w-full mx-auto mt-10'>
                <h1 className='text-3xl text-center font-semibold my-12 text-purple-500'>Sign In</h1>
                <form className='flex flex-col gap-2' onSubmit={handleSubmit} >
                    <input type="text" placeholder='Email or Username' onChange={handleChange} className=' p-3 rounded-lg bg-slate-100' id='email'  required/>
                    <input type="password" placeholder='Password' onChange={handleChange} className='p-3 rounded-lg bg-slate-100' id='password'  required/>
                  
                    <button type="submit" className='bg-blue-800 text-white py-2 rounded-lg
                    hover:opacity-90'
                    disabled={isLoaded}>
                        {isLoaded ? 'Loading...' : 'SIGN IN'}
                    </button>
                    
                </form>

                <div className='flex gap-2 mt-5'>
                    <p className='text-black'>Dont have an account?</p>
                    <Link to='/signup' className='text-blue-500'>Sign up</Link>
                </div>

                  {wrong && <p className='text-red-700 mt-5'>{wrong}</p>}
              </div>
            </div>
        </div>
  )
}

export default SignIn