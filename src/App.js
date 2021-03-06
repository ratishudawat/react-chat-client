import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import './App.css';
import { ChannelListContainer, ChannelContainer } from './components/';

const apiKey = 'peu7q2ynwmhx';

const client = StreamChat.getInstance(apiKey);

function App() {
  return (
    <div className='app__wrapper'>
      <Chat client={client} theme='theme light'>
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App;
