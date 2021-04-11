import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';
import Router, { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LeftMenu from '../LeftMenu';
import { UserHeader } from '../UserHeader/UserHeader';
import Modal from '../modals/Modal';
import { ProjectMakeForm } from '../modals/ProjectMakeForm/ProjectMakeForm';

const Wrap = styled.div`
  height:100vh;
`;

const BodyWrap = styled.div`
  display:flex;
  height:calc(100% - 40px);
`;
const Container = styled.div`
  flex : 1;
`;
const Content = styled.div`
`;

const Header = styled.header`
  position:relative;
  height:40px;
  background: #2C2A34;
`;

const AppLayout = ({ children }) => {
  const router = useRouter();
  const cookies = new Cookies();
  const token = cookies.get('token');
  const userId = cookies.get('userId');

  useEffect(() => {
    if (!token) {
      alert('재 로그인 해주세요.');
      Router.replace('/login');
    }
  }, [token]);
  return (
    <Wrap>
      <Header />
      <BodyWrap>
        <LeftMenu />
        <Container>
          {router.pathname.indexOf('detail') < 0 && <UserHeader />}
          <Content userId={userId}>{children}</Content>
        </Container>
      </BodyWrap>
      <Modal visible={false}>
        <ProjectMakeForm userId={userId} />
      </Modal>
    </Wrap>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
