import * as React from "react";
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/solid'

const AddPoster = () => {

    let navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
     
        let credentials = {
            "id_media": e.target.idmedia.value,
            "morning_poster": e.target.morningposter.value,
            "daily_poster": e.target.dailyposter.value,
            "evening_poster": e.target.eveningposter.value
        };

        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' },
            body: JSON.stringify(credentials)
        };
        
        fetch(process.env.REACT_APP_SERVICEWEB_NETFLIX_POSTER + "/posters", 
        requestOptions)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data)
                    navigate("/admin")
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
            <h1 className="text-3xl font-bold text-gray-900">Add Poster Page - Admin</h1>
        </div>
    </header>
    <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <a href='/admin' className="flex"> <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />  Return </a> 
            <div className="py-12 bg-white">
                <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Poster Information</h3>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form onSubmit={handleRegister}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
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

                            <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="morningposter" className="block text-sm font-medium text-gray-700">
                                Morning Poster
                            </label>
                            <input
                                type="text"
                                name="morningposter"
                                id="morningposter"
                                autoComplete="morningposter"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="dailyposter" className="block text-sm font-medium text-gray-700">
                                Daily Poster 
                            </label>
                            <input
                                type="dailyposter"
                                name="dailyposter"
                                id="dailyposter"
                                autoComplete="dailyposter"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="eveningposter" className="block text-sm font-medium text-gray-700">
                                Evening Poster 
                            </label>
                            <input
                                type="text"
                                name="eveningposter"
                                id="eveningposter"
                                autoComplete="eveningposter"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            </div>

                        </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Save
                        </button>
                        </div>
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
export default AddPoster;