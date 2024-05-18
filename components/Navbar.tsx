import '../app/globals.css'





export default function Navbar() {
    return (
        <div className='flex justify-between mx-4 p-2 items-center'>
            <h1 className='italic text-cyan-900 font-semibold text-2xl'>HERITAGIFY</h1>
            <div className='flex space-x-5 text-sm '>
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Contact Us</h1>
                <h1>Blog</h1>
            </div>
            <div>
                <button className='bg-green-800 text-cyan-200 p-1'>Sign In</button>
                <button>Sign Up</button>
            </div>
        </div>
    );
}