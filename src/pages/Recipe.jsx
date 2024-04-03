import React, { useEffect, useState, useCallback } from "react";
import styled from 'styled-components'; 
import { useParams } from "react-router-dom";

function Recipe() {
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    const fetchDetails = useCallback(async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=e11956ddb9b7411282fe789b241b4aab`);
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
    justify-content: center;
    align-items: flex-start;
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 8px;
    margin-bottom: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #333;
`;

const Button = styled.button`
    padding: 1rem 2rem;
    margin-bottom: 1rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 500;
    font-size: 16px;
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
`;

const Info = styled.div`
    margin-left: 2rem;
    background-color: #f9f9f9;
    padding: 1rem;
    border-radius: 8px;
`;

const InstructionContainer = styled.div`
    margin-top: 1rem;
    h3 {
        margin-bottom: 1rem;
    }
    
    ul {
        list-style: none;
        padding: 0;
    }

    li {
        font-size: 1rem;
        line-height: 1.5rem;
    }
`;

export default Recipe;
