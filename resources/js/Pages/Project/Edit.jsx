import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import SelectInput from '@/Components/SelectInput'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Link, useForm } from '@inertiajs/react'
import React from 'react'

function Edit({auth,User}) {

  const {data,setData, put,errors,reset} = useForm(
    {
      name: User.data.name ||"",
      email: User.data.email ||"",
      password: User.data.password ||"",
      address: User.data.address ||"",
      contact_Number: User.data.contact_Number ||"",
      type: User.data.type ||"",
    })

    const onSubmit = async (e) => {
      e.preventDefault();

      put(route("user.update",User.data.id));
    }

  return (
    <AuthenticatedLayout
    user={auth.user}
    header={<><h2 className=" ml-20 font-semibold text-xl text-gray-800 leading-tight">
    Edit or Ban {User.data.name}</h2>
    <h1 className=' ml-20 '>To ban user just Edit password and Email</h1>
    </>
    }>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                      <form onSubmit={onSubmit} className=' p-4 sm:p8 bg-slate-100 shadows sm:rounded-lg'>
                          <div>

                            <InputLabel value="Name" htmlFor="name" />
                            <TextInput
                                name="name"
                                id="name"
                                type="text"
                                value={data.name}
                                onChange={(e) => setData( "name", e.target.value )}
                            />
                            <InputLabel value="Email" htmlFor="email" />
                            <TextInput
                                name="email"
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={(e) => setData( "email", e.target.value )}
                            />
                            <InputLabel value="Address" htmlFor="address" />
                            <TextInput
                                name="address"
                                id="address"
                                type="text"
                                value={data.address}
                                onChange={(e) => setData( "address", e.target.value )}
                            />
                            <InputLabel value="Password" htmlFor="password" />
                            <TextInput
                                name="password"
                                id="password"
                                type="password"
                                value={data.password}
                                onChange={(e) => setData( "password", e.target.value )}
                            />
                            <InputLabel value="Contact Number" htmlFor="contact_Number" />
                            <TextInput
                                name="contact_Number"
                                id="contact_Number"
                                type="number"
                                value={data.contact_Number}
                                onChange={(e) => setData( "contact_Number", e.target.value )}
                            />
                            <InputLabel value="Choose" htmlFor="type" />
                            <SelectInput
                              name="type"
                              id="type"
                              onChange={(e) => setData( "type", e.target.value )}
                            >
                               <option value="">type</option>
                              <option value="tenant">tenant</option>
                              <option value="owner">owner</option>
                            </SelectInput>
                             <br/>
                             <br/>
                             <div className='flex gap-2'>

                              <Link rel="stylesheet" href={route("user.index")} >
                                  <PrimaryButton className=' bg-blue-300'>Cancel</PrimaryButton>
                              </Link>
                              <PrimaryButton className=' bg-red-500'>Submit</PrimaryButton>
                             </div>

                            <InputError message={errors.name}/>

                          </div>
                      </form>

                    </div>
                </div>
            </div>

    </AuthenticatedLayout>
  )
}

export default Edit
