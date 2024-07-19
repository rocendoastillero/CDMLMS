import CardsWithSticky from '@/Components/CDMLMS/CardsWithSticky';
import SingleCardCenter from '@/Components/CDMLMS/SingleCardCenter';
import Admin from '@/Layouts/Admin'
import { BookOpenIcon } from '@heroicons/react/24/outline'
import { Head, Link, useForm } from '@inertiajs/react';
import React, { useEffect, useState } from 'react'

export default function Subjects({ auth, paginated }) {

  /**
    * Empty Instance of Subjects
    */
  const empty = {
    id: '',
    code: '',
    description: ''
  };

  const [selectedSubject, setSelectedSubject] = useState({
    id: '',
    code: '',
    description: ''
  });

  const [editing, setEditing] = useState(false);

  const [warning, setWarning] = useState(false);

  /**
   * Form for submition
   */
  const { data, setData, post, patch, errors, hasErrors, processing, reset, recentlySuccessful } = useForm({
    id: '',
    code: '',
    description: '',
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

  useEffect(() =>{
    console.log(paginated);
  },[]);

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
              <table className='datatable-table'>
                <thead>
                  <tr>

                    <th className='text-center'>Instructor</th>
                    <th className='text-center'>Course</th>
                    <th className='text-center'>Code</th>
                    <th className='text-center'>Description</th>
                    <th className='text-center'>Year/Sem</th>
                    <th className='text-center'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    paginated.data.map(subject => 
                      <tr key={subject.id}>
                        <td key={subject.user_id}>{subject.instructor}</td>
                        <td>{subject.course}</td>
                        <td>{subject.code}</td>
                        <td>{subject.description}</td>
                        <td>{`${subject.year} ${subject.sem}`} </td>
                        <td>
                          Actions
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
                      paginated.links.map(link =>
                          <Link className={`flex flex-row p-2 h-11 ${link.active? "bg-emerald-200" : ""}`} href={link.url} as='button'>
                            <p dangerouslySetInnerHTML={{ __html: link.label }}/>
                          </Link>
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
              <label className="small !text-[16px] mb-1" >Subject</label>
              <input className='form-control' type="text" placeholder="Subject Name" value={data.subject} onChange={(e) => { setData('subject', e.target.value) }} />
            </div>
            <div className="mb-3">
              <label className="small !text-[16px] mb-1" >Description</label>
              <input className="form-control" id="inputDescription" type="text" placeholder="Description" value={data.description} onChange={(e) => { setData('description', e.target.value) }} />
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