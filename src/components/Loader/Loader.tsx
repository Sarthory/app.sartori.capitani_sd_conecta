import { useGlobalContext } from '../../context/GlobalContext';
import { LoaderContainer } from './loaderStyles';

export default function Loader() {
  const { isLoading } = useGlobalContext();

  return (
    <>
      {isLoading && (
        <LoaderContainer data-testid="pageLoader">
          <div className="loader" />
        </LoaderContainer>
      )}
    </>
  );
}
