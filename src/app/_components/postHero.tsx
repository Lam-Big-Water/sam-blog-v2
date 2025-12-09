import React from 'react'

interface PostType {
    title: string;
    publishedOn: string;
}

const PostHero = ({title, publishedOn}: PostType) => {
  return (
    <div className='py-10'>
        <h1 className='text-4xl text-amber-50 font-black py-4'>{title}</h1>
        <time className='text-purple-50 text-lg' dateTime={publishedOn}>Published on {publishedOn}</time>
    </div>
  )
}

export default PostHero