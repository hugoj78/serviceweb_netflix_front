import React, { useState, useEffect, Fragment }  from 'react';
import { Listbox, Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom';
import { CheckIcon, SelectorIcon, ChevronLeftIcon } from '@heroicons/react/solid'

const UpdateMediaDescription = () => {


    const people = [
        { name: 'Choose Your User', admin: false, id: 999999999999 }
      ]
      
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
      
      
    
    const [users, setUsers] = useState([]);  
    
    useEffect(() => {
        fetch(process.env.REACT_APP_SERVICEWEB_NETFLIX_COMPTE + "/users", 
        {'Access-Control-Allow-Origin' : '*', 
        'accept': 'application/json'
    }
    )
    .then(res => res.json())
    .then(
        (data) => {
            console.log(data)
            setUsers(data);
        },
        (err) => {
            console.log(err)
        }
        )
    }, [])
      
          
    const [selected, setSelected] = useState(people[0]);

    let navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        let credentials = {
            "description": e.target.description.value
        };

        const requestOptions = {
            method: 'PUT',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' },
            body: JSON.stringify(credentials)
        };
        
        fetch(process.env.REACT_APP_SERVICEWEB_NETFLIX_MEDIA + `/gestion/${e.target.idmedia.value}/${selected.id}`, 
        requestOptions)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data)
                    if(data != null) {
                        navigate("/admin")
                    }
                },
                (err) => {
                    console.log(err)
                }
            )
     
     }

return(
    <div>
    <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Update Description Media Page - Admin</h1>
        </div>
    </header>
    <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <a href='/admin' className="flex"> <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />  Return </a> 
            <div className="py-12 bg-white">
                <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="mt-10 md:mt-0 md:col-span-4">
                    <form onSubmit={handleRegister}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">


                            <Listbox value={selected} onChange={setSelected}>
                                {({ open }) => (
                                    <>
                                    <Listbox.Label className="block text-sm font-medium text-gray-700">Assigned to</Listbox.Label>
                                    <div className="mt-1 relative">
                                        <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <span className="w-full inline-flex truncate">
                                            <span className="truncate">{selected.name}</span>
                                        </span>
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </span>
                                        </Listbox.Button>

                                        <Transition
                                        show={open}
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                        >
                                        <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                            {users.map((person) => (
                                            <Listbox.Option
                                                key={person.name}
                                                className={({ active }) =>
                                                classNames(
                                                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                    'cursor-default select-none relative py-2 pl-3 pr-9'
                                                )
                                                }
                                                value={person}
                                            >
                                                {({ selected, active }) => (
                                                <>
                                                    <div className="flex">
                                                    <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'truncate')}>
                                                        {person.name}
                                                    </span>
                                                    <span className={classNames(active ? 'text-indigo-200' : 'text-gray-500', 'ml-2 truncate')}>
                                                        {person.admin ? "Admin" : "Not Admin"}
                                                    </span>
                                                    </div>

                                                    {selected ? (
                                                    <span
                                                        className={classNames(
                                                        active ? 'text-white' : 'text-indigo-600',
                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                        )}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                    ) : null}
                                                </>
                                                )}
                                            </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                        </Transition>
                                    </div>
                                    </>
                                )}
                            </Listbox>

                            <br/>


                            <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="idmedia" className="block text-sm font-medium text-gray-700">
                                ID Media
                            </label>
                            <input
                                type="text"
                                name="idmedia"
                                id="idmedia"
                                autoComplete="given-name"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            </div>

                            <br/>

                            <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                New description
                            </label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                autoComplete="description"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            </div>

                        </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Update
                        </button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
                </div>
            </main>
        </div>
    );
}
export default UpdateMediaDescription;