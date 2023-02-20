import { useGlobalContext } from '../../../context/GlobalContext';
import { _githubService } from '../../../services/githubService';
import { PaginationContainer } from './paginationStyles';

export default function Pagination() {
  const { setIsLoading, searchQuery, setUsersList, actualPage, setActualPage } = useGlobalContext();

  const handleChangePage = async (direction: string) => {
    setIsLoading(true);

    const page = direction === 'prev' ? actualPage - 1 : actualPage + 1;

    if (searchQuery.trim() !== '') {
      const users = await _githubService.searchUsers(searchQuery, page);

      if (users !== null) {
        setUsersList(users.items);
        setActualPage(page);
      }
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  return (
    <PaginationContainer>
      <button disabled={actualPage === 1} title="Previous page" onClick={() => handleChangePage('prev')}>
        <svg viewBox="0 0 24 24">
          <path d="M3.97 12C3.97 16.41 7.59 20.03 12 20.03C16.41 20.03 20.03 16.41 20.03 12C20.03 7.59 16.41 3.97 12 3.97C7.59 3.97 3.97 7.59 3.97 12M2 12C2 6.46 6.46 2 12 2C17.54 2 22 6.46 22 12C22 17.54 17.54 22 12 22C6.46 22 2 17.54 2 12M10.46 11V8L6.5 12L10.46 16V13H17.5V11" />
        </svg>
      </button>

      <button title="Next page" onClick={() => handleChangePage('next')}>
        <svg viewBox="0 0 24 24">
          <path d="M20.03 12C20.03 7.59 16.41 3.97 12 3.97C7.59 3.97 3.97 7.59 3.97 12C3.97 16.41 7.59 20.03 12 20.03C16.41 20.03 20.03 16.41 20.03 12M22 12C22 17.54 17.54 22 12 22C6.46 22 2 17.54 2 12C2 6.46 6.46 2 12 2C17.54 2 22 6.46 22 12M13.54 13V16L17.5 12L13.54 8V11H6.5V13" />
        </svg>
      </button>
    </PaginationContainer>
  );
}
