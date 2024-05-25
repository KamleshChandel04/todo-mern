import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import TodoForm from "./todos/TodoForm";
import TodoLists from "./todos/TodoLists";
function Dashboard() {
    const navigateTo = useNavigate();
    let token = sessionStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const BASE_URL = "http://localhost:5000";

    const [userTodos, setUserTodos] = useState(null);
    //to get all todos

    const handleSubmit = async () => {
        token = null;
        navigateTo("/");
    };

    const fetchUserTodos = async () => {
        const resp = await axios.get(`${BASE_URL}/api/todo`);

        if (resp.data.todos.length > 0) {
            setUserTodos(resp.data.todos);
        }
    };

    useEffect(() => {
        fetchUserTodos();
        return;
    }, []);

    return (
        <div className='flex flex-col items-center justify-center min-h-full mb-[3rem]'>
            <div>
                <button
                    className='bg-red-300 active:bg-red-400 px-[0.8rem] rounded-[0.3rem] items-center justify-center font-bold text-2xl'
                    onClick={() => {
                        handleSubmit();
                    }}>
                    Logout
                </button>
            </div>
            <TodoForm fetchUserTodos={fetchUserTodos} BASE_URL={BASE_URL} />
            <TodoLists
                fetchUserTodos={fetchUserTodos}
                setUserTodos={setUserTodos}
                userTodos={userTodos}
                BASE_URL={BASE_URL}
            />
        </div>
    );
}

export default Dashboard;
