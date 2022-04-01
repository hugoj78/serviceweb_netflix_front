import React, { useState, useEffect }  from 'react';
import { ChevronLeftIcon } from '@heroicons/react/solid'
const AllUser = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
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
                    setIsLoaded(true);
                    setUsers(data);
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
                        <h1 className="text-3xl font-bold text-gray-900">List of All User Page - Admin</h1>
                    </div>
                </header>
                <main>
                    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                        <a href='/admin' className="flex"> <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />  Return </a> 
                        <div className="py-12 bg-white">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                {users.map(user => (
                                    <div>
                                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                            <div className="px-4 py-5 sm:px-6">
                                                <h3 className="text-lg leading-6 font-medium text-gray-900">User Information</h3>
                                                <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                                            </div>
                                            <div className="border-t border-gray-200">
                                                <dl>
                                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">User status</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        {user.status === "ACTIF" ? <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-green-600 rounded-full">{user.status}</span> : ""}
                                                        {user.status === "PASSIF" ? <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-yellow-600 rounded-full">{user.status}</span> : ""}
                                                        {user.status === "SUSPENDU" ? <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{user.status}</span> : ""}                                                    
                                                    </dd>
                                                </div>
                                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">Full name</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.name}</dd>
                                                </div>
                                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.email}</dd>
                                                </div>
                                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">User adress</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.adress}</dd>
                                                </div>
                                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">User country</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.country}</dd>
                                                </div>
                                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">User admin status</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        {user.admin ? "Yes" : "No"}
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


export default AllUser;