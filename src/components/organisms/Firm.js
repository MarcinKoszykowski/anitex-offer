import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from 'context';
import styled from 'styled-components';
import Name from 'components/atoms/Firm/Name';
import SecondName from 'components/atoms/Firm/SecondName';
import Text from 'components/molecules/Text';
import { header } from 'data/value';
import { phoneFormat } from 'data/functions';

const Wrapper = styled.div`
  position: relative;
  margin: ${({ address }) => (address ? `10px 0` : `0 10px 15px`)};
  text-align: left;
`;

const Address = styled(SecondName)``;

function Firm({ anitex }) {
  const { firm } = useContext(AppContext);
  const { firm1, firm2, address1, address2, nip, phone, email } = firm;
  const { anitex: headerAnitex, firm: headerFirm } = header;

  return (
    <Wrapper>
      <Name>{anitex ? headerAnitex.firm1 : firm1}</Name>
      <SecondName>{anitex ? headerAnitex.firm2 : firm2}</SecondName>
      <Wrapper address>
        <Address>{anitex ? headerAnitex.address1 : address1}</Address>
        <Address>{anitex ? headerAnitex.address2 : address2}</Address>
      </Wrapper>
      <Text index={headerFirm.nip} text={anitex ? headerAnitex.nip : nip} />
      <Text index={headerFirm.phone} text={phoneFormat(anitex ? headerAnitex.phone : phone)} />
      {(anitex || email) && (
        <Text index={headerFirm.email} text={anitex ? headerAnitex.email : email} />
      )}
    </Wrapper>
  );
}

Firm.propTypes = {
  anitex: PropTypes.bool,
};

Firm.defaultProps = {
  anitex: false,
};

export default Firm;
