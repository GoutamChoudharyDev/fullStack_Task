import { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // navigate to login page after successful signup
    const navigate = useNavigate();

    // handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/api/auth/login', {
                email,
                password
            })

            // Clear form fields after successful signup
            setEmail("");
            setPassword("");

            // Navigate to login page after successful signup
            navigate('/');
        } catch (error) {
            console.error("Error logging in:", error);
        }
    }
    return (
        <main className="w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl text-gray-500">Login Page</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col"
            >
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    className="mb-4 p-2 border bg-gray-100 text-gray-700 border-gray-300 rounded"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                <label htmlFor="password">Password:</label>
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
                    type="submit">Login
                </button>
            </form>
        </main>
    )
}

export default LoginPage
