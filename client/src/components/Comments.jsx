import Comment from "./Comment"

const Comments = () => {
    return (
        <div className="flex flex-col gap-6 lg:w-4/5">
            <h1 className="text-xl text-gray-500 underline">Comments</h1>
            <div className="flex items-center gap-4">
                <textarea className="flex-1 p-4 rounded-xl" placeholder="write comments...."></textarea>
                <button className="px-4 rounded-lg py-2 bg-blue-800 text-white font-medium ">Send</button>
            </div>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>
    )
}

export default Comments