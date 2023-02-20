import Header from '../Header/Header';
import { Container } from './pageContainerStyles';

interface Props {
  children: JSX.Element;
}

export default function PageContainer({ children }: Props) {
  return (
    <Container data-testid="pageContainer">
      <Header />
      <div className="children">{children}</div>
    </Container>
  );
}
