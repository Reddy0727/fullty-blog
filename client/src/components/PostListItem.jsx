import { Link } from "react-router-dom"
import Image from "./Image"

const PostListItem = () => {
    return (
        <div className="flex flex-col items-center lg:flex-row gap-8">
            <div className="w-full">
                <Image  src='postImg.jpeg' className='rounded-md object-cover  w-full h-max' w='800'/>
            </div>
            <div className="flex flex-col gap-4 text-justify">
                <Link to='/test' className="text-3xl font-semibold">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </Link>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <span>written by</span>
                    <Link className="text-blue-800">John Doe</Link>
                    <Link className="text-blue-800">Web Design</Link>
                    <span>2 days ago</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quae maxime, quod optio in vel. Obcaecati aliquam magnam eveniet esse quibusdam libero, voluptates atque! Odit explicabo ratione placeat tempora odio?
                </p>
                <Link className="underline text-blue-800">Read More</Link>
            </div>
        </div>
    )
}

export default PostListItem