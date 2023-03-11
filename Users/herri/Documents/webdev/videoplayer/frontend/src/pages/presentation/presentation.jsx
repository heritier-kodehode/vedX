import React from 'react';
import { PageContainer } from '../../components/styled/styled';
import { AppContainerStyled, AppLeftInnerContainer, AppRightInnerContainer, AppSelectionTabMenu, AppSelectionTab } from '../../components/styled/styled';

const Presentation = () => {
  return (
    <PageContainer>
      <AppContainerStyled>
        <AppLeftInnerContainer>
          <AppSelectionTabMenu></AppSelectionTabMenu>
          <AppSelectionTab></AppSelectionTab>
        </AppLeftInnerContainer>
        <AppRightInnerContainer></AppRightInnerContainer>
      </AppContainerStyled>
    </PageContainer>
  );
};

export default Presentation;
