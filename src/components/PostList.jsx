import PostListItem from "./PostListItem"

const postList = () => {
    return (
        <div className="flex flex-col gap-12 mb-8">
           <PostListItem />
           <PostListItem />
           <PostListItem />
           <PostListItem />
           <PostListItem />
        </div>
    )
}

export default postList