import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
`

export const Row = styled.div`
width: 100%;
margin: 10px 0;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 1px 1px 2px 0px rgba(158, 154, 154, 0.77);
border-radius: 10px;
padding: 5px;
`

export const Image = styled.img`
height: 80px;
width: 80px;
object-fit: contain;
border-radius: 10px;
`

export const Title = styled.p``

export const Wrapper = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
`

export const ViewButton = styled(Link)`
padding:3px 10px;
background-color: #5D4B80;
border: none;
border-radius:6px;
color: #fff;
cursor: pointer;
text-decoration: none;
display: flex;
justify-content: center;
align-items:center;
font-size: 12px;
`

export const DeleteButton = styled.button`
padding:5px;
background-color: #B23261;
border: none;
border-radius:6px;
color: #fff;
cursor: pointer;
`