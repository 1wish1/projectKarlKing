import { Link ,router,useForm} from '@inertiajs/react';

import PrimaryButton from './PrimaryButton';
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import DangerButton from './DangerButton';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
function OwnerTable({datas, meta ,queryParams}) {
  const [hideDirector, setHideDirector] = React.useState(false);
  const [records, setRecord] =useState(datas);

  queryParams = queryParams||{}

  const searchFieldChange = (name , value) =>{
    if (value){
      queryParams[name] = value;
    }else{
      delete queryParams[name];
    }
    router.get(route('tenant.index'),queryParams);
  }
  const onkeypress = (name, e) =>{
    if (e.key !== 'Enter') {
     return;
    }
    searchFieldChange(name , e.target.value)
  }

  const columns = [
    {
      name: 'Name',
      selector: row =>

      <div className=' font-extrabold text-base'> {row.name}</div>,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => <div className=' text-red-900 font-extrabold text-base'> {row.email}</div>,
      sortable: true,
    },
    {
      name: 'Address',
      selector: row => row.Address,
      sortable: true,
    },
    {
      name: 'Boarding House Name',
      selector: row =>  <div className=' font-extrabold text-base'> {row.name}</div>,
      sortable: true,
    },
    {
      name: 'contact_Number',
      selector: row => row.contact_Number,
      sortable: true,
      omit: hideDirector,
    },
    {
      name: 'Facebook',
      selector: row => row.Facebook,
      sortable: true,
      omit: hideDirector,
    },
    {
      name: 'Request',
      selector: row => <PrimaryButton  className=' mr-4 bg-green-300  '>
                            <Link href={route("User.show",row)} >Request</Link>
                        </PrimaryButton>,
      sortable: true,
      omit: hideDirector,
    },



  ]
 return(
    <>
      <div className=' pt-10'>
      <DangerButton className=" ml-10 bg-red-500" onClick={() => setHideDirector(!hideDirector)}>Hide Some colume</DangerButton >
        <div className=' float-end gap-5 items-center flex flex-row mr-14'>
         <h1 className=' '>search</h1>
          <TextInput placeholder="Name"
            onBlur={e => searchFieldChange('name',e.target.value)}
            defaultValue = {queryParams.name}
            onKeyPress={e => onkeypress('name',e)}
          ></TextInput>

           <TextInput placeholder="House Name"
            onBlur={e => searchFieldChange('BH_name',e.target.value)}
            defaultValue = {queryParams.BH_name}
            onKeyPress={e => onkeypress('BH_name',e)}
          ></TextInput>

              <Link href={"/Tenant/Dashboard"}><PrimaryButton className=' text-white'>Refresh
              </PrimaryButton> </Link>

        </div>

      </div>
      <DataTable className='-z-0'
        columns={columns}
        data={records}
        fixedHeader
      >
      </DataTable>
    </>
 )
}

export default OwnerTable
