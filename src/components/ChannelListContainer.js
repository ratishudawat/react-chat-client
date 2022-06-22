import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import HospitalIcon from '../assets/hospital.png';
import LogoutIcon from '../assets/logout.png';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';

const SideBar = () => (
  <div className='channel-list__sidebar'>
    <div className='channel-list__sidebar__icon1'>
      <div className='icon1__inner'>
        <img src={HospitalIcon} alt='Hospital' width='30' />
      </div>
    </div>
    <div className='channel-list__sidebar__icon2'>
      <div className='icon1__inner'>
        <img src={LogoutIcon} alt='Logout' width='30' />
      </div>
    </div>
  </div>
);

const CompanyHeader = () => (
  <div className='channel-list__header'>
    <div className='channel-list__header__text'>Medical Pager</div>
  </div>
);

function ChannelListContainer() {
  return (
    <>
      <SideBar />
      <div className='channel-list__list__wrapper'>
        <CompanyHeader />
        <ChannelSearch />
      </div>
    </>
  );
}

export default ChannelListContainer;
