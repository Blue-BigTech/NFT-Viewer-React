import React from 'react';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import MainBody from '../components/MainBody';
export default function MainPage() {
  return (
    <React.Fragment>
      <TopBar />
      <MainBody />
      <BottomBar />   
    </React.Fragment>
  )
}