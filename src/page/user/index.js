import React, { useState, useEffect, Fragment }  from 'react';
import { ChevronLeftIcon } from '@heroicons/react/solid'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const people = [
  { name: 'Choose Your User', country: '', id: 999999999999 }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const User = () => {
    
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
            setUsers(data);
        },
        (err) => {
            console.log(err)
        }
        )
    }, [])

    
    const [selected, setSelected] = useState(people[0]);
    
    const [kind, setKind] = useState("all");

    const [category, setCategory] = useState("all");
    const [moment, setMoment] = useState("morning");

    const[dataToReturn, setDataToReturn] = useState([]);


    const handleRegister = () => {

        if(selected.id === 999999999999 || category === "") {
            console.log("nooooo")
        } else {
            const requestOptions = {
                method: 'GET',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' }
            };
            
            fetch(process.env.REACT_APP_SERVICEWEB_NETFLIX_MEDIA + `/gestion/${selected.id}/${category}/${moment}/${kind}`, 
            requestOptions)
                .then(res => res.json())
                .then(
                    (data) => {
                        console.log(data)
                        if(data === null) {
                            setDataToReturn([])
                        } else  {
                            setDataToReturn(data)
                        }
    
                    },
                    (err) => {
                        console.log(err)
                    }
                )
        }
    }

    
return(
    <div>
    <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">User Page</h1>
        </div>
    </header>
    <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <a href='/' className="flex"> <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />  Return </a> 
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Choose ur ID */}
                    <Listbox value={selected} onChange={setSelected}>
                        {({ open }) => (
                            <>
                            <Listbox.Label className="block text-sm font-medium text-gray-700">Assigned to</Listbox.Label>
                            <div className="mt-1 relative">
                                <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <span className="w-full inline-flex truncate">
                                    <span className="truncate">{selected.name}</span>
                                    <span className="ml-2 truncate text-gray-500">{selected.country}</span>
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
                                                {person.country}
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

                    {/* Choose Your Kind */}
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                            Kind
                        </label>

                        <select onChange={e => setKind(e.currentTarget.value)}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>all</option>
                            <option>serie</option>
                            <option>film</option>
                        </select>
                    </div>

                    <br/>

                    
                    {/* Choose Your Category */}
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                            Category
                        </label>
                        <input
                        type="text"
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                        placeholder="all"
                        onChange={e => setCategory(e.currentTarget.value)}
                        />
                    </div>

                    <br/>

                    {/* Choose Your Moment */}
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                            Moment
                        </label>

                        <select onChange={e => setMoment(e.currentTarget.value)}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>morning</option>
                            <option>daily</option>
                            <option>evening</option>
                        </select>
                    </div>
                    
                    <br/>

                    {/* Button Research */}
                    <div className="px-4 py-3 bg-white text-right sm:px-6">
                        <button
                            onClick={handleRegister}
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Search
                        </button>
                    </div>

                    {/* Display Media */}
                    {dataToReturn.map(media => (
                                    <div key={media.id}>
                                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                            <div className="px-4 py-5 sm:px-6">
                                                <h3 className="text-lg leading-6 font-medium text-gray-900">User Information</h3>
                                                <p className="mt-1 max-w-2xl text-sm text-gray-500">Media details and application.</p>
                                            </div>
                                            <div className="border-t border-gray-200">
                                                <dl>
                                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">ID Media</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{media.id}</dd>
                                                </div>
                                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">ID Poster</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{media.id_poster}</dd>
                                                </div>
                                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">Poster</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <img
                                                            src={media.poster}
                                                            alt="poster"
                                                            className="bg-gray-100 rounded-lg max-w-xs"
                                                        />
                                                    </dd>
                                                </div>
                                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">Content</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <div className="aspect-w-16 aspect-h-9">
                                                            <iframe 
                                                            title={media.title} 
                                                            src={media.content.replace("watch?v=", "embed/")} 
                                                            frameBorder="0" 
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                            allowFullScreen></iframe>
                                                        </div>
                                                    </dd>
                                                </div>
                                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">Title</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{media.title}</dd>
                                                </div>
                                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">Description</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{media.description}</dd>
                                                </div>
                                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">Kind</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{media.kind}</dd>
                                                </div>
                                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">Category</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{media.category}</dd>
                                                </div>
                                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">Country</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{media.country}</dd>
                                                </div>
                                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">Release Date</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{media.release_date}</dd>
                                                </div>
                                                
                                                </dl>
                                            </div>
                                        </div>
                                        <br/>
                                    </div>
                                ))}

                </div>
            </div>
        </div>
    </main>
</div>
    );
}
export default User;