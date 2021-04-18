import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  PostCardWrapper,
  CreatorArea,
  Thumbnail,
  CreatorInfo,
  Name,
  Rank,
  Date,
  Company,
  Team,
  PostHeader,
  PostTitle,
  PostCardContainer,
  TaskNumber,
  TaskNumberArea,
  TaskListGroup,
  TaskList,
  TaskItemTitle,
  TaskListCell,
  PostCardContent,
  StateButton,
  PostFooter,
  CommentWrap,
  CommentHeader,
  CommentGroup,
  CommentThumNail,
  CommentUserArea,
  CommentUser,
  CommentText,
  CommentMeMenu,
  CommentItem,
  CommentList,
  PostButtonArea,
  PostButton,
  DisplayPostRead,
  MeItem,
  CommentInputWrap,
  CommentInput,
} from './styles';

const PostCard = ({ write, view }) => {
  const [taskState, setTaskState] = useState('request');
  // const [currentState, setCurrentState] = useState('request');
  const taskType = ['요청', '진행', '피드백', '완료', '보류'];
  const state = {
    0: 'request',
    1: 'ongoing',
    2: 'feedback',
    3: 'complete',
    4: 'hold',
  };
  const stateHandel = (i) => {
    setTaskState(state[i]);
  };

  return (
    <PostCardWrapper write={write}>
      {view && (
        <CreatorArea>
          <Thumbnail />
          <CreatorInfo>
            <dt>
              <Name>홍길동</Name>
              <Rank>매니저</Rank>
              <Date>2021-04-16</Date>
            </dt>
            <dd>
              <Company>플로우</Company>
              <Team>애니멀팀</Team>
            </dd>
          </CreatorInfo>
        </CreatorArea>
      )}
      <PostHeader>
        {write ? (
          <PostTitle contentEditable="true" placeholder="제목을 입력하세요." />
        ) : (
          <PostTitle>플로우 이용안내 메뉴얼</PostTitle>
        )}
        {view && (
          <TaskNumberArea>
            <TaskNumber>업무번호 0001</TaskNumber>
          </TaskNumberArea>
        )}
      </PostHeader>
      <PostCardContainer>
        <TaskListGroup>
          <TaskList>
            <TaskItemTitle>업무상태</TaskItemTitle>
            <TaskListCell>
              {taskType.map((v, i) => {
                if (state[i] === taskState) {
                  return (
                    <StateButton key={i} type="button" state={taskState}>
                      {v}
                    </StateButton>
                  );
                }
                return (
                  <StateButton key={i} type="button" onClick={() => stateHandel(i)}>
                    {v}
                  </StateButton>
                );
              })}
            </TaskListCell>
          </TaskList>
          <TaskList>
            <TaskItemTitle>담당자</TaskItemTitle>
            <TaskListCell>
              <button type="button">담당자 추가</button>
            </TaskListCell>
          </TaskList>
          <TaskList>
            <TaskItemTitle>시작일시</TaskItemTitle>
            <TaskListCell>
              <span>
                <span>2021-04-16 (금), 01:29</span>
              </span>
            </TaskListCell>
            <TaskItemTitle>마감일시</TaskItemTitle>
            <TaskListCell>
              <span>
                <span>2021-04-16 (금), 01:29</span>
              </span>
            </TaskListCell>
          </TaskList>
        </TaskListGroup>
        {write
          ? (
            <PostCardContent
              contentEditable="true"
              placeholder="내용을 입력하세요."
            />
          )
          : <PostCardContent>홍길동 간지로다가</PostCardContent>}
        {view && (
          <PostButtonArea>
            <PostButton type="button">반응하기</PostButton>
            <PostButton type="button">담아두기</PostButton>
            <DisplayPostRead>
              읽음<em>76</em>
            </DisplayPostRead>
          </PostButtonArea>
        )}
      </PostCardContainer>
      {view && (
        <PostFooter>
          <CommentWrap>
            <CommentHeader />
            <CommentGroup>
              <CommentList>
                <CommentThumNail />
                <CommentItem>
                  <CommentUserArea>
                    <CommentUser>
                      <Name>홍길동</Name>
                      <Rank>매니저</Rank>
                      <Date>2021-04-16</Date>
                    </CommentUser>
                    <CommentMeMenu>
                      <MeItem>수정</MeItem>
                      <MeItem>삭제</MeItem>
                    </CommentMeMenu>
                  </CommentUserArea>
                  <CommentText>1231221133</CommentText>
                </CommentItem>
              </CommentList>
            </CommentGroup>
            <CommentInputWrap>
              <CommentThumNail />
              <CommentInput
                contentEditable="true"
                placeholder="줄바꿈은 Shift or Ctrl + Enter / 입력은 Enter 입니다.."
              />
            </CommentInputWrap>
          </CommentWrap>
        </PostFooter>
      )}
    </PostCardWrapper>
  );
};

export { PostCard };
