import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import interviewMd from './document/Interview.md';
import MarkdownEditor from '@uiw/react-markdown-editor';
import rehypeRaw from 'rehype-raw'; // 允许解析 HTML
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm'; // 支持表格语法
import 'highlight.js/styles/github-dark.css'; // 代码高亮样式
import { UpCircleFilled } from '@ant-design/icons';

import Nav from './nav'
import LoadingScreen from './component/LoadingScreen';

import './index.less'
import { Button, Input, Space } from 'antd';


function App() {
  const [markdown, setMarkdown] = React.useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState('')
  const [isShow,setIsShow] = useState(false)

  const answer = '终不似少年游～'


  React.useEffect(() => {
    fetch(interviewMd)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);


  useEffect(() => {
    const div = document.getElementById('container');

    const handleScroll = (e: any) => {
      if (e.target.scrollTop > 500) {
        setIsVisible(true)
      } else {
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

  const onFinish =()=>{
    if(answer===value){
      setIsShow(true)
    }else{
      setIsShow(false)

    }
    
  }


  return <div id='container' className="markdown-container">

{
  !isShow?(
    <div  style={{ width: '100%',margin:'20px 0 0 20px' }}>
    <div style={{ marginBottom:10, color:  '#FF6F00'}}>
  欲买桂花同载酒
</div>
<Space.Compact style={{ width: '30%'}}>
      <Input value={value} onChange={(e)=>{setValue(e.target.value)}} defaultValue="Combine input and button" />
     
     
      <Button onClick={onFinish}>确认</Button>
    </Space.Compact>
          <div style={{color: 'red',marginTop:10}}>输入正确答案解锁完整面试题</div>
    </div>
  ):(
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
  )
}
   




   

  </div>
  //  <ReactMarkdown>{markdown}</ReactMarkdown>;
}

export default App;