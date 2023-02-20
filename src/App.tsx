import Loader from './components/Loader/Loader';
import PageContainer from './components/PageContainer/PageContainer';
import UsersList from './components/UsersList/UsersList';

export function App() {
  return (
    <>
      <PageContainer>
        <UsersList />
      </PageContainer>

      <Loader />
    </>
  );
}
