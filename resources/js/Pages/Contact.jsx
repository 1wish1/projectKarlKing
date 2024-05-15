
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Contact({ auth ,  User}) {
  const data = JSON.stringify(auth.user.type);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className=" ml-20 font-semibold text-xl text-gray-800 leading-tight">  Contact
          </h2>}
        >
            <Head title="contact" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <section className="bg-gray-800 text-gray-100 px-8 py-12">
        <div className="text-center w-full">
            <h1 className="text-4xl lg:text-6xl">Contact Form</h1>
        </div>
        <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
            <div className="flex flex-col justify-between">
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <form action="" method="" onSubmit={(e)=> e.preventDefault()}>
                <div>
                    <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                    <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    name="FullName" type="email" placeholder="" required/>
                </div>
                <div>
                    <span className="uppercase text-sm text-gray-600 font-bold">To:</span>
                    <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    name="FullName" type="email" placeholder="" required/>
                </div>
                <div className="mt-8">
                    <span className="uppercase text-sm text-gray-600 font-bold">Subject</span>
                    <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    name="email" type="text" required/>
                </div>
                <div className="mt-8">
                    <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                    <textarea
                        className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required>
                    </textarea>
                </div>
                <div className="mt-8">
                    <button
                        className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline" type="submit">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
  </section>
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    );
}
