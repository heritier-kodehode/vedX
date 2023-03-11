import React from 'react';
import { HiphotographIcon } from '../../components/styled/styled';
import { HiVideoCameraIcon } from '../../components/styled/styled';
import { HiPresentationChartIcon } from '../../components/styled/styled';
import { PageContainer } from '../../components/styled/styled';
import { ButtonContainer } from '../../components/styled/styled';
import { HomeButton } from '../../components/styled/styled';
import { ButtonText } from '../../components/styled/styled';

const ParaGraphText = ({text}) => {
    return(
      <ButtonText>{text}</ButtonText>
    )
}

const Home = () => {
  return (
    <PageContainer>
      <ButtonContainer>
        <HomeButton to="graphic">
          <HiphotographIcon/>
          <ParaGraphText text={"Graphic"} />
        </HomeButton>
        <HomeButton to="video">
           <HiVideoCameraIcon/>
           <ParaGraphText text={"Video"} />
        </HomeButton>
        <HomeButton to="presentation">
            <HiPresentationChartIcon/>
            <ParaGraphText text={"Presentation"} />
        </HomeButton>
      </ButtonContainer>
      
   
    </PageContainer>
  );
};

export default Home;
