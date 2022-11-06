import React, { useEffect, useState} from 'react';
import Images from "./Images";
import HashLoader from "react-spinners/HashLoader";

function User() {
    const [images, setUsers] = useState([]);
    const [post,setPost]=useState(false)
    let [color, setColor] = useState("#e14c0b");
     let [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=500').then(response => response.json().then(result => {
            setUsers(result.results),
            setLoading(true)
        }))
    },[])


    return (
    <div className="results">
       <Images results={ images }/> 
      {post?post: <HashLoader className="load"
        color={color}
        loading={loading}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}
    </div>
    );
}
export default User;
