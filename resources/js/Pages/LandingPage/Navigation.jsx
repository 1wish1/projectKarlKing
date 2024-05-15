
import logo from "../asset/logo.png"
import { Link } from "@inertiajs/react"

function Navigation({auth}) {

  return (
    <>
      <nav className=" w-full  h-16 flex justify-between bg-slate-400 items-center  fixed z-50">
          <header className=' flex gap-5 px-5  text-center '>
              <img className=" w-11 h-10 mt-2" src={logo} alt="pic" />
              <Link href={route('dashboard')}  className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white">
                <h1 className="  text-xl  m-auto font-extrabold mt-2 hover:text-slate-200">
                  Logo
                </h1>
              </Link>
          </header>
          <section className="flex gap-5 px-5">
          {auth.user ? (
            <Link
                href={route('dashboard')}
                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
            >
                Dashboard
            </Link>
          ) : (
            <>
                <Link
                    href={route('login')}
                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                >
                    Log in
                </Link>
                <Link
                    href={route('register')}
                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                >
                    Register
                </Link>
            </>
            )}
          </section>
      </nav>
    </>

  )
}

export default Navigation
