import { useState } from 'react';
import api from '../services/api';
import "./UserForm.css";

function UserForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !age) {
            alert("All fields are required");
            return;
        }

        try {
            const response = await api.post("/", {
                name,
                email,
                age: Number(age),
            });

            console.log(response.data);

            alert("User Added Successfully");

            setName("")
            setEmail("")
            setAge("")

        } catch (error) {
            console.log(error);
            alert("Something went wrong");
        }
    };

    return (
        <div>
            <form className='user-form' onSubmit={handleSubmit}>
                <input className="form-input" type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <br />
                <input className="form-input" type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <br />
                <input className="form-input" type="number" placeholder='Enter Age' value={age} onChange={(e) => setAge(e.target.value)} />
                <br />
                <br />
                <button className="submit-btn" type='submit'>Add User</button>
            </form>
        </div>
    );
}

export default UserForm;