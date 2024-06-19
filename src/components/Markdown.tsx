/** Render an HTML AST generated from Markdown files. */
export default function Markdown(props: { htmlAst: HtmlAst }) {
  return `TODO: Render ${props.htmlAst.type}`;
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
