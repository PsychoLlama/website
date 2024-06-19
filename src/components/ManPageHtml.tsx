import React from 'react';
import * as styles from './ManPage.css';
import { Title, Subheading, Paragraph, Anchor } from './ManPage';

/** Render an HTML AST generated from parsing Markdown. */
export default function ManPageHtml(props: {
  node: HtmlAstNode | Array<HtmlAstNode>;
  section: string;
}) {
  const { node, section } = props;
  const render = (node: HtmlAstNode | Array<HtmlAstNode>) => (
    <ManPageHtml {...props} node={node} />
  );

  if (Array.isArray(node)) {
    return (
      <>
        {node.map((child, index) =>
          React.cloneElement(render(child), { key: index }),
        )}
      </>
    );
  }

  if (node.type === 'text') {
    return node.value;
  }

  switch (node.tagName) {
    case 'h1': {
      return <Title section={section}>{render(node.children)}</Title>;
    }

    case 'h2': {
      return <Subheading>{render(node.children)}</Subheading>;
    }

    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
    case 'em': {
      return <node.tagName>{render(node.children)}</node.tagName>;
    }

    case 'p': {
      return <Paragraph>{render(node.children)}</Paragraph>;
    }

    case 'ul': {
      return (
        <node.tagName className={styles.list}>
          {render(node.children)}
        </node.tagName>
      );
    }

    case 'li': {
      return (
        <node.tagName className={styles.listItem}>
          {render(node.children)}
        </node.tagName>
      );
    }

    case 'hr': {
      return <node.tagName className={styles.divider} />;
    }

    case 'code': {
      return (
        <node.tagName className={styles.code}>
          {render(node.children)}
        </node.tagName>
      );
    }

    case 'br': {
      return <node.tagName />;
    }

    case 'a': {
      return (
        <Anchor href={node.properties.href}>{render(node.children)}</Anchor>
      );
    }

    default: {
      throw new Error(`Unknown element: ${node.tagName}`);
    }
  }
}

export interface HtmlAst {
  type: 'root';
  children: Array<HtmlAstNode>;
}

interface HtmlAstElementNode {
  type: 'element';
  tagName: string;
  properties: Record<string, string>;
  children: Array<HtmlAstNode>;
}

interface HtmlAstTextNode {
  type: 'text';
  value: string;
}

type HtmlAstNode = HtmlAstElementNode | HtmlAstTextNode;
