import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HiPhotograph } from "react-icons/hi";
import { HiVideoCamera } from "react-icons/hi";
import { HiPresentationChartBar } from "react-icons/hi";


//common in pages Video,graphic,presentation

export const PageContainer = styled.div`
  width: 100%;

`
export const AppContainerStyled = styled.div`

   height: 90vh;
   display: flex;
   width: 100%;
`
export const AppLeftInnerContainer = styled.div`
   height: 90vh;
   width: 25%;
   display: flex;
`


export const AppSelectionTabMenu = styled.div`
  border: 2px solid yellow;
  width: 25%;
  height: 100%;
`


export const AppSelectionTab = styled.div`
  border: 2px solid lightcyan;
  width: 75%;
  height: 100%;
`
export const AppRightInnerContainer = styled.div`
border: 2px solid orangered;
   height: 90vh;
  
   width: 75%;

`
//Home

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 40vh;
  align-items: center;
  flex-wrap: wrap;
`

export const HomeButton = styled(Link)`
  display: flex;
  margin: 0 2rem;
  max-width: 100%;
  text-decoration: none;
  color: black;
  border-radius: 10px;
  padding: 1rem;
  :hover{
    color: white;
    background-color: black;
  }
`
export const ButtonText = styled.p`

`

export const HiphotographIcon = styled(HiPhotograph)`
  width: 50px;
  height: auto;
`



export const HiVideoCameraIcon = styled(HiVideoCamera)`
 width: 50px;
  height: auto;
  `



export const HiPresentationChartIcon = styled(HiPresentationChartBar)`
  width: 50px;
  height: auto;
`

//Graphic

