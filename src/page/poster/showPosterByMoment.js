import React, { useState, useEffect, Fragment }  from 'react';
import { Listbox, Transition } from '@headlessui/react'
import { ChevronLeftIcon, CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const people = [
  { id: 'idPoster', id_media: 'idMedia' }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const ShowPosterByMoment = () => {
    
    const [posters, setPosters] = useState([]);  
    
    useEffect(() => {
        fetch(process.env.REACT_APP_SERVICEWEB_NETFLIX_POSTER + "/posters", 
        {'Access-Control-Allow-Origin' : '*', 
        'accept': 'application/json'
        }
    )
    .then(res => res.json())
    .then(
        (data) => {
            setPosters(data);
        },
        (err) => {
            console.log(err)
        }
        )
    }, [])

    
    const [selected, setSelected] = useState(people[0]);

    const [hours, setHours] = useState("12");

    const[dataToReturn, setDataToReturn] = useState([]);



    const handleRegister = () => {

        if(selected.id === 'idPoster' ) {
            console.log("nooooo")
        } else {
            const requestOptions = {
                method: 'GET',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' }
            };

            var moment = "daily"

            if(hours >= 18) {
                moment = "evening"
            } else if(hours <= 10) {
                moment = "morning"
            }

            
            fetch(process.env.REACT_APP_SERVICEWEB_NETFLIX_POSTER + `/posters/${selected.id_media}/${moment}`, 
            requestOptions)
                .then(res => res.json())
                .then(
                    (data) => {
                        // console.log(data)
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
        <a href='/admin' className="flex"> <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />  Return </a> 
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
                                    <span className="truncate">{selected.id}</span>
                                    <span className="ml-2 truncate text-gray-500">{selected.id_media}</span>
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
                                    {posters.map((poster) => (
                                    <Listbox.Option
                                        key={poster.id}
                                        className={({ active }) =>
                                        classNames(
                                            active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                            'cursor-default select-none relative py-2 pl-3 pr-9'
                                        )
                                        }
                                        value={poster}
                                    >
                                        {({ selected, active }) => (
                                        <>
                                            <div className="flex">
                                            <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'truncate')}>
                                                {poster.id}
                                            </span>
                                            <span className={classNames(active ? 'text-indigo-200' : 'text-gray-500', 'ml-2 truncate')}>
                                                {poster.id_media}
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
                        <label htmlFor="moment" className="block text-sm font-medium text-gray-700">
                            Moment
                        </label>
                        
                        <span class="inline-block text-xl">Hours : </span>
                        <select name="hours" onChange={e => setHours(e.currentTarget.value)} className="inline-block mt-1 w-24 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>10</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
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

                    {/* Display Poster */}
                    {(dataToReturn.id !== undefined) ? 
                    
                        <div key={dataToReturn.id}>
                            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                <div className="px-4 py-5 sm:px-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Poster Information</h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Poster details and application.</p>
                                </div>
                                <div className="border-t border-gray-200">
                                    <dl>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">ID Media</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{dataToReturn.id}</dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">Poster</dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            <img
                                                src={dataToReturn.morning_poster !== undefined ? dataToReturn.morning_poster: dataToReturn.daily_poster !== undefined ? dataToReturn.daily_poster : dataToReturn.evening_poster !== undefined ? dataToReturn.evening_poster : "https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg" }
                                                alt="poster"
                                                className="bg-gray-100 rounded-lg max-w-xs"
                                            />
                                        </dd>
                                    </div>
                                    
                                    </dl>
                                </div>
                            </div>
                            <br/>
                        </div>
                        :
                        <div></div>}

                </div>
            </div>
        </div>
    </main>
</div>
    );
}
export default ShowPosterByMoment;