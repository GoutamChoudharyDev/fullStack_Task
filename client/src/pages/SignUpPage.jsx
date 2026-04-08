import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

const SignUpPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // navigate to login page after successful signup
    const navigate = useNavigate();

    // handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/api/auth/signup', {
                username,
                email,
                password
            })

            // Clear form fields after successful signup
            setUsername("");
            setEmail("");
            setPassword("");

            // Navigate to login page after successful signup
            navigate('/');
        } catch (error) {
            console.error("Error signing up:", error);
        }
    }

    return (
        <main className="w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl text-gray-500">Sign Up Page</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col"
            >
                <label className="mb-2 text-gray-700" htmlFor="username">Username:</label>
                <input
                    type="text"
                    className="mb-4 p-2 border bg-gray-100 text-gray-700 border-gray-300 rounded"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required />

                <label className="mb-2 text-gray-700" htmlFor="email">Email:</label>
                <input
                    type="email"
                    className="mb-4 p-2 border bg-gray-100 text-gray-700 border-gray-300 rounded"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                <label className="mb-2 text-gray-700" htmlFor="password">Password:</label>
                <input
                    type="password"
                    className="mb-4 p-2 border bg-gray-100 text-gray-700 border-gray-300 rounded"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="submit">Sign Up
                </button>
            </form>
        </main>
    )
}

export default SignUpPage
