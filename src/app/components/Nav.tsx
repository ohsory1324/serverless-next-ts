import Link from 'next/link';
import styled from 'styled-components';

const NavButton = styled.a`
  margin: 1rem;

  &:hover {
    color: red;
    cursor: pointer;
  }
`;

export default () => (
  <div>
    <Link href="/" prefetch={true}>
      <NavButton>Home</NavButton>
    </Link>
    <Link href="/about" prefetch={true}>
      <NavButton>About</NavButton>
    </Link>
  </div>
);
