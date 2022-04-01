import React from 'react';
import { AnnotationIcon, LightningBoltIcon } from '@heroicons/react/outline'
import { ChevronLeftIcon } from '@heroicons/react/solid'

const User = () => {
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
                    <div className="lg:text-center">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        User API
                    </p>
                    <br/>
                    </div>

                   
                </div>
            </div>
        </div>
    </main>
</div>
    );
}
export default User;