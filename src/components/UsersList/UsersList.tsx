import { useState } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import UserDeatailModal from '../UserDeatailModal/UserDeatailModal';
import UserCard from './UserCard/UserCard';
import { NoResults, UsersListContainer } from './usersListStyles';
import GitHubOctocat from '../../assets/images/github_octocat.svg';
import Pagination from './Pagination/Pagination';

const UsersList = () => {
  const { usersList, totalSearchResults } = useGlobalContext();
  const [userDetailModalOpen, setUserDetailModalOpen] = useState(false);

  return (
    <>
      {!usersList.length && (
        <NoResults data-testid="noResults">
          <img src={GitHubOctocat} alt="GitHub Octocat" />
          <div className="texts">
            <h2>Nothing to show</h2>
            <h4>Type your search term to look for GitHub users!</h4>
          </div>
        </NoResults>
      )}

      {usersList.length > 0 && (
        <>
          <UsersListContainer data-testid="usersList">
            {usersList.map(user => {
              return <UserCard key={user.id} userData={user} setDetailsOpen={setUserDetailModalOpen} />;
            })}
          </UsersListContainer>

          {totalSearchResults > 20 && <Pagination />}
        </>
      )}

      <UserDeatailModal isOpen={userDetailModalOpen} setIsOpen={setUserDetailModalOpen} />
    </>
  );
};

export default UsersList;
