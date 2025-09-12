import { Link } from "react-router-dom"
import Image from "../components/Image"
import PostMenuActions from "../components/PostMenuActions"
import Search from "../components/Search"
import Comment from "../components/Comments"

const SinglePostPage = ()=> {
    return (
        <div className="flex flex-col gap-8 mt-4">
            <div className="flex gap-8">
                <div className="lg:w-3/5 flex flex-col gap-8 ">
                    <h1 className="text-xl md:text-2xl lg:text-4xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <span>written by</span>
                        <Link className="text-blue-800">John Doe</Link>
                        <Link className="text-blue-800">Web Design</Link>
                        <span>2 days ago</span>
                    </div>
                    <p className="text-gray-500 font-medium">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor assumenda voluptatibus neque libero illum alias porro fugit voluptatem beatae delectus voluptate eius aspernatur dignissimos ipsam itaque illo error, architecto fugiat?
                    </p>
                </div>
                <div className="hidden lg:block w-2/5 ">
                    <Image src='postImg.jpeg' className='rounded-md' w="600" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 mt-4">
             <div className="lg:text-xl flex flex-col gap-6 text-justify">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Doloremque molestiae corporis, doloribus placeat nam excepturi debitis quasi! Labore,
                    reiciendis quod, laudantium ipsam nihil incidunt deleniti hic illum cum aperiam et?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Doloremque molestiae corporis, doloribus placeat nam excepturi debitis quasi! Labore,
                    reiciendis quod, laudantium ipsam nihil incidunt deleniti hic illum cum aperiam et?
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Doloremque molestiae corporis, doloribus placeat nam excepturi debitis quasi! Labore,
                    reiciendis quod, laudantium ipsam nihil incidunt deleniti hic illum cum aperiam et?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Doloremque molestiae corporis, doloribus placeat nam excepturi debitis quasi! Labore,
                    reiciendis quod, laudantium ipsam nihil incidunt deleniti hic illum cum aperiam et?
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Doloremque molestiae corporis, doloribus placeat nam excepturi debitis quasi! Labore,
                    reiciendis quod, laudantium ipsam nihil incidunt deleniti hic illum cum aperiam et?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Doloremque molestiae corporis, doloribus placeat nam excepturi debitis quasi! Labore,
                    reiciendis quod, laudantium ipsam nihil incidunt deleniti hic illum cum aperiam et?
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Doloremque molestiae corporis, doloribus placeat nam excepturi debitis quasi! Labore,
                    reiciendis quod, laudantium ipsam nihil incidunt deleniti hic illum cum aperiam et?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Doloremque molestiae corporis, doloribus placeat nam excepturi debitis quasi! Labore,
                    reiciendis quod, laudantium ipsam nihil incidunt deleniti hic illum cum aperiam et?
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Doloremque molestiae corporis, doloribus placeat nam excepturi debitis quasi! Labore,
                    reiciendis quod, laudantium ipsam nihil incidunt deleniti hic illum cum aperiam et?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Doloremque molestiae corporis, doloribus placeat nam excepturi debitis quasi! Labore,
                    reiciendis quod, laudantium ipsam nihil incidunt deleniti hic illum cum aperiam et?
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Doloremque molestiae corporis, doloribus placeat nam excepturi debitis quasi! Labore,
                    reiciendis quod, laudantium ipsam nihil incidunt deleniti hic illum cum aperiam et?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Doloremque molestiae corporis, doloribus placeat nam excepturi debitis quasi! Labore,
                    reiciendis quod, laudantium ipsam nihil incidunt deleniti hic illum cum aperiam et?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, velit. 
                    Velit consequuntur vero laborum fugit, ab quod quibusdam eum et, 
                    sunt nulla similique maxime, quos officia animi provident repudiandae reiciendis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Doloremque molestiae corporis, doloribus placeat nam excepturi debitis quasi! Labore,
                    reiciendis quod, laudantium ipsam nihil incidunt deleniti hic illum cum aperiam et?
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Dolor repellat, adipisci quaerat labore perferendis nisi officia ducimus temporibus eaque, 
                    expedita quod voluptate porro, dolore pariatur. Rerum voluptas accusantium neque? Fugit?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Doloremque molestiae corporis, doloribus placeat nam excepturi debitis quasi! Labore,
                    reiciendis quod, laudantium ipsam nihil incidunt deleniti hic illum cum aperiam et?
                </p>
             </div>
             <div className="px-4 h-max sticky top-8">
                <h2>Author</h2>
                <div className="flex gap-4 py-2 items-center">
                    <Image src='userImg.jpeg' 
                        className='w-12h-12 rounded-full object-cover' 
                        w='48'
                        h='48'
                    />
                    <Link>John Doe</Link>
                </div>    
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="flex gap-4 py-2 items-center">
                    <Link>
                       <Image src='facebook.svg' />
                    </Link>
                    <Link>
                       <Image src='instagram.svg' />
                    </Link>
                </div>
                
                <PostMenuActions />
                <h2 className="font-medium">Categories</h2>
                <div className="flex flex-col gap-2 text-sm my-4">
                    <Link className="underline">All</Link>
                    <Link className="underline" to='/'>Web Design</Link>
                    <Link className="underline" to='/'>Development</Link>
                    <Link className="underline" to='/'>Databases</Link>
                    <Link className="underline" to='/'>Search Engies</Link>
                    <Link className="underline" to='/'>Marketing</Link>
                </div>
                <div>
                    <h2 className="font-medium mb-4">Search</h2>
                    <Search />
                </div>
             </div> 
            </div>
            <Comment />
        </div>
    )
}

export default SinglePostPage