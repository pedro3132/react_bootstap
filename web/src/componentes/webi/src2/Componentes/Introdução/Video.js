import React from 'react';
import './Video.css';
import v from '../Videos/v.mp4';

export default function Intro() {
  return (
 <>
<video src= {v} controls autoPlay></video>
 </>

  );
}