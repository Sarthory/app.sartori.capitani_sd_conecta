import http from '../config/axiosConfig';
import { toast } from 'react-toastify';
import { SearchResult, UserData } from '../types/Types';

export const _githubService = {
  searchUsers: async (query: string, page = 1): Promise<SearchResult | null> => {
    const req = await http.get(`search/users?q=${query}&per_page=20&page=${page}`);

    const { status, data } = req;

    switch (status) {
      case 200: {
        if (!data.items.length) {
          toast.info(`No users found corresponding to "${query}", try again with another search term 😃`);
        }

        return {
          totalCount: data.total_count,
          items: data.items as UserData[],
        };
      }

      default: {
        toast.error(data.message);
        return null;
      }
    }
  },

  acquireUserDetails: async (userLogin: string): Promise<UserData | null> => {
    const req = await http.get(`/users/${userLogin}`);

    const { status, data } = req;

    switch (status) {
      case 200: {
        return data as UserData;
      }

      default: {
        toast.error(data.message);
        return null;
      }
    }
  },
};
