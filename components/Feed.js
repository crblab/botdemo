import React from 'react'
import InputBox from './InputBox'
import Posts from './Posts'
import Stories from './Stories'

const Feed = () => {
    const [posts, setPosts] = React.useState([]);
    const addPost = (post) => setPosts(pre => [...pre, post]);
    return (
        <div className=" flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
            <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
                <Stories />
                <InputBox addPost={addPost} />
                <Posts posts={posts} />
            </div>
        </div>
    )
}

export default Feed
