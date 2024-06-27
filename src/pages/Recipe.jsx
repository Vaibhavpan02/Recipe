import React, { useEffect, useState, useCallback } from "react";
import styled from 'styled-components'; 
import { useParams } from "react-router-dom";

function Recipe() {
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    const fetchDetails = useCallback(async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
    }, [params.name]);

    useEffect(() => {
        fetchDetails();
    }, [fetchDetails]);

    return (
        <DetailWrapper>
            <ImageContainer>
                <Image src={details.image} alt={details.title} />
                <Title>{details.title}</Title>
            </ImageContainer>
            <Info>
                <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>Instructions</Button>
                <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
                <InstructionContainer>
                    {activeTab === 'instructions' && (
                        <>
                            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                        </>
                    )}
                    {activeTab === 'ingredients' && (
                        <ul>
                            {details.extendedIngredients.map((ingredient) =>
                                <li key={ingredient.id}>{ingredient.original}</li>
                            )}
                        </ul>
                    )}
                </InstructionContainer>
            </Info>
        </DetailWrapper>
    );
}

const DetailWrapper = styled.div`
    margin-top: 4rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 8px;
    margin-bottom: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    color: #333;

    @media(min-width: 768px) {
        font-size: 2rem;
    }
`;

const Button = styled.button`
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 1rem;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    outline: none;
    transition: all 0.3s ease;

    &:hover {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }

    &.active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }

    @media(min-width: 768px) {
        padding: 1rem 2rem;
        font-size: 16px;
    }
`;

const Info = styled.div`
    width: 100%;
    background-color: #f9f9f9;
    padding: 1rem;
    border-radius: 8px;

    @media(min-width: 768px) {
        margin-left: 2rem;
        width: auto;
    }
`;

const InstructionContainer = styled.div`
    margin-top: 1rem;

    h3 {
        margin-bottom: 1rem;
        font-size: 0.9rem; /* Smaller font size for instructions */

        @media(min-width: 768px) {
            font-size: 1rem;
        }
    }
    
    ul {
        list-style: none;
        padding: 0;
    }

    li {
        font-size: 0.8rem; /* Smaller font size for ingredients */
        line-height: 1.2rem;

        @media(min-width: 768px) {
            font-size: 0.9rem;
        }
    }

    @media(min-width: 768px) {
        h3 {
            font-size: 1rem;
        }

        li {
            font-size: 0.9rem;
        }
    }
`;

export default Recipe;
