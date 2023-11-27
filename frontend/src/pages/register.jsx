import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../redux/reducers/user-reducers'

import logo from '../assets/Logo Putih.png'
import ilus_kasir from '../assets/cashier-ilust.png'
import logo_biru from '../assets/Logo Biru.png'

function Register() {
    const { users, isLoading, isEmailExist, isSuccess } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [nama, setNama] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [konfirmasiPassword, setKonfirmasiPassword] = useState("")
    const [isPasswordValid, setIsPasswordValid] = useState(true)

    const handleAddUser = (event) => {
        event.preventDefault()
        if (password != konfirmasiPassword) {
            setIsPasswordValid(false)
            setNama("")
            setEmail("")
            setPassword("")
            setKonfirmasiPassword("")
        } else {
            setIsPasswordValid(true)
            const newUser = {
                nama,
                email,
                password
            }
            dispatch(addUser(newUser))
        }
    }

    return (
        <div className='relative flex w-screen min-h-screen'>
            <div className='lg:flex flex-col lg:w-1/2 hidden bg-[#5371FF] items-center justify-center space-y-4'>
                <img src={logo} alt="Logo" className='w-24' />
                <img src={ilus_kasir} alt="Ilustrasi Kasir" className='w-[550px]' />
            </div>
            <div className='flex flex-col w-full lg:w-1/2 min-h-screen items-center justify-center overflow-x-hidden overflow-y-scroll px-6 sm:px-0'>
                <Link to={'/'}><img src={logo_biru} alt="" className='absolute w-52 lg:hidden top-4 left-4'/></Link>
                <div className='flex flex-col w-full sm:w-96 px-6 py-6 sm:px-0 sm:py:0 space-y-5 items-center bg-slate-200 sm:bg-white rounded-lg drop-shadow-2xl sm:drop-shadow-none border sm:border-0 border-gray-500'>
                    <h1 className='font-bold text-xl'>REGISTER</h1>
                    <form action="" onSubmit={handleAddUser} className='w-full space-y-6'>
                        <div className='font-semibold space-y-1.5'>
                            <p>Nama Pengguna<span className='text-red-500'>*</span></p>
                            <input type="text" name='nama_pengguna' id='nama_pengguna' value={nama} onChange={(e) => setNama(e.target.value)} required className='w-full border border-black rounded-md px-2 py-1 shadow-inner shadow-gray-300' />
                        </div>
                        <div className='font-semibold space-y-1.5'>
                            <p>Email<span className='text-red-500'>*</span></p>
                            <input type="email" name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required className='w-full border border-black rounded-md px-2 py-1 shadow-inner shadow-gray-300' />
                        </div>
                        <div className='font-semibold space-y-1.5'>
                            <p>Password<span className='text-red-500'>*</span></p>
                            <input type="password" name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required className='w-full border border-black rounded-md px-2 py-1 shadow-inner shadow-gray-300' />
                        </div>
                        <div className='font-semibold space-y-1.5'>
                            <p>Konfirmasi Password<span className='text-red-500'>*</span></p>
                            <input type="password" name='konfirmasi_password' id='konfirmasi_password' value={konfirmasiPassword} onChange={(e) => setKonfirmasiPassword(e.target.value)} required className='w-full border border-black rounded-md px-2 py-1 shadow-inner shadow-gray-300' />
                        </div>
                        <button type='submit' disabled={isLoading ? 'disabled' : ''} className='flex w-full items-center justify-center h-10 bg-blue-500 hover:bg-blue-600 text-white font-bold border border-black rounded-lg'>
                            DAFTAR <span>{isLoading ? <div className='pl-3'><svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><defs><linearGradient id="mingcuteLoadingLine0" x1="50%" x2="50%" y1="5.271%" y2="91.793%"><stop offset="0%" stopColor="currentColor" /><stop offset="100%" stopColor="currentColor" stopOpacity=".55" /></linearGradient><linearGradient id="mingcuteLoadingLine1" x1="50%" x2="50%" y1="8.877%" y2="90.415%"><stop offset="0%" stopColor="currentColor" stopOpacity="0" /><stop offset="100%" stopColor="currentColor" stopOpacity=".55" /></linearGradient></defs><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="url(#mingcuteLoadingLine0)" d="M8.886.006a1 1 0 0 1 .22 1.988A8.001 8.001 0 0 0 10 17.944v2c-5.523 0-10-4.476-10-10C0 4.838 3.848.566 8.886.007Z" transform="translate(2 2.055)" /><path fill="url(#mingcuteLoadingLine1)" d="M14.322 1.985a1 1 0 0 1 1.392-.248A9.988 9.988 0 0 1 20 9.945c0 5.523-4.477 10-10 10v-2a8 8 0 0 0 4.57-14.567a1 1 0 0 1-.248-1.393Z" transform="translate(2 2.055)" /></g></svg></div> : ''}</span>
                        </button>
                    </form>
                    {isPasswordValid ? '' : <p className='text-red-600 font-semibold'>Password anda tidak sama</p>}
                    {isEmailExist ? <p className='text-red-600 font-semibold'>Email sudah terdaftar</p> : ''}
                    {isSuccess ? <p className='text-green-600 font-semibold'>Anda berhasil mendaftar</p> : ''}
                    <p className='font-medium'>Sudah punya akun? <Link to='/login' className='text-blue-500 hover:text-blue-600'>Masuk Disini</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Register