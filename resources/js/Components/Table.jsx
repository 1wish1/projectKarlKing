import { Link ,router,useForm} from '@inertiajs/react';
import PrimaryButton from './PrimaryButton';
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import DangerButton from './DangerButton';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
function table({datas, meta ,queryParams}) {
  const [hideDirector, setHideDirector] = React.useState(false);
  const [records, setRecord] =useState(datas);

  queryParams = queryParams||{}

  const searchFieldChange = (name , value) =>{
    if (value){
      queryParams[name] = value;
    }else{
      delete queryParams[name];
    }
    router.get(route('user.index'),queryParams);
  }
  const onkeypress = (name, e) =>{
    if (e.key !== 'Enter') {
     return;
    }
    searchFieldChange(name , e.target.value)
  }

  const columns = [
    {
      name: 'Id',
      selector: row => row.id,
      sortable: true,

    },
    {
      name: 'Status',
      selector: row =>
  <>

      {row.status == "offline" ?
       <PrimaryButton className=' bg-red-400 text-white'>
          Offline
       </PrimaryButton>:
       <PrimaryButton className=' bg-green-400 text-white'>
          Online
      </PrimaryButton>}
  </>,
      sortable: true,
    },
    {
      name: 'Name',
      sortable: true,
      selector: row =>
            <>
              <Link href={route("user.show",row.id)} >{row.name}</Link>
            </>
    },
    {
      name: 'Email',
      selector: row => row.email,
      gap:2,
      sortable: true,
    },
    {
      name: 'Address;',
      selector: row => row.address,
      sortable: true,
      omit: hideDirector,

    },
    {
      name: 'Type',
      selector: row =>
      <>

          {row.type === "tenant" ?
           <PrimaryButton className=' bg-blue-500 text-white'>
              tenant
           </PrimaryButton>:
           <PrimaryButton className=' bg-green-500 text-white'>
              Owner
          </PrimaryButton>}

      </>
,
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
      name: 'BH_name',
      selector: row => row.BH_name,
      sortable: true,
      omit: hideDirector,
    },
    {
      name: 'created_at',
      selector: row => row.created_at,
      sortable: true,
      omit: hideDirector,
    },
    {
      name: 'updated_at;',
      selector: row => row.updated_at,
      sortable: true,
      omit: hideDirector,
    },
    {
      name: 'Activity',
      grow: 2,
      selector: row =>

            <>
                  <PrimaryButton  className=' mr-4 bg-green-300  '>
                      <Link href={route("user.edit",row.id)} >Edit</Link>
                  </PrimaryButton>
              </>


    },

  ]


 return(
  <>
  <DangerButton className=" bg-red-500" onClick={() => setHideDirector(!hideDirector)}>Hide Some colume</DangerButton >
  <DangerButton className=" bg-orange-500 ml-5"><Link href={route("user.create")}>Add user</Link></DangerButton >
    <PrimaryButton className='flex float-end text-white'>{meta.per_page}  data per page / {meta.to}  total page</PrimaryButton>
      <div className=' pt-10'>
        <div className=' float-end gap-5 items-center flex flex-row mr-14'>
         <h1 className=' '>search</h1>
         <SelectInput
            className=""
            defaultValue = {queryParams.type}
            onChange={(e) =>
              searchFieldChange("type",e.target.value)}
         >
          <option value="">Type</option>
          <option value="tenant">tenant</option>
          <option value="owner">owner</option>

         </SelectInput>
         <SelectInput
            className=""
            defaultValue = {queryParams.status}
            onChange={(e) =>
              searchFieldChange("status",e.target.value)}
         >
          <option value="">Status</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>

         </SelectInput>
          <TextInput placeholder="Name"
            onBlur={e => searchFieldChange('name',e.target.value)}
            defaultValue = {queryParams.name}
            onKeyPress={e => onkeypress('name',e)}
          ></TextInput>

              <Link href={"/user"}><PrimaryButton className=' text-white'>Refresh
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

export default table
