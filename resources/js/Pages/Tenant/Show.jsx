import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import React from 'react'

function Show({auth,Owner}) {

  const data = Owner.data;


  return (
    <AuthenticatedLayout
        user={auth.user}
        header={<h2 className=" ml-20 font-semibold text-xl text-gray-800 leading-tight">Owner Profile</h2>}
    >
      <div className="py-12">
        <div>{JSON.stringify(Owner)}</div>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  <div className="p-6 text-gray-900">
              <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
                <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                    <div className="w-full">
                        <dl className="text-gray-900 divide-y divide-gray-200  ">
                            <div className="flex flex-col pb-3">
                                <dt className="mb-1 text-gray-500 md:text-lg ">Name</dt>
                                <dd className="text-lg font-semibold">{data.name}</dd>
                            </div>
                            <div className="flex flex-col py-3">
                                <dt className="mb-1 text-gray-500 md:text-lg ">Email</dt>
                                <dd className="text-lg font-semibold">{data.email}</dd>
                            </div>
                            <div className="flex flex-col py-3">
                                <dt className="mb-1 text-gray-500 md:text-lg ">Address</dt>
                                <dd className="text-lg font-semibold">{data.address}</dd>
                            </div>
                        </dl>
                    </div>
                    <div className="w-full">
                        <dl className="text-gray-900 divide-y divide-gray-200">

                            <div className="flex flex-col pt-3 ">
                                <dt className="mb-1 text-gray-500 md:text-lg ">Phone Number</dt>
                                <dd className="text-lg mt-3 font-semibold">{data.contact_Number ? data.contact_Number:"null"}</dd>
                            </div>
                            <div className="flex flex-col pt-3">
                                <dt className="mb-1  text-gray-500 md:text-lg ">Facebook</dt>
                                <dd className="text-lg mt-3  font-semibold">{data.Facebook ? data.Facebook:"null"}</dd>
                            </div>

                            <div className="flex flex-col pt-3">
                                <dt className="mb-1 text-gray-500 md:text-lg ">Boarding House</dt>
                                <dd className="text-lg font-semibold">{data.BH_name ? data.BH_name:"null"}</dd>
                            </div>

                        </dl>
                    </div>
                </div>
            </div>
                  </div>
              </div>
          </div>
      </div>

    </AuthenticatedLayout>
  )
}

export default Show
