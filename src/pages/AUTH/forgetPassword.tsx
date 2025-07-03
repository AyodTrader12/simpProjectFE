import React from 'react'
import { useNavigate } from 'react-router-dom';
import { verifyAccount } from '../../API/userApi';
import { forgetPasswords } from '../../API/userApi';
import { FaSpinner } from "react-icons/fa6";
import toast,  { Toaster } from 'react-hot-toast';
const forgetPassword = () => {
  const [email, setEmail] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigate = useNavigate()

  const handleSubmit = async  (e:any) => {
    e.preventDefault()
    setLoading(true)
    forgetPasswords({email}).then((res) => {
      if (res.status === 201) {
        navigate("/auth/forgetMsg")
      } else {
        toast("Something went wrong, please try again.")
      }
    }).finally(() => {
      setLoading(false)
    })
  }
  return (
    <div>
     <div className='w-full h-screen bg-black flex items-center justify-center'>
      <Toaster/>
       <div className='w-[350px] h-[45%] bg-[#1A1A1A] rounded-2xl md:w-[400px] max-sm:bg-black p-5 '>
 <h1 className='uppercase max-w-[768px]:text-4xl text-blue-600 font-bold p-2 '>Forgot Password</h1>
 <p className="text-white font-serif mb-5 p-2">
          please enter your email 
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <div className='border-1 border-gray-400  h-[45px] rounded-xl w-full flex items-center p-2 mb-5 gap-1'>
              <input type="text" placeholder='Enter Email' className='bg-transparent w-full h-full p-2 outline-none text-white'
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />
            </div>
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
              Continue
            </button>
          )}
        </form>
       </div>
     </div>
    </div>
  )
}

export default forgetPassword
