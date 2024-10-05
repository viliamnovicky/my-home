import { useNavigate, useLocation } from 'react-router-dom';

export function useUpdateQuery() {
  const navigate = useNavigate();
  const location = useLocation();

  const updateQuery = (queryName, queryValue) => {
    // Get the current path and search params
    const currentPath = location.pathname;
    const searchParams = new URLSearchParams(location.search);

    // Set or update the query parameter
    searchParams.set(queryName, queryValue);

    // Update the URL with the new query parameter (without adding to history)
    navigate(`${currentPath}?${searchParams.toString()}`, { replace: true });
  };

  return updateQuery;
}

export function useDeleteQuery() {
  const navigate = useNavigate();
  const location = useLocation();

  const deleteQuery = (queryName) => {
    // Get the current path and search params
    const currentPath = location.pathname;
    const searchParams = new URLSearchParams(location.search);

    
      searchParams.delete(queryName);
    

    // Update the URL with the modified search params (without adding to history)
    navigate(`${currentPath}?${searchParams.toString()}`, { replace: true });
  };

  return deleteQuery;
}
