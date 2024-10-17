<h1 align="center">React Core Concepts Part 2</h1>




<h2 align="center">Counter</h2>
<hr>

### 1 Create Component in Counter.jsx File
```js
import { useState } from "react"

export default function Counter (){
    const [count, setCount] = useState(0)

    const handleClick = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleDecress = ()=>{
        const newCount = count - 1;
        setCount(newCount)
    }

    return(
        <div style={{border: '2px solid tomato', marginTop: '10px', padding: '10px'}}>
            <h3>Couter: {count} </h3>
            <button style={{marginRight: '20px'}} onClick={handleDecress}> - </button>
            <button onClick={handleClick}> + </button>
        </div>
    )
}

```

### 2 import Counter Component in App.jsx 
```js
import Counter from './Counter'
```

### 3 call Component in App.jsx Function
```js

    // Call Component
    <Counter></Counter>
```




<h2 align="center">Display Data From Fetch API</h2>
<hr>


### 1. Create a File name will be Friends.jsx then write Bellow code in This file
```js
import { useEffect, useState } from "react"
import Friend from "./Friend";

export default function Friends (){
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return (
        <div>
            <h3>Friends: {friends.length} </h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}
```
### 2 import Counter Component in App.jsx 
```js
import Friends from './Friends'
```

### 3 call Component in App.jsx Function
```js

    // Call Component
    <Friends></Friends>
```


### 4 Create a File name will be Friend.jsx then write Bellow code in This file
```js

    export default function Friend({friend}) {

    const {name, username, email, phone, website} = friend
    return (
        <div style={{border:'1px solid white', marginBottom:'10px', backgroundColor: '#010a5e', borderRadius:'15px'}}>
            <h4>Name: {name} </h4>
            <p>User name: {username} </p>
            <p>Email: {email} </p>
            <p>Phone: {phone} </p>
            <p>Website: {website} </p>
        </div>
    )
}
```






