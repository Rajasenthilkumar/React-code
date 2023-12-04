// import React, { useEffect ,useState} from 'react'

// function Third() {
//     const [posts,setPosts] =useState(null);
//     useEffect(()=>{
//          fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
//         // fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((data)=>data.json())
//         .then((data)=>{setPosts(data);
//         });
    

//     },[]);
//   return (  
//     <div>
//         {posts ? (
//         posts.map((post)=>{ 
//         return(
//             <div>
//             <h1> {post.name}</h1>
//             <h5> {post.city}</h5>
//             </div>
//         );
//         })
//         ):( 
//             <h3>Loading........</h3>
//         )}
//         </div> 
//   )
// }

// export default Third

import React, { useEffect ,useState} from 'react'
import axios from "axios";
import Third from "./Third"
function Api() {
    const [posts,setPosts] =useState(null);
    useEffect(()=>{
        axios.get("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8").then(res => {
            setPosts(res.data);
        });
        
        // fetch("https://jsonplaceholder.typicode.com/posts")
      

    },[]);
  return (  
    <div>
        {posts ? (
        posts.map((post)=>{ 
        return <Third name={post.name} city={post.city}/>;
        })
        ):( 
            <h3>Loading........</h3>
        )}
        </div> 
  )
}

export default Api