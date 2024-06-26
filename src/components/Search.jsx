import styled from "styled-components";
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/searched/` + input);
    };

    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch className="search-icon" />
                <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
            </div>
        </FormStyle>
    );
}

const FormStyle = styled.form`
    margin: 0rem 1rem;

    div {
        position: relative;
        width: 100%;
    }

    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 0.8rem;
        color: white;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }

    .search-icon {
        position: absolute;
        top: 50%;
        left: 0.5rem;
        transform: translateY(-50%);
        color: white;
        font-size: 1.5rem; /* Increase icon size */
    }

    @media (min-width: 768px) {
        margin: 0rem 15rem;
    }
`;

export default Search;














// import styled from "styled-components";
// import {useState} from 'react';
// import { FaSearch } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// function Search() {

//     const[input,setInput]=useState("");
//     const navigate=useNavigate();
    
 
//         const submitHandler=(e)=>{
//             e.preventDefault();
//             navigate(`/searched/`+input);
//         };
 
 
//     return (
//     <FormStyle onSubmit={submitHandler}>
        
//         <div>
//         <FaSearch></FaSearch>
// <input onChange={(e)=>setInput(e.target.value)}
//  type="text" value={input}/>
// </div>

//     </FormStyle>
//   )
// }

// const FormStyle=styled.form`
//     margin:0rem 15rem;
    
//     div{
//         position:relative;
//         width:100%;
//     }
//     input{
//         border:none;
//         background:linear-gradient(35deg,#494949,#313131);
//         font-size:0.8rem;
//         color:white;
//         padding:1rem 3rem;
//         border:none;
//         border-radius:1rem;
//         outline:none;
//         width:100%;
//     }
//     svg{
//         position:absolute;
//         top:50%;
//         left:0%;
//         transform:translate(100%,-50%);
//         color:white;
//     }
// `
// export default Search
