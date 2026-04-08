import { useEffect, useState } from "react"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    // function to get user
    const getUser = async () => {
        try {
            const response = await api.get('/api/auth/me');
            console.log("User data:", response.data);
            setName(response.data.user.username);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }

    // logout function
    const handleLogout = async () => {
        try {
            await api.get('/api/auth/logout');
            // Redirect to login page or perform other logout actions
            navigate('/login');
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    useEffect(() => {
        getUser();
        setName();
    }, [])

    return (
        <div className='w-full h-screen mx-auto pt-10 p-6 bg-gray-600 shadow-md'>
            <h1 className='text-2xl text-gray-500'>Home Page</h1>
            <h2 className='text-xl text-gray-300'>Welcome : {name}</h2>

            {/* logout button  */}
            <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Logout
            </button>
        </div>
    )
}

export default Home
