import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

const BlogContent = ({ content }) => {
  // Clean and format the content
  const formattedContent = content
    .filter((item) => item.trim() !== '') // Remove empty strings
    .join('\n'); // Join items with newlines to create valid markdown

  return (
    <ReactMarkdown 
      rehypePlugins={[rehypeRaw]} 
      remarkPlugins={[remarkGfm]}
    >
      {formattedContent}
    </ReactMarkdown>
  );
};

export default BlogContent;
