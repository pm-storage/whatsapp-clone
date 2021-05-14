import React from 'react'
import Navbar from './Navbar'
import ChatList from './ChatList'
import styled from 'styled-components'


const Container = styled.div`
  height: 100vh;
`;
const ChatListScreen: React.FC = () => (
  <Container>
    <Navbar />
    <ChatList />
  </Container>
)

export default ChatListScreen
