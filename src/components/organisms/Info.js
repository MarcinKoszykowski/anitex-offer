import React, { useContext } from 'react';
import styled from 'styled-components';
import Text from 'components/molecules/Text';
import { info as infoValue } from 'data/value';
import { grey } from 'styled/colors';
import Edit from 'components/molecules/Edit';
import AppContext from 'context';

const Wrapper = styled.div`
  position: relative;
  text-align: left;
  padding: 15px 10px;
  border-bottom: 1px dashed ${grey};
`;

function Info() {
  const { info } = useContext(AppContext);
  const { delivery, deadline, payment } = info;
  const { delivery: deliveryValue, deadline: deadlineValue, payment: paymentValue } = infoValue;

  return (
    <Wrapper>
      <Text info index={deliveryValue} text={delivery} />
      <Text info index={deadlineValue} text={deadline} />
      <Text info index={paymentValue} text={payment} />
      <Edit info type="info" value={delivery} />
    </Wrapper>
  );
}

export default Info;
