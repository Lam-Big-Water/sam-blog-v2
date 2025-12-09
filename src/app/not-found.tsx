import React from 'react';

import { BLOG_TITLE } from './constants';

export const metadata = {
    title: `404 Not found ● ${BLOG_TITLE}`
};

function NotFound () {
    return (
        <div className='pt-24 text-center text-amber-50'>
            <h1 className='mb-[1em]'>404 Not Found</h1>

            <p>This page does not exits. Please check the URL and Try again.</p>
        </div>
    )
}

export default NotFound;