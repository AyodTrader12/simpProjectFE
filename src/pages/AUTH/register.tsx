import { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import  {Link, useNavigate} from "react-router-dom";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { FaSpinner } from "react-icons/fa6";
import { createAccount } from "../../API/userApi";
import toast, { Toaster } from "react-hot-toast";
const register = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()
  const [loading,setLoading] = useState<boolean>(false)
  const [visible,setVisible] = useState<boolean>(false)

  const handleSubmit = async (e:any) => {
     e.preventDefault()
     setLoading(true)
    createAccount({name,email,password}).then(( res) => {
      if(res.status === 201){
        navigate("/auth/registerMsg")
      }else{
        toast("Something went wrong, please try again later",)
      }
    }).finally(() => {
       setLoading(false)
    })
  }
  return (
    <div>
    <div className='w-full h-screen bg-black flex items-center justify-center'>
      <Toaster/>
      <div className='w-[350px] h-[65%] bg-[#1A1A1A] rounded-2xl md:w-[400px] max-sm:bg-black p-5'>
        <h1 className='uppercase max-w-[768px]:text-4xl text-blue-600 font-bold p-2 '>sign up</h1>
         <form onSubmit={handleSubmit}>
          <div className='border-1 border-gray-400  h-[45px] rounded-xl w-full flex items-center p-2 mb-5 gap-1'>
            <span className="text-gray-400"><MdOutlineMailOutline /></span>
            <input type="text" placeholder='Enter Name' className='bg-transparent w-full h-full p-2 outline-none text-white'
            value={name}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
          </div>
          <div className='border-1 border-gray-400  h-[45px] rounded-xl w-full flex items-center p-2 mb-5 gap-1'>
            <span className="text-gray-400"><MdOutlineMailOutline /></span>
            <input type="email" 
            placeholder='Enter Email' 
            className='bg-transparent w-full h-full p-2 outline-none text-white'
            value={email}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
          </div>
          <div className='border-1 border-gray-400  h-[45px] rounded-xl w-full flex items-center p-2 mb-5 gap-1'>
            <span className="text-gray-400"><TbLockPassword /></span>
            <input type={!visible ? "password" :"text"}
             placeholder='Enter password'
            className='bg-transparent w-full h-full p-2 outline-none text-white'
            value={password}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}

            />
            
              {!visible ? (
                <MdVisibility
                  className="text-neutral-400 mr-3 text-2xl cursor-pointer"
                  onClick={() => {
                    setVisible(!visible);
                  }}
                />
              ) : (
                <MdVisibilityOff
                  className="text-neutral-400 mr-3 text-2xl cursor-pointer"
                  onClick={() => {
                    setVisible(!visible);
                  }}
                />
              )}
          </div>
      {loading ? (
            <button
              type="submit"
              className="h-[45px] bg-blue-600 text-white   rounded-xl font-semibold w-full mb-5 flex  justify-center items-center"
              disabled={true}
            >
              <span>
                <FaSpinner className="animate-spin mr-2" />
              </span>
              Processing
            </button>
          ) : (
            <button
              type="submit"
              className="h-[45px] bg-blue-600 text-white   rounded-xl font-semibold w-full mb-5"
            >
              Sign up
            </button>
          )}
         </form>
       <Link to={"/auth/login"}>
         <button className="h-[45px]    rounded-xl font-semibold w-full text-blue-600 ">Log in</button>
       </Link>
         
      </div>
    </div>

    </div>
  )
}

export default register
