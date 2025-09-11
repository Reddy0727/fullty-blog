import Image from "./Image"

const Comment = () => {
    return (
        <div className="p-4 bg-slate-50 rounded-xl">
            <div className="flex gap-4 items-center">
                <Image 
                    src='userImg.jpeg' 
                    className="w-10 h-10 rounded-full object-cover"
                    w="40" 
                />
                <span className="font-medium">John Doe</span>
                <span className="text-sm text-gray-500">
                    2 days ago
                </span>
            </div>
            <div className="mt-4">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt at ex veritatis, quae quam alias, ipsa iusto repellendus maiores eos rerum placeat possimus eum ad laboriosam, nihil beatae dolore laudantium?
                </p>
            </div>
        </div>
    )
}
 export default Comment