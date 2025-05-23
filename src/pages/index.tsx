import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import interviewMd from './document/Interview.md';
import MarkdownEditor from '@uiw/react-markdown-editor';
import rehypeRaw from 'rehype-raw'; // 允许解析 HTML
import rehypeHighlight from 'rehype-highlight';
import Nav from './nav'

import remarkGfm from 'remark-gfm'; // 支持表格语法
import 'highlight.js/styles/github-dark.css'; // 代码高亮样式

import { UpCircleFilled } from '@ant-design/icons';

import './index.less'
import LoadingScreen from './component/LoadingScreen';

function App() {
  const [markdown, setMarkdown] = React.useState('');
  const [isVisible, setIsVisible] = useState(false);


  React.useEffect(() => {
    fetch(interviewMd)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
  

  useEffect(() => {
    const div = document.getElementById('container');
    
    const handleScroll = (e: any) => {
      console.log('111',e.target.scrollTop)
      if(e.target.scrollTop>500){
        setIsVisible(true)
      }else {
        setIsVisible(false)
      }
    };

    if (div) {
      div.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (div) {
        div.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);


  const scrollToSection = () => {
    const element = document.getElementById('title');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
}


  return <div id='container' className="markdown-container">

    <LoadingScreen>
      <div id='title' className='title'>前端面试总结</div>
      {
        isVisible && (
        <div className='toTop' onClick={scrollToSection} >
         <UpCircleFilled />
       </div>    
        )
      }
    
    <Nav />

      <ReactMarkdown
        rehypePlugins={[rehypeRaw, remarkGfm, rehypeHighlight]}
      >
        {markdown}
      </ReactMarkdown>

    </LoadingScreen>


  </div>
  //  <ReactMarkdown>{markdown}</ReactMarkdown>;
}

export default App;