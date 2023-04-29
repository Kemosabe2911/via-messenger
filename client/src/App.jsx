import React from 'react'
import { StreamChat } from 'stream-chat'
import { ChannelList, Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'

const client =StreamChat.getInstance()

const App = () => {
  return (
    <div className='app__wrapper'>
       <Chat>
        <ChannelListContainer/>
        <ChannelListContainer/>
       </Chat>
    </div>
  )
}

export default App