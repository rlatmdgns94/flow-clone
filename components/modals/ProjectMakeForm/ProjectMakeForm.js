import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  ProjectFormPopup,
  Header,
  PopupTitle,
  CloseButton,
  Content,
  TitleInput,
  DescriptionTextArea,
  SetArea,
  SetItem,
  SetTitle,
  SetText,
  ToggleButton,
  SubmitButton,
  Circle,
} from './styles';
import { PROJECT_ADD_REQUEST } from '../../../reducers/project';

const ProjectMakeForm = ({ userId }) => {
  const [explain, setExPlain] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const explainChange = (e) => {
    setExPlain(e.target.value);
  };

  const createProject = () => {
    console.log('만들기');
    if (title === '') {
      return alert('제목을 입력해주세요;');
    }
    dispatch({
      type: PROJECT_ADD_REQUEST,
      data: {
        explain,
        title,
        userId,
      },
    });
  };
  return (
    <ProjectFormPopup>
      <Header>
        <PopupTitle>프로젝트 만들기</PopupTitle>
        <CloseButton />
      </Header>
      <Content>
        <TitleInput type="text" placeholder="제목을 입력하세요" onChange={titleChange} value={title} />
        <DescriptionTextArea placeholder="프로젝트에 관한 설명 입력 (필수항목은 아닙니다.)" onChange={explainChange} value={explain} />
        {/* <SetArea>
          <SetTitle>옵션 설정</SetTitle>
          <SetItem>
            <SetText>회사 공개 프로젝트 설정</SetText>
            <ToggleButton active={false}>
              <Circle />
            </ToggleButton>
          </SetItem>
          <SetItem>
            <SetText>관리자 승인 후 참여가능</SetText>
            <ToggleButton active={false}>
              <Circle />
            </ToggleButton>
          </SetItem>
        </SetArea> */}
      </Content>
      <SubmitButton type="button" onClick={createProject}>적용하기</SubmitButton>
    </ProjectFormPopup>
  );
};

ProjectMakeForm.propTypes = {

};

export { ProjectMakeForm };
