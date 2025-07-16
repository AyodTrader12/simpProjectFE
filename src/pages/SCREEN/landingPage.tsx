import { Link } from "react-router-dom"



const landingPage = () => {
  return (
    <div>
      <div className='w-full h-screen bg-[#1A1A1A]'>
        <h1 className='text-white text-4xl text-center pt-20'>Welcome to the Landing Page</h1>
        <p className='text-white text-center mt-4'>This is the starting point of our application.</p>
        
        <div className='flex justify-center mt-10'>
          <Link to={"/auth/register"}>
          <button className='bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition cursor-pointer'>
            Get Started
          </button>
          </Link>
      </div>
    </div>
    </div>
  )
}

export default landingPage
