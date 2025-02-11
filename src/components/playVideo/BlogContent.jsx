import React from 'react';
import DOMPurify from 'dompurify'; // To sanitize and prevent XSS
import { marked } from 'marked'; // To convert Markdown to HTML
import './BlogContent.scss';

const BlogContent = ({ content }) => {
  // Ensure content is treated as a string
  const contentString =
    typeof content === 'string'
      ? content
      : Array.isArray(content)
      ? content.join('\n')
      : '';

  // Preprocess the content to handle custom patterns, standard links, and YouTube links
  const preprocessMarkdown = (markdown) => {
    // Remove the first link (specific format)
    markdown = markdown.replace(
      /\[\!\[.*?\]\(.*?\)\]\(https:\/\/3speak\.tv\/watch\?v=.*?\)/,
      ''
    );

    // Remove the second link (specific format)
    markdown = markdown.replace(
      /▶️ \[Watch on 3Speak\]\(https:\/\/3speak\.tv\/watch\?v=.*?\)/,
      ''
    );

    // Handle standard Markdown links ([text](url))
    markdown = markdown.replace(
      /\[(.*?)\]\((.*?)\)/g,
      (match, text, url) => {
        // Treat all Markdown links as regular links (even if they are YouTube links)
        return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
      }
    );

    // Handle Markdown-style images (![alt](url))
    markdown = markdown.replace(
      /!\[(.*?)\]\((.*?)\)/g,
      (match, alt, url) => {
        console.log('Markdown-style image detected:', match); // Debugging
        return `<img src="${url}" alt="${alt}" loading="lazy" />`;
      }
    );

    // Replace standalone image URLs with <img> tags
    markdown = markdown.replace(
      /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|bmp|svg|ico|tiff|tif|heic|heif|avif))/gi,
      (match) => {
        console.log('Standalone image URL detected:', match); // Debugging
        return `<img src="${match}" alt="Embedded Image" loading="lazy" />`;
      }
    );

    // Replace nested image links with proper Markdown syntax
    markdown = markdown.replace(
      /\[!\[(.*?)\]\((.*?)\)\]\((.*?)\)/g,
      '<a href="$3" target="_blank" rel="noopener noreferrer"><img src="$2" alt="$1" loading="lazy" /></a>'
    );

    // Replace standalone YouTube links with embedded iframes
    markdown = markdown.replace(
      /https?:\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/watch\?v=)([\w-]{11})(?:\?.*)?/g,
      (match, videoId) => {
        console.log('Standalone YouTube link detected:', match); // Debugging
        return `<div class="youtube-embed">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/${videoId}"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>`;
      }
    );

    return markdown;
  };

  // Preprocess the Markdown content
  const processedContent = preprocessMarkdown(contentString);

  // Convert Markdown to HTML
  const markdownToHtml = marked(processedContent, {
    gfm: true, // Enable GitHub-flavored Markdown
    breaks: true, // Convert line breaks to <br>
  });

  // Sanitize the HTML output
  const sanitizedHTML = DOMPurify.sanitize(markdownToHtml, {
    ADD_TAGS: ['iframe'], // Allow iframe tags
    ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'target', 'rel'], // Allow necessary attributes
  });

  return (
    <div
      className="markdown-view"
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
};

export default BlogContent;