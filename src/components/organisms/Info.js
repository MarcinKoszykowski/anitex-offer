import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from 'components/molecules/Text';
import { info as infoValue } from 'data/value';
import colors from 'styled/colors';
import Edit from 'components/molecules/Edit';
import withContext from 'hoc/withContext';

const Wrapper = styled.div`
  position: relative;
  text-align: left;
  padding: 15px 10px;
  border-bottom: 1px dashed ${colors.grey};
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

Info.propTypes = {
  context: PropTypes.shape({
    info: PropTypes.shape({
      delivery: PropTypes.string.isRequired,
      deadline: PropTypes.string.isRequired,
      payment: PropTypes.string.isRequired,
    }),
    print: PropTypes.bool.isRequired,
    login: PropTypes.bool.isRequired,
    openNewItemBar: PropTypes.func.isRequired,
  }).isRequired,
};

export default withContext(Info);
