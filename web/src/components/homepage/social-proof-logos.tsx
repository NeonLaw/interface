import React from 'react';
import { Section } from '../section';
import { gutters } from '../../styles/neonLaw';
import styled from '@emotion/styled';
import { useIntl } from 'react-intl';

const StyledLogosContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 945px) {
    overflow-x: scroll;
  }

  svg {
    height: 5em;
    max-width: 8em;
    min-width: 6.5em;
    fill: #888;

    &:not(:last-child) {
      margin-right: ${gutters.small};
    }
  }
`;

interface Org {
  name: string;
  logo: JSX.Element;
}

const orgs: Org[] = [
];

export const SocialProofLogos = () => {
  const intl = useIntl();

  return (
    <Section
      title={intl.formatMessage({ id: 'worked_with.title' })}
    >
      <StyledLogosContainer>
        {orgs.map((org: Org) => org.logo)}
      </StyledLogosContainer>
    </Section>
  );
};
