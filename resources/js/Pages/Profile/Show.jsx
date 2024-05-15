import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import React from 'react'

function Show({auth,User}) {

  const data = User.data;

 return (
    <AuthenticatedLayout
        user={auth.user}
        header={<h2 className=" ml-20 font-semibold text-xl text-gray-800 leading-tight">User Profile</h2>}
    >
      <div className="py-12">

          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  <div className="p-6 text-gray-900">
              <div class="w-full my-auto py-6 flex flex-col justify-center gap-2">
                <div class="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                    <div class="w-full">
                        <dl class="text-gray-900 divide-y divide-gray-200  ">
                            <div class="flex flex-col pb-3">
                                <dt class="mb-1 text-gray-500 md:text-lg ">Name</dt>
                                <dd class="text-lg font-semibold">{data.name}</dd>
                            </div>
                            <div class="flex flex-col py-3">
                                <dt class="mb-1 text-gray-500 md:text-lg ">Email</dt>
                                <dd class="text-lg font-semibold">{data.email}</dd>
                            </div>
                            <div class="flex flex-col py-3">
                                <dt class="mb-1 text-gray-500 md:text-lg ">Address</dt>
                                <dd class="text-lg font-semibold">{data.address}</dd>
                            </div>
                            <div class="flex flex-col py-3">
                                <dt class="mb-1 text-gray-500 md:text-lg ">Type</dt>
                                <dd class="text-lg font-semibold">{data.type}</dd>
                            </div>
                            <div class="flex flex-col pt-3">
                                <dt class="mb-1 text-gray-500 md:text-lg ">Updated at</dt>
                                <dd class="text-lg font-semibold">{data.updated_at}</dd>
                            </div>
                        </dl>
                    </div>
                    <div class="w-full">
                        <dl class="text-gray-900 divide-y divide-gray-200">
                            <div class="flex flex-col pb-3">
                                <dt class="mb-1 text-gray-500 md:text-lg ">Status</dt>
                                <dd class="text-lg font-semibold">{data.status}</dd>
                            </div>

                            <div class="flex flex-col pt-3 ">
                                <dt class="mb-1 text-gray-500 md:text-lg ">Phone Number</dt>
                                <dd class="text-lg mt-3 font-semibold">{data.contact_Number ? data.contact_Number:"null"}</dd>
                            </div>
                            <div class="flex flex-col pt-3">
                                <dt class="mb-1  text-gray-500 md:text-lg ">Facebook</dt>
                                <dd class="text-lg mt-3  font-semibold">{data.Facebook ? data.Facebook:"null"}</dd>
                            </div>

                            <div class="flex flex-col pt-3">
                                <dt class="mb-1 text-gray-500 md:text-lg ">Boarding House</dt>
                                <dd class="text-lg font-semibold">{data.BH_name ? data.BH_name:"null"}</dd>
                            </div>
                            <div class="flex flex-col pt-3">
                                <dt class="mb-1 text-gray-500 md:text-lg ">Created At</dt>
                                <dd class="text-lg font-semibold">https://www.teclick.com</dd>
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
