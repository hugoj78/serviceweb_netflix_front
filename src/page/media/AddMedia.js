import * as React from "react";
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/solid'

const AddMedia = () => {

    let navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
     
        let credentials = {
            "title": e.target.title.value,
            "kind": e.target.kind.value,
            "category": e.target.category.value,
            "content": e.target.content.value,
            "release_date": e.target.releasedate.value,
            "description": e.target.description.value,
            "status": "ACTIVED",
            "country": e.target.country.value,
            "id_poster": e.target.idposter.value
        };

        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' },
            body: JSON.stringify(credentials)
        };
        
        fetch(process.env.REACT_APP_SERVICEWEB_NETFLIX_MEDIA + "/medias", 
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
            <h1 className="text-3xl font-bold text-gray-900">Add Media Page - Admin</h1>
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
                            <label htmlFor="idposter" className="block text-sm font-medium text-gray-700">
                                ID Poster
                            </label>
                            <input
                                type="text"
                                name="idposter"
                                id="idposter"
                                autoComplete="given-name"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                autoComplete="title"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                autoComplete="description"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="kind" className="block text-sm font-medium text-gray-700">
                                Kind
                            </label>
                            <select
                                id="kind"
                                name="kind"
                                autoComplete="kind"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option>film</option>
                                <option>serie</option>
                            </select>
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                Category 
                            </label>
                            <input
                                type="text"
                                name="category"
                                id="category"
                                autoComplete="category"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                                Content 
                            </label>
                            <input
                                type="text"
                                name="content"
                                id="content"
                                autoComplete="content"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                Country
                            </label>
                            <select
                                id="country"
                                name="country"
                                autoComplete="country"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>France</option>
                                <option>Suede</option>
                                <option>Norvege</option>
                                <option>Espagne</option>
                                <option>Portugal</option>
                                <option>Maroc</option>
                                <option>Allemagne</option>
                            </select>
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="releasedate" className="block text-sm font-medium text-gray-700">
                                Release Date 
                            </label>
                            <input
                                type="text"
                                name="releasedate"
                                id="releasedate"
                                autoComplete="releasedate"
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
export default AddMedia;