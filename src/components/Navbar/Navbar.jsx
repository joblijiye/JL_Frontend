import { Link } from "react-router-dom/dist";

export default function NavBar(){
    return(
        <div className="sticky top-0 left-0 pl-24 pr-16  pt-4 pb-4 text-white flex justify-between items-center">
        <Link to='/' className="text-2xl  text-black font-semibold">JL</Link>
        <div className="flex gap-3 ">
        <Link to='/login' className='text-sm text-[#4763E0] rounded-lg p-2 font-semibold border border-[#4763E0]'>Log in</Link>
        <Link to='/SignUp' className='text-sm bg-[#4763E0] text-white rounded-lg p-2 font-semibold'>Sign up</Link>
        </div>
    </div>
    )
}