import React from "react";

function User({ name, pic }) {
    return (
    <section>
    <img className="user-profile-pic" src={pic} alt={name} />
    <h2 className="user-name">
    Hello, <span className="user-first-name">{name}</span> 🎉🔥
    </h2>
    </section>
    );
    }

    function App() {
        const users = [
        {
        name: "Cuban",
        pic: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
        },
        {
        name: "Spencer",
        pic: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
        },
        {
        name: "Robert",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2C_xadF4WT19MkU5PpYyU8njyMgMIuttwXQ&usqp=CAU",
        },
        {
        name: "Einstein",
        pic: "https://media.istockphoto.com/id/1179420343/photo/smiling-man-outdoors-in-the-city.jpg?s=612x612&w=0&k=20&c=8l-gOboGEFSyCFXr09EguDmV0E0bFT5usAms1wyFBh8=",
        },
        ];
        return (
        <div className="App">
        {users.map((usr) => (
        <User name={usr.name} pic={usr.pic} />
        ))}
        </div>
        );
        }
    export default App;