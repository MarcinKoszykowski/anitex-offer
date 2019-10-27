import React, { useContext } from 'react';
import styled from 'styled-components';
import InfoContext from 'context/InfoContext';
import { info as infoValue } from 'data/value';
import { grey } from 'styled/colors';
import Text from 'components/Text/Text';
import Edit from 'components/Edit/Edit';

const Wrapper = styled.div`
  position: relative;
  text-align: left;
  padding: 15px 10px;
  border-bottom: 1px dashed ${grey};
`;

const InfoTemplate = () => {
  const {
    info: { delivery, deadline, payment },
  } = useContext(InfoContext);
  const { delivery: deliveryValue, deadline: deadlineValue, payment: paymentValue } = infoValue;

  return (
    <Wrapper>
      <Text info index={deliveryValue} text={delivery} />
      <Text info index={deadlineValue} text={deadline} />
      <Text info index={paymentValue} text={payment} />
      <Edit info type="info" value={delivery} />
    </Wrapper>
  );
};

export default InfoTemplate;
