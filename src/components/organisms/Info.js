import React, { useContext } from 'react';
import styled from 'styled-components';
import Text from 'components/molecules/Text';
import { info as infoValue } from 'data/value';
import colors from 'styled/colors';
import Edit from 'components/molecules/Edit';
import AppContext from 'context';

const Wrapper = styled.div`
  position: relative;
  text-align: left;
  padding: 15px 10px;
  border-bottom: 1px dashed ${colors.grey};
`;

function Info() {
  const { info } = useContext(AppContext);

  return (
    <Wrapper>
      <Text info index={infoValue.delivery} text={info.delivery} />
      <Text info index={infoValue.deadline} text={info.deadline} />
      <Text info index={infoValue.payment} text={info.payment} />
      <Edit info type="info" value={info.delivery} />
    </Wrapper>
  );
}

export default Info;
