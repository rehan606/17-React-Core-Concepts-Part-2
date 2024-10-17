import { useEffect, useState } from "react"

export default function Users () {

    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUser(data))

    }, [])

    return (
        <div>
            <h4>User: {user.length}</h4>
        </div>
    )
}