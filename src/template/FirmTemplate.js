import React, { useContext } from 'react';
import styled from 'styled-components';
import FirmContext from 'context/FirmContext';
import { grey } from 'styled/colors';
import Firm from 'components/Firm/Firm';
import Edit from 'components/Edit/Edit';

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px dashed ${grey};
`;

const FirmTemplate = () => {
  const {
    firm: { firm1 },
  } = useContext(FirmContext);

  return (
    <Wrapper>
      <Firm anitex />
      <Firm />
      <Edit type="firm" value={firm1} />
    </Wrapper>
  );
};

export default FirmTemplate;
