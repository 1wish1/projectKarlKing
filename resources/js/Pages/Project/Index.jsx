import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Pagination from "@/Components/pagination";
import Tables from '../../Components/Table';
import { Head } from '@inertiajs/react';

export default function Index({auth ,  User ,queryParams = null }) {




  const data = User.data.map((user) => (

    {
        id: user.id,
        name: user.name,
        email: user.email,
        status: user.status,
        address: user.address,
        type: user.type,
        contact_Number: user.contact_Number,
        Facebook: user.Facebook,
        BH_name: user.BH_name,
        created_at: user.created_at,
        updated_at: user.updated_at
    }
  ))




  return (
    <AuthenticatedLayout
        user={auth.user}
        header={<h2 className=" ml-20 font-semibold text-xl text-gray-800 leading-tight">Users</h2>}
    >
      <Head title="User"/>


      <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  <div className="p-6 text-gray-900">

                    <Tables datas={data} meta={User.meta} queryParams={queryParams}/>
                    <Pagination Links={User.links} meta={User.meta}/>
                  </div>
              </div>
          </div>
      </div>


    </AuthenticatedLayout>
  )
}

