import logo from "../Pages/asset/logo.png"
import { Link } from '@inertiajs/react';

export default function Guest({ children , message}) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div >
                <Link href="/">
                    <img src={logo} alt="logo" width={200} height={200} />
                </Link>

            </div>
            <h3>BoardingHouse</h3>
            <h1 className="text-2xl font-semibold text-gray-800">
                {message}
            </h1>
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                  {children}
            </div>

        </div>
    );
}
