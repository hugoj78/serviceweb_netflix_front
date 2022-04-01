import React, { useState, useEffect }  from 'react';
import { ChevronLeftIcon } from '@heroicons/react/solid'
const AllPoster = () => {

const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
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
                    setIsLoaded(true);
                    setPosters(data);
                },
                (err) => {
                    console.log(err)
                    setIsLoaded(true);
                    setError(err);
                }
            )
      }, [])
if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold text-gray-900">List of All Poster Page - Admin</h1>
                    </div>
                </header>
                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <a href='/admin' className="flex"> <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />  Return </a> 
                        <div className="py-12 bg-white">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                {posters.map(poster => (
                                    <div>
                                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                            <div className="px-4 py-5 sm:px-6">
                                                <h3 className="text-lg leading-6 font-medium text-gray-900">User Information</h3>
                                                <p className="mt-1 max-w-2xl text-sm text-gray-500">Poster details and application.</p>
                                            </div>
                                            <div className="border-t border-gray-200">
                                                <dl>
                                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">ID Poster</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{poster.id}</dd>
                                                </div>
                                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">ID Media</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{poster.id_media}</dd>
                                                </div>
                                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">Morning Poster</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <img
                                                            src={poster.morning_poster}
                                                            alt="morning_poster"
                                                            className="bg-gray-100 rounded-lg max-w-xs"
                                                        />
                                                    </dd>
                                                </div>
                                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">Daily Poster</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <img
                                                            src={poster.daily_poster}
                                                            alt="daily_poster"
                                                            className="bg-gray-100 rounded-lg max-w-xs"
                                                        />
                                                    </dd>
                                                </div>
                                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">Evening Poster</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <img
                                                            src={poster.evening_poster}
                                                            alt="evening_poster"
                                                            className="bg-gray-100 rounded-lg max-w-xs"
                                                        />
                                                    </dd>
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
}


export default AllPoster;