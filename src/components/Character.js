// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyleInfo = styled.h2`
display:flex;
flex-direction: column;
font-size:40px;
color: 'royalblue';
`
    



export default function StarCharacter(props) {
const {info} = props;
return (
    <StyleInfo>
  <h2> {info.name}</h2>


    </StyleInfo>
  
)

}

