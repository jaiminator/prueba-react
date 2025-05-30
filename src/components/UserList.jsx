import { useEffect, useState } from "react"

const UserList = () => {

    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    const handleInputChange = (event) => {
        const searchParam = event.target.value;
        const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchParam.toLowerCase()));
        setFilteredUsers(filteredUsers);
    };

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
            setUsers(data);
            setFilteredUsers(data);
        })
    }, [])

    return (
        <>
            <input type="search" onChange={handleInputChange} placeholder="Username to search..." />

            <h2>Users list</h2>
            <table style={{
                border: '1px solid white',
                padding: '5px'
            }}>
                <thead>
                <tr>
                    <th style={{border: '1px solid white'}}>Name</th>
                    <th style={{border: '1px solid white'}}>Email</th>
                    <th style={{border: '1px solid white'}}>Company</th>
                </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td style={{padding: '15px'}}>{user.name}</td>
                                <td style={{padding: '15px'}}>{user.email}</td>
                                <td style={{padding: '15px'}}>{user.company.name}</td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        </>
    )
}

export default UserList