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