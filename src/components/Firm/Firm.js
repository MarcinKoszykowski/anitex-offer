import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import FirmContext from 'context/FirmContext';
import styled from 'styled-components';
import { firm, anitex as anitexFirm } from 'data/value';
import { getPhone } from 'data/functions';
import Name from 'components/Firm/atoms/Name';
import Text from 'components/Text/Text';
import Address from './atoms/Address';

const Wrapper = styled.div`
  position: relative;
  margin: ${({ address }) => (address ? `10px 0` : `0 10px 15px`)};
  text-align: left;
`;

const Firm = ({ anitex }) => {
  const {
    firm: { firm1, firm2, address1, address2, nip, phone, email },
  } = useContext(FirmContext);
  const {
    firm1: anitexFirm1,
    firm2: anitexFirm2,
    address1: anitexAddress1,
    address2: anitexAddress2,
    nip: anitexNIP,
    phone: anitexPhone,
    email: anitexEmail,
  } = anitexFirm;
  const { nip: firmNIP, phone: firmPhone, email: firmEmail } = firm;

  return (
    <Wrapper>
      <Name>{anitex ? anitexFirm1 : firm1}</Name>
      <Name second>{anitex ? anitexFirm2 : firm2}</Name>
      <Wrapper address>
        <Address>{anitex ? anitexAddress1 : address1}</Address>
        <Address>{anitex ? anitexAddress2 : address2}</Address>
      </Wrapper>
      <Text index={firmNIP} text={anitex ? anitexNIP : nip} />
      <Text index={firmPhone} text={getPhone(anitex ? anitexPhone : phone)} />
      {(anitex || email) && <Text index={firmEmail} text={anitex ? anitexEmail : email} />}
    </Wrapper>
  );
};

Firm.propTypes = {
  anitex: PropTypes.bool,
};

Firm.defaultProps = {
  anitex: false,
};

export default Firm;
