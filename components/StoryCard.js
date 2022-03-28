function StoryCard({ name, src, profile }) {
    return (
        <div className="relative h-14 w-14 md:h-20 md:w-20 
        lg:h-56 lg:w-32 cursor-pointer overflow-x transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
            <div style={{ width: 40, height: 40 }} className='absolute z-50 opacity-0 lg:opacity-100 m-3'>
                <img
                    className="rounded-full w-full h-full"
                    src={profile}
                />
            </div>
            <div className='w-full h-full'>
                <img
                    className="filter brightness-75 rounded-full lg:rounded-3xl w-full h-full object-cover"
                    src={src}
                />
            </div>
            <p className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-sm font-bold truncate text-white mx-3">{name}</p>
        </div>
    )
}

export default StoryCard
