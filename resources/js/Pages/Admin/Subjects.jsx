import CardsWithSticky from '@/Components/CDMLMS/CardsWithSticky';
import SingleCardCenter from '@/Components/CDMLMS/SingleCardCenter';
import Dropdown from '@/Components/Dropdown';
import Admin from '@/Layouts/Admin'
import { BookOpenIcon, ChevronDownIcon, MagnifyingGlassIcon, PencilIcon, TrashIcon, XCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Head, Link, router, useForm } from '@inertiajs/react';
import React, { useEffect, useState } from 'react'

export default function Subjects({ auth, paginated, searched = '' }) {

  /**
    * Empty Instance of Subjects
    */
  const empty = {
    id: '',
    code: '',
    description: '',
    year: '',
    sem: '',
  };

  const [selectedSubject, setSelectedSubject] = useState({
    id: '',
    code: '',
    description: '',
    year: '',
    sem: '',
  });

  const [editing, setEditing] = useState(false);

  const [warning, setWarning] = useState(false);

  const [search, setSearch] = useState(searched);


  /**
   * Form for submition
   */
  const { data, setData, post, patch, errors, hasErrors, processing, reset, recentlySuccessful } = useForm({
    id: '',
    code: '',
    description: '',
    year: '1st',
    sem: '1st',
  });

  /**
   * @function Post/Patch
   */
  const submit = (e) => {
    e.preventDefault();
    if (editing) {
      patch(route('subjects.update', data.id), { preserveScroll: true });
    } else {
      post(route('subjects.store'), { onSuccess: () => reset() });
    }
  };

  useEffect((() => {
    console.log(paginated);
  }), []);

  return (
    <Admin
      user={auth.user}
      icon={<BookOpenIcon className='w-5 h-5 text-gray-500' />}
      headerTitle="Subjects"
      headerSubtitle="ICS Subjects"
    >
      <Head title='Subjects' />
      <CardsWithSticky
        cards={
          <SingleCardCenter
            table={
              <>
                <div className='w-1/3 mb-4 relative'>
                  <input className='form-control'
                    placeholder='Search Subject'
                    value={search}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        console.log(search);
                        router.visit(route('admin.subjects.search', search), { preserveScroll: true });
                      }
                    }}
                    onChange={(e) => { setSearch(e.target.value); }}
                  />
                  {
                    search == '' ? (
                      <MagnifyingGlassIcon className='absolute !-translate-y-2/4 !m-0 !top-2/4 right-3  w-8 h-8 text-gray-600' />
                    ) : (
                      <Link className='absolute !-translate-y-2/4 !m-0 !top-2/4 right-3  ' href={route('admin.subjects')} as='button'>
                        <XCircleIcon className='w-8 h-8 text-gray-600' />
                      </Link>
                    )
                  }
                </div>
                <table className='datatable-table text-center'>
                  <thead>
                    <tr>
                      <th>Instructor</th>
                      <th>Course</th>
                      <th>Code</th>
                      <th>Description</th>
                      <th>Year/Sem</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      paginated.data.map(subject =>
                        <tr key={subject.id} className={`${subject.user_id == null ? "bg-red-100" : ""}`}>
                          <td key={subject.user_id}>{subject.instructor}</td>
                          <td>{subject.course}</td>
                          <td>{subject.code}</td>
                          <td>{subject.description}</td>
                          <td>{`${subject.year}-${subject.sem}`} </td>
                          <td>
                            <button className='btn-primary mx-1 rounded-[50%] bg-blue-500 hover:bg-blue-700'>
                              <PencilIcon className='w-5 h-5 m-1 text-white' />
                            </button>
                            <button className='btn-primary mx-1 rounded-[50%] bg-red-500 hover:bg-red-700'>
                              <TrashIcon className='w-5 h-5 m-1 text-white' />
                            </button>
                          </td>
                        </tr>
                      )
                    }
                  </tbody>

                </table>
                <div className='w-full flex flex-row justify-between'>
                  <div>
                    <p>Current page: {paginated.current_page}</p>
                  </div>
                  <div className='flex flex-row border border-gray-400 rounded text-[#044721]'>
                    {
                      paginated.links.map(link =>
                        <Link dangerouslySetInnerHTML={{ __html: link.label }} className={`flex flex-row p-2 h-11 border-r-2 border-gray-400 ${link.url == null && ('text-gray-500')} ${link.active ? "bg-[#044721] !border-[#044721] text-white" : ""}`} href={link.url} as='button' disabled={link.url == null} preserveScroll={true} />


                      )
                    }
                  </div>
                </div>
              </>

            }
          />

        }
        stickyNavHeader="Subject Details"
        stickyNavBody={
          <form onSubmit={submit} >
            <div className="mb-3">
              <label className="small !text-[16px] mb-1" >Subject Code</label>
              <input className='form-control' type="text" placeholder="Subject Code" value={data.code} onChange={(e) => { setData('code', e.target.value) }} />
            </div>
            <div className="mb-3">
              <label className="small !text-[16px] mb-1" >Description</label>
              <input className="form-control" id="inputDescription" type="text" placeholder="Description" value={data.description} onChange={(e) => { setData('description', e.target.value) }} />
            </div>
            <div className='mb-3 flex flex-row text-center'>
              <div className='w-1/2'>
                <label className="small !text-[16px] mb-1" >Year</label>
                <Dropdown>
                  <Dropdown.Trigger>
                    <button className='form-control text-start mr-1 relative' type='button'>
                      {data.year}
                      <ChevronDownIcon className='absolute -translate-y-2/4 top-2/4 right-3 w-5 h-5' />
                    </button>
                  </Dropdown.Trigger>
                  <Dropdown.Content>
                    <div onClick={() => { setData('year', '1st') }} className='cursor-pointer py-2 hover:bg-green-100'>1st</div>
                    <div onClick={() => { setData('year', '2nd') }} className='cursor-pointer py-2 hover:bg-green-100'>2nd</div>
                    <div onClick={() => { setData('year', '3rd') }} className='cursor-pointer py-2 hover:bg-green-100'>3rd</div>
                    <div onClick={() => { setData('year', '4th') }} className='cursor-pointer py-2 hover:bg-green-100'>4th</div>
                  </Dropdown.Content>
                </Dropdown>
              </div>
              <div className='w-1/2'>
                <label className="small !text-[16px] mb-1" >Sem</label>
                <Dropdown>
                  <Dropdown.Trigger>
                    <button className='form-control text-start ml-1 relative' type='button'>
                      {data.sem}
                      <ChevronDownIcon className='absolute -translate-y-2/4 top-2/4 right-3 w-5 h-5' />
                    </button>
                  </Dropdown.Trigger>
                  <Dropdown.Content>
                    <div onClick={() => { setData('sem', '1st') }} className='cursor-pointer py-2 hover:bg-green-100'>1st</div>
                    <div onClick={() => { setData('sem', '2nd') }} className='cursor-pointer py-2 hover:bg-green-100'>2nd</div>
                  </Dropdown.Content>
                </Dropdown>
              </div>
            </div>
            <div className='flex flex-row'>
              <button className="btn btn-primary" type="submit" disabled={processing}>
                {
                  editing ? (
                    "Edit"
                  ) : (
                    "Add"
                  )
                }
              </button>
              {
                hasErrors && (
                  <div className="alert alert-danger !py-2 !pt-3 !my-0 ml-2 !text-[12px]" role="alert">
                    {errors.subject}
                  </div>
                )
              }
              {
                recentlySuccessful && (
                  <div className="alert alert-success !py-2 !pt-3 !my-0 ml-2 !text-[12px]" role="alert">
                    {
                      editing ? (
                        "Edit "
                      ) : (
                        "Add "
                      )
                    } Succesful!
                  </div>
                )
              }
            </div>
          </form>
        }
      />
    </Admin>
  )
}