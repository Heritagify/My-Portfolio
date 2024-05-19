import './globals.css'
import { useAos } from '../components/useAos';


export default function Page() {
  useAos();

  return(
    <div>
      <h1
      className="bg-zinc-950 dark:bg-white text-blue-800 text-xl"
      >Hello, Heritage is here for Next.js!</h1>
      <div data-aos="fade-left"
      className='border-2 border-red-700 w-fit p-5'>
        <h1
        className="bg-zinc-950 dark:bg-white font-bold text-emerald-800 text-2xl">Astalavi</h1>
      </div>
    </div>
  )
}