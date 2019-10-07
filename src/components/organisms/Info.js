import React from 'react';
import styled from 'styled-components';
import Text from 'components/molecules/Text';
import { info as infoValue } from 'data/Value';
import Colors from 'styled/Colors';
import Edit from 'components/molecules/Edit';
import withContext from 'hoc/withContext';

const Wrapper = styled.div`
  position: relative;
  text-align: left;
  padding: 15px 10px;
  border-bottom: 1px dashed ${Colors.grey};
`;

function Info({ context }) {
  const { info, print, login, openNewItemBar } = context;

  return (
    <Wrapper>
      <Text info index={infoValue.delivery} text={info.delivery} />
      <Text info index={infoValue.deadline} text={info.deadline} />
      <Text info index={infoValue.payment} text={info.payment} />
      <Edit
        info
        type="info"
        editButtonOnClick={openNewItemBar}
        login={login}
        print={print}
        value={info.delivery}
      />
    </Wrapper>
  );
}

export default withContext(Info);
