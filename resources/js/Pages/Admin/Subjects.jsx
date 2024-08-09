import AlertCard from '@/Components/CDMLMS/AlertCard';
import CardsWithSticky from '@/Components/CDMLMS/CardsWithSticky';
import SingleCardCenter from '@/Components/CDMLMS/SingleCardCenter';
import Dropdown from '@/Components/Dropdown';
import Layout from '@/Layouts/Layout';
import { BookOpenIcon, CheckIcon, ChevronDownIcon, EllipsisVerticalIcon, MagnifyingGlassIcon, PencilIcon, TrashIcon, XCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
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
    year: '1st',
    sem: '1st',
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
    <Layout
      isAdmin={auth.isAdmin}
      user={auth.user}
      icon={<BookOpenIcon className='w-9 h-9 text-gray-500' />}
      headerTitle="Subjects"
      headerSubtitle="Admin Subjects"
    >
      <Head title='Admin Subjects' />
      <CardsWithSticky
        cards={
          <SingleCardCenter
            bodyPadding='p-4'
            table={
              <>
                <div className='w-1/2 md:w-1/3 mb-4 relative'>
                  <input className='form-control'
                    placeholder='Search Subject'
                    type='search'
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
                      <XCircleIcon onClick={() => { router.visit(route('admin.subjects')) }} className='absolute !-translate-y-2/4 !m-0 !top-2/4 right-3  w-8 h-8 cursor-pointer' />
                    )
                  }
                </div>
                <div className='table-responsive'>
                  <table className='datatable-table text-center relative'>
                    {(warning && (
                      <>
                        <div className='absolute w-full h-full bg-black opacity-80 z-[8]'>

                        </div>
                        <AlertCard
                          type="alert-warning"
                          title={`Delete ${selectedSubject.code}?`}
                          message="The subject will be deleted forever and any data related to it"
                          actions={
                            <>
                              <Link className='border-none' as='button' href={route('subjects.destroy', selectedSubject.id)} method='delete'>
                                <CheckIcon className="h-6 w-6 hover:text-[#8b0d00]" />
                              </Link>
                              <Link className='border-none' onClick={() => { setWarning(false) }} preserveScroll={true}>
                                <XMarkIcon className="h-6 w-6 text-[#926100] hover:text-[#8b0d00]" />
                              </Link>
                            </>
                          }
                        />
                      </>
                    ))}
                    <thead>
                      <tr className='card-header'>
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
                          <tr key={subject.id} className={`${subject.user_id == null ? "bg-red-100" : ""} ${subject.id == selectedSubject.id ? "!bg-blue-100 !font-bold" : ""}`}>
                            <td key={subject.user_id}>{subject.instructor}</td>
                            <td>{subject.course}</td>
                            <td>{subject.code}</td>
                            <td>{subject.description}</td>
                            <td>{`${subject.year}-${subject.sem}`} </td>
                            <td>
                              <Dropdown>
                                <Dropdown.Trigger>
                                  <button className='rounded-[50%] hover:bg-gray-200 p-1' type='button'>
                                    <EllipsisVerticalIcon className='w-5 h-5 text-black' />
                                  </button>
                                </Dropdown.Trigger>
                                <Dropdown.Content contentClasses='flex flex-col gap-2 text-center !font-normal' margin='mt-0' width='w-auto'>
                                  <button className='hover:bg-green-50 '
                                    onClick={() => {
                                      if (editing && (subject.id != selectedSubject.id)) {
                                        setSelectedSubject(subject);
                                        setData(subject);
                                      } else if (!editing && selectedSubject.id == '') {
                                        setEditing(true);
                                        setSelectedSubject(subject);
                                        setData(subject);
                                      } else if (editing && subject.id == selectedSubject.id) {
                                        setEditing(false);
                                        setSelectedSubject(empty);
                                        setData(empty);
                                      }
                                      if (warning) {
                                        setWarning(false);
                                      }
                                    }}
                                  >
                                    {subject.id == selectedSubject.id ? "Cancel" : "Edit"}
                                  </button>
                                  <button className='hover:bg-green-50 '
                                    onClick={() => {
                                      if (subject.id == selectedSubject.id) {
                                        setWarning(!warning);
                                      } else if (!editing && selectedSubject.id == '') {
                                        setEditing(true);
                                        setSelectedSubject(subject);
                                        setData(subject);
                                        setWarning(!warning);
                                      }
                                    }}
                                  >
                                    Delete
                                  </button>
                                  <Link className='hover:bg-green-50 px-1' as='button'
                                    href={route('schedules.view', subject.id)}
                                  >
                                    Schedules
                                  </Link>
                                </Dropdown.Content>
                              </Dropdown>

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
                    <div className='flex flex-row'>
                      {
                        paginated.links.map(
                          (link, index) => {
                            if (index == 0 || index == paginated.links.length - 1) {
                              return (
                                <Link
                                  dangerouslySetInnerHTML={{ __html: index == 0 ? "&laquo;" : "&raquo;" }}
                                  className={`flex flex-row p-2 h-8 items-center place-content-center ${link.url == null && ('text-gray-500')} ${link.active ? "bg-[#044721] !border-[#044721] text-white" : ""}`}
                                  href={link.url}
                                  as='button'
                                  preserveScroll={true}
                                  disabled={link.url == null}
                                />
                              )

                            } else {
                              return (
                                <Link
                                  dangerouslySetInnerHTML={{ __html: link.label }}
                                  className={`flex flex-row p-2 h-8 items-center place-content-center ${link.url == null && ('text-gray-500')} ${link.active ? "bg-[#044721] !border-[#044721] text-white" : ""}`}
                                  href={link.url}
                                  as='button'
                                  preserveScroll={true}
                                  disabled={link.url == null}
                                />
                              )
                            }
                          }
                        )
                      }
                    </div>
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
                  <Dropdown.Content margin='mt-0' width='w-full'>
                    <div onClick={() => { setData('year', '1st') }} className='cursor-pointer py-2 hover:bg-green-50'>1st</div>
                    <div onClick={() => { setData('year', '2nd') }} className='cursor-pointer py-2 hover:bg-green-50'>2nd</div>
                    <div onClick={() => { setData('year', '3rd') }} className='cursor-pointer py-2 hover:bg-green-50'>3rd</div>
                    <div onClick={() => { setData('year', '4th') }} className='cursor-pointer py-2 hover:bg-green-50'>4th</div>
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
                  <Dropdown.Content margin='mt-0' width='w-full'>
                    <div onClick={() => { setData('sem', '1st') }} className='cursor-pointer py-2 hover:bg-green-50'>1st</div>
                    <div onClick={() => { setData('sem', '2nd') }} className='cursor-pointer py-2 hover:bg-green-50'>2nd</div>
                    <div onClick={() => { setData('sem', 'intersem') }} className='cursor-pointer py-2 hover:bg-green-50'>intersem</div>
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
    </Layout>
  )
}