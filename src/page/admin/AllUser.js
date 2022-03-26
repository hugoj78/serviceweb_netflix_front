import React, { useState, useEffect }  from 'react';

const AllUser = () => {

const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_SERVICEWEB_NETFLIX_COMPTE + "/users", {'Access-Control-Allow-Origin' : '*'})
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                },
                (err) => {
                    console.log(err)
                    setIsLoaded(true);
                    setError(err);
                }
            )
      }, [])
if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h1>List of all User Page</h1>
                <ul>
                    {users.map(user => (
                    <li key={user.id}>
                        <p>Statut : {user.status}</p>
                        <p>Name : {user.name}</p>
                        <p>Mail : {user.email}</p>
                        <p>Adress : {user.adress}</p>
                        <p>Country : {user.country}</p>
                        <p>Admin : {user.admin ? "oui" : "non"} </p>
                    </li>
                    ))}
                </ul>
            </div>
        );
    }
}


export default AllUser;