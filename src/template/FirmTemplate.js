import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import Firm from 'components/Firm/Firm';
import Edit from 'components/Edit/Edit';
import { grey } from 'styled/colors';

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px dashed ${grey};
`;

function FirmTemplate() {
  const {
    firm: { firm1 },
  } = useContext(AppContext);

  return (
    <Wrapper>
      <Firm anitex />
      <Firm />
      <Edit type="firm" value={firm1} />
    </Wrapper>
  );
}

export default FirmTemplate;
