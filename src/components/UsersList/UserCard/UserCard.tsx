import { useGlobalContext } from '../../../context/GlobalContext';
import { _githubService } from '../../../services/githubService';
import { UserData } from '../../../types/Types';
import { Card } from './userCardStyles';

interface Props {
  userData: UserData;
  setDetailsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function UserCard({ userData, setDetailsOpen }: Props) {
  const { login, html_url, avatar_url } = userData;
  const { setIsLoading, setSelectedUser } = useGlobalContext();

  const handleGetUserDetails = async () => {
    setIsLoading(true);
    const userDetails = await _githubService.acquireUserDetails(login);

    if (userDetails !== null) {
      setSelectedUser(userDetails);
      setDetailsOpen(true);
    }

    setIsLoading(false);
  };

  return (
    <Card title={login} onClick={() => handleGetUserDetails()} data-testid="userCard">
      <div className="image">
        <img src={avatar_url} alt={login} />
      </div>

      <div className="userInfo">
        <div>{login}</div>
        <span title={html_url.split('//')[1]}>{html_url.split('//')[1]}</span>
      </div>
    </Card>
  );
}
