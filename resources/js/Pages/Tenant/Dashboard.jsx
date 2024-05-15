
import AdminSideBar from '@/Components/AdminSideBar';
import OwnerTable from "@/Components/OwnTable"
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth ,  owner, queryParams}) {
  const data = owner.data.map((user) => (

    {
        id:user.id,
        name: user.name,
        email: user.email,
        address: user.address,
        contact_Number: user.contact_Number,
        Facebook: user.Facebook,
        BH_name: user.BH_name,
    }
  ))

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className=" ml-20 font-semibold text-xl text-gray-800 leading-tight">Tenant Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                       <OwnerTable datas={data} meta={owner.meta} queryParams={queryParams}  ></OwnerTable>
                    </div>
                </div>
            </div>



        </AuthenticatedLayout>
    );
}
