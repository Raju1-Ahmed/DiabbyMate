import React from 'react';
import '../../style.css'

const Health = () => {
    return (
        <div className='container flex justify-center items-center mt-16 mb-16'>
            <div className='healthL'></div>
            <div className='healthR justify-center items-center'>
                <h1>Your health guardian
                    <span> is on the way</span></h1>
                <p>Get notified when the app is launched</p>
                <div className=''>

                    <form>
                        <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <input type="search" id="search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email address" required />
                            <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue- hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Health;