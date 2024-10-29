import React from 'react';
import InstagramResult from './results/InstagramResult';
import FacebookResult from './results/FacebookResult';
import TikTokResult from './results/TikTokResult';
import TwitterResult from './results/TwitterResult';

const ResultSection = ({ result }) => {
  const ResultComponent = {
    instagram: InstagramResult,
    facebook: FacebookResult,
    tiktok: TikTokResult,
    twitter: TwitterResult
  }[result.type];

  return <ResultComponent data={result.data.result || result.data.data || result.data} />;
};

export default ResultSection;