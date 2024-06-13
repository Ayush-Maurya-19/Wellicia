import React from 'react'

const BlogPage = () => {
  return (
    <div className='blogpage '>
        <div className='row'>
            <div className="col">
                <h3 className='text-info'>NEWS</h3>
                <h1>From Our Blog Posts</h1>
            </div>
            <div className="col mt-4 text-end px-5 mx-5">
                <button className='btn btn-success p-2 fw-bold'>
                    View More
                </button>
            </div>

        </div>
    </div>
  )
}

export default BlogPage