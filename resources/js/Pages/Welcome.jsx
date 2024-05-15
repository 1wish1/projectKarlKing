import { Link, Head } from '@inertiajs/react';
import logo from "./asset/logo.png"
import padlock from "./asset/padlock.png"
import loupe from "./asset/loupe.png"
import Navigation from './LandingPage/Navigation';
import Card from './LandingPage/Card';
import ContactUs from './LandingPage/ContactUs';
import chatting from "./asset/chatting.png"
import evaluation from "./asset/evaluation.png"
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <Navigation auth={auth}/>
            <main >
            <section  className=" flex flex-col md:flex-row relative top-16 ">
              <section className="relative w-1/2 max-xl:w-full bg-slate-800 p-4">
                <h1 className="pt-12 pl-12 w-3/4 text-4xl max-xl:text-lg max-xl:font-bold font-ubuntu font-normal bg-slate-600 text-white ">
                  Everything you and your business need to work efficiently, all in one place
                </h1>
                <p className="pt-5 pl-12 font-ubuntu font-bold w-3/4 max-xl:font-normal max-xl:w-full  text-white  ">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae eum, officiis consectetur error doloribus quaerat recusandae asperiores assumenda suscipit. Odit doloribus quaerat quis nesciunt rerum harum, enim voluptatibus quia nihil.
                </p>
                <button type="button" className="mt-6 ml-12 w-40 h-14 bg-blue-700">
                  Get Started <span>&#8594;</span>
                </button>
              </section>
              <section className=" flex justify-center w-full bg-slate-600">
                <img src={logo} alt="logo" className="m-auto p-7"/>
              </section>
            </section>
            <section className=" flex w-full h-60 mt-14 items-center justify-center text-4xl font-semibold">
              <p className=" text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </section>
            <section className=" flex-row flex  justify-center items-center gap-10  w-full max-md:w-full  max-md:flex-col m-auto">
              <Card title='ang padlock ' image={padlock} TextContent="Lorem ipsum dolor sit amet    consectetur, adipisicing elit." ></Card>
              <Card title='and loupe' image={loupe} TextContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit." ></Card>
              <Card title='and loupe' image={chatting} TextContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit." ></Card>
              <Card title='and loupe' image={evaluation} TextContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit." ></Card>
            </section>
            <section className=" flex-col w-full h-60 mt-14 items-center justify-center text-center ">
              <p className="text-4xl font-semibold ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </section>
            <ContactUs/>

          </main>

        </>
    );
}
