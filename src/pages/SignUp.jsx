import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { IP_ADDRESS } from '../global/constant';



function SignUp() {

    const [error, setError] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)


    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        name: '',
        password: ''
    })

    const handlChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //setError(false);
        try {
            setIsLoaded(true);
            const res = await fetch(`http://${IP_ADDRESS}/signup`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        console.log(data);


        const doc = new jsPDF();

        doc.setFont('helvetica');
        doc.setFontSize(12);
        doc.text('User Details', 10, 10);

        doc.headers = [['Field', 'Value']];
        const info = [
            ['Email', data.email],
            ['Phone', data.phone],
            ['Name', data.name],
        ];
        doc.autoTable({
            startY: 20,
            head: doc.headers,
            body: info
        });
        // doc.text(`Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nSchool: ${data.school}\nCollege: ${data.college}`, 10, 10);
        doc.save('user.pdf');

        
        setIsLoaded(false);
        if(data.detail === 'error'){
            setError(true);
            return;
        }
        navigate('/signin');    
        } catch (error) {
            setIsLoaded(false);
            setError(true);
            console.log("Error generating PDF: ", error);
        }
    }
  return (
    <div className='bg-white'>
            <div className='flex max-w-7xl p-3 mx-auto flex-col md:flex-row'>
                <div className='w-[500px] h-[500px] mt-10'>
                    <img src="https://img.freepik.com/premium-vector/new-user-online-registration-sign-up-concept-tiny-characters-signing-up-huge-smartphone-with-secure-password-login-account-mobile-app-web-access-cartoon-people-vector-illustration_87771-11429.jpg" alt="" />
                </div>
                <div className='p-3 max-w-2xl mx-auto w-full'>
                    <h1 className='text-3xl text-center font-semibold my-7 text-purple-500'>Sign Up</h1>
                    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
                        <input type="email" placeholder='Email' onChange={handlChange} className=' p-3 rounded-lg bg-slate-100' id='email'  required/>
                        <input type="text" placeholder='Phone' onChange={handlChange} className=' p-3 rounded-lg bg-slate-100' id='phone'  required/>
                        <input type="text" placeholder='Name' onChange={handlChange} className=' p-3 rounded-lg bg-slate-100' id='name'  required/>
                        <input type="password" placeholder='Password' onChange={handlChange} className='p-3 rounded-lg bg-slate-100' id='password'  required/>
                        
                        <button type="submit" className='bg-blue-800 text-white py-2 rounded-lg
                        uppercase hover:opacity-90'
                        disabled={isLoaded}>
                            {isLoaded ? 'Loading...' : 'SIGN UP'}
                        </button>
                    </form>

                    <div className='flex gap-2 mt-5'>
                        <p className='text-black'>Have an account?</p>
                        <Link to='/signin' className='text-blue-500'>Sign in</Link>
                    </div>

                    {error && <p className='text-red-700 mt-5'>Something went wrong!
                    (if email is same)</p>}
                </div>
            </div>
        </div>
  )
}

export default SignUp