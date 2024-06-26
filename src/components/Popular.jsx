import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    try {
      const check = localStorage.getItem("popular");

      if (check) {
        setPopular(JSON.parse(check));
      } else {
        const apiKey = process.env.REACT_APP_API_KEY;
        const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=6&tags=vegetarian`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();

        localStorage.setItem("popular", JSON.stringify(data.recipes));
        setPopular(data.recipes);
        console.log(data.recipes);
      }
    } catch (error) {
      console.error('Error in getPopular:', error);
      // Handle the error (e.g., show a user-friendly message or log it)
    }
  };

  return (
    <Wrapper>
      <h3>Trending Picks</h3>
      <Grid>
        {popular.map((recipe) => (
          <Card key={recipe.id}>
            <Link to={"/recipe/" + recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title}</h4>
            </Link>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
  h3{
    font-size:30px;
  }
 
`;

const Grid = styled.div`
margin-top:15px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 2fr));
  grid-gap: 2rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  h4 {
    text-align: center;
    padding: 0rem;
  }
`;

export default Popular;






// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import {Splide,SplideSlide} from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
// import {Link} from "react-router-dom";
// function Popular() {

//     const [popular,setPopular]=useState([]);


//     useEffect(()=>{
//         getPopular();
//     },[]);

//     const getPopular = async () => {
//       try {
//           const check = localStorage.getItem("popular");
  
//           if (check) {
//               setPopular(JSON.parse(check));
//           } else {
//              const apiKey = process.env.REACT_APP_API_KEY;
//             const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=16&tags=vegetarian`;


  
//               const response = await fetch(apiUrl);
  
//               if (!response.ok) {
//                   throw new Error(`Failed to fetch data. Status: ${response.status}`);
//               }
  
//               const data = await response.json();
  
//               localStorage.setItem("popular", JSON.stringify(data.recipes));
//               setPopular(data.recipes);
//               console.log(data.recipes);
//           }
//       } catch (error) {
//           console.error('Error in getPopular:', error);
//           // Handle the error (e.g., show a user-friendly message or log it)
//       }
//   };
  

//   return (
//     <div>
       
//          <Wrapper>
//           <h3>Trending Picks</h3>
// <Splide options={{
//   perPage:4,
//   arrows:false,
//   pagination:false,
//   drag:"free",
//   gap:"5rem",
// }}>
//           {popular.map((recipe)=>{
//             return(
//               <SplideSlide key={recipe.id}>
//               <Card>
//                 <Link to={"/recipe/" + recipe.id}>
//                 <p> {recipe.title}</p>
//                 <img src={recipe.image} alt={recipe.title}/>
//                 <Gradient/>
//                 </Link>
//               </Card>
//               </SplideSlide>
//             );
//           })}
//           </Splide>
//          </Wrapper>
           
        
//         </div>
//   );
// }


// const Wrapper=styled.div`
// margin:4rem 0rem;`;

// const Card=styled.div`
// min-height:18rem;
// border-radius:2rem;
// overflow:hidden;
// position:relative;

// img{
// border-radius: 2rem;
// position:absolute;
// left:0;
// width:100%;
// height:100%;
// object-fit:cover;

// }
// p{
//   position:absolute;
//   z-index:10;
//   left:50%;
//   bottom:0%;
//   transform:translate(-50%,0%);
//   color:white;
//   width:100%;
//   text-align:center;
//   font-weight:600;
//   font-size:1rem;
//   height:40%;
//   display:flex:
//   justify-content:center;
//   align-items:center;
// }
// `;
// const Gradient=styled.div`
//   z-index:3;
//   position:absolute;
//   width:100%;
//   height:100%;
//   background:linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));


// `;

// export default Popular;
