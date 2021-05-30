import styled from 'styled-components';

/**
 * Styles HTML to look like a man page viewed by neovim under the OneDark
 * theme, which happens to be my personal setup. Normally this would use
 * dedicated styled-components instead of children selectors, but it has to
 * work with markdown's generated HTML.
 */
const ManPage = styled.main`
  padding: 0.5rem 1rem;
  line-height: 1.4rem;

  h1 {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    color: ${(props) => props.theme.colors.green};
    padding-bottom: ${(props) => (props.synopsis ? '2rem' : '1rem')};

    ::before,
    ::after {
      content: '${(props) => props.section}';
      display: block;
    }

    font-size: inherit;
    margin: 0;
    font-weight: normal;

    @media screen and (max-width: 640px) {
      ::before,
      ::after {
        display: none;
      }
    }
  }

  h2 {
    color: ${(props) => props.theme.colors.magenta};
    font-size: inherit;
    font-weight: normal;
    text-transform: uppercase;
    margin: 0;

    :first-of-type {
      margin-top: 2rem;
    }
  }

  p {
    color: ${(props) => props.theme.colors.text};
    margin: 0;
    margin-left: 4rem;
    margin-bottom: 2rem;

    & + & {
      margin-top: 1rem;
    }

    @media screen and (max-width: 640px) {
      margin-left: 2rem;
    }
  }

  a {
    color: ${(props) => props.theme.colors.yellow};
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  dl {
    margin: 2rem 4rem;
    margin-right: 0;
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-column-gap: 4rem;
    grid-row-gap: 1rem;

    @media screen and (max-width: 640px) {
      margin-left: 2rem;
      grid-template-columns: 1fr;
    }
  }

  dt {
    color: ${(props) => props.theme.colors.cyan};

    ::before {
      content: '--';
    }
  }

  dd {
    margin: 0;
    max-width: 50rem;

    @media screen and (max-width: 640px) {
      margin-bottom: 2rem;
    }
  }

  ul,
  ol {
    color: ${(props) => props.theme.colors.text};
    padding: 0;
    margin: 0;
    margin-left: 4rem;
    margin-bottom: 2rem;
    list-style-type: '- ';

    & + & {
      margin-top: 1rem;
    }

    li {
      margin-left: 1rem;
    }

    @media screen and (max-width: 640px) {
      margin-left: 2rem;
      list-style-type: none;

      li {
        margin-left: 0;
        margin-bottom: 1rem;
      }
    }
  }

  hr {
    margin: 2rem 4rem;
    border: 1px dashed ${(props) => props.theme.colors.text};
  }

  code {
    background-color: rgba(255, 255, 255, 0.1);
    color: ${(props) => props.theme.colors.blue};
    padding: 0.1rem 0.2rem;
    border-radius: 0.2rem;
  }
`;

export default ManPage;
