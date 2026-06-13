import { useEffect, useState } from "react";
import api from "../services/api";
import type { User } from "../types/user";
import "./UserList.css";


function UserList() {
    const [users, setUsers] = useState<User[]>([]);

    const deleteUser = async (id: string) => {
        try {
            await api.delete(`/${id}`);

            fetchUsers();

        } catch (error) {
            console.log(error);
        }
    };


    const fetchUsers = async () => {

        try {
            const response = await api.get("/");
            console.log(response.data);
            setUsers(response.data.data);
        } catch (error) {
            console.log(error);
        }

    }

    console.log(users);

    useEffect(() => {
        fetchUsers();
    }, []);



    return (
        <div>
            <h2>Users List</h2>

            {users.length === 0 ? (
                <p>No Users Found</p>
            ) : (
                <table className="user-table" border={1}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((users) => (
                            <tr key={users._id}>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <td>{users.age}</td>
                                <td>
                                    <button className="delete-btn" onClick={() => deleteUser(users._id!)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default UserList;