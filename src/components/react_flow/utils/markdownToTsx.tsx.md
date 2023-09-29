import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock: React.FC<any> = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language ?? 'text'} style={docco}>
      {value}
    </SyntaxHighlighter>
  );
};

const MarkdownToTsx: React.FC<{ markdown: string }> = ({ markdown }) => {
  return (
    <ReactMarkdown
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className ?? '');
          return !inline && match ? (
            <CodeBlock language={match[1]} value={String(children).replace(/\n$/, '')} {...props} />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default MarkdownToTsx;
