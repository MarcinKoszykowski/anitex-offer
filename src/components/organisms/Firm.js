import React from 'react';
import styled from 'styled-components';
import Name from 'components/atoms/Firm/Name';
import SecondName from 'components/atoms/Firm/SecondName';
import Text from 'components/molecules/Text';
import { header } from 'data/Value';
import Functions from 'data/Functions';

const Wrapper = styled.div`
  position: relative;
  margin: ${({ address }) => (address ? `10px 0` : `0 10px 15px`)};
  text-align: left;
`;

const Address = styled(SecondName)``;

const Firm = ({ firm, anitex }) => (
  <Wrapper>
    <Name>{anitex ? header.header.firm1 : firm.firm1}</Name>
    <SecondName>{anitex ? header.header.firm2 : firm.firm2}</SecondName>
    <Wrapper address>
      <Address>{anitex ? header.header.address1 : firm.address1}</Address>
      <Address>{anitex ? header.header.address2 : firm.address2}</Address>
    </Wrapper>
    <Text index={header.firm.nip} text={anitex ? header.header.nip : firm.nip} />
    <Text
      index={header.firm.phone}
      text={Functions.phoneFormat(anitex ? header.header.phone : firm.phone)}
    />
    {(firm.email || anitex) && (
      <Text index={header.firm.email} text={anitex ? header.header.email : firm.email} />
    )}
  </Wrapper>
);

export default Firm;
