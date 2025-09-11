import { useUser } from "@clerk/clerk-react"
import LoginPage from './LoginPage'
import ReactQuill from "react-quill-new";

const WritePage = ()=> {
    const {isLoaded,isSignedIn} = useUser()
    if(!isLoaded) {
        return <div>Loading...</div>
    }
    if(isLoaded && !isSignedIn) {
        return <LoginPage />
    }
    return (
      <div className="h-[calc(100vh-80px)] flex flex-col gap-6">
        <h1 className="text-xl font-light">Create a New Post</h1>
        <form className="flex flex-col gap-6  flex-1 mb-4">
            <button className="p-2 w-max shadow-md rounded-sm text-sm text-gray-500 bg-white">Add a cover image</button>
            <input type="text" className="text-4xl font-semibold bg-transparent outline-none" placeholder="My Awesome Story" />
            <div className="flex items-center   gap-4">
                <label htmlFor="cat">Choose Category</label>
                <select name="cat" className="p-2 rounded-md bg-white shadow-md"  id="cat">
                    <option value="general">General</option>
                    <option value="web-design">Web Design</option>
                    <option value="development">Development</option>
                    <option value="databases">Databases</option>
                    <option value="seo">Search Engines</option>
                    <option value="marketing">Marketing</option>
                </select>
            </div>
                <textarea
                    className="p-4 rounded-md bg-white shadow-md"
                    name="desc"
                    placeholder="A Short Description"
                />
                
            <ReactQuill theme="snow" className="flex-1 rounded-md shadow-md bg-white"/>
            <button className="text-white bg-blue-800 font-medium w-36 p-2 rounded-sm">Send</button>
        </form>
      </div>
    )
}

export default WritePage