import React, { useEffect, useState } from 'react';

const Server = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
    }, [])

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        const users = { name, email, password };
        fetch('http://localhost:5000/news', {
            method: "POST",
            header: {
                'content-type': "application/json"
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const newUsers = [...user, data]
                setUser(newUsers);
                form.reset();
                // console.log(user)
        
            })

    }




    return (
        <div>
            <h2>This is server site</h2>
            {/* {
            user.map(obj => <h2>{obj.name}</h2>)
            } */}

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" /><br />
                <input type="email" name="email" id="" /> <br />
                <input type="password" name="password" id="" /><br />
                <input type="submit" value="submit" />
            </form>


        </div>
    );
};

export default Server;