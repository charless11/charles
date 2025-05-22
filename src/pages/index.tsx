import React from 'react';
import ReactMarkdown from 'react-markdown';
import interviewMd from './document/Interview.md';
import MarkdownEditor from '@uiw/react-markdown-editor';
import rehypeRaw from 'rehype-raw'; // 允许解析 HTML
import rehypeHighlight from 'rehype-highlight';

import remarkGfm from 'remark-gfm'; // 支持表格语法
import 'highlight.js/styles/github-dark.css'; // 代码高亮样式

import './index.less'



function App() {
  const [markdown, setMarkdown] = React.useState('');

  React.useEffect(() => {
    fetch(interviewMd)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return <div className="markdown-container">
     <ReactMarkdown 
     rehypePlugins={[rehypeRaw,remarkGfm,rehypeHighlight]}
     >
      {markdown}
    </ReactMarkdown>
     
  </div>
  //  <ReactMarkdown>{markdown}</ReactMarkdown>;
}

export default App;