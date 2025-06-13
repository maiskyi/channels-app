import { DTO } from '@network/api';

export const INITIAL_DATA: DTO.GetChannelResponse = {
  about: 'about',
  isSubscribed: false,
  photo: 'photo',
  recommendations: Array.from({ length: 3 }).map((_, index) => ({
    id: index.toString(),
    photo: 'photo',
    title: 'title',
    userName: 'userName',
  })),
  title: 'title',
  username: 'username',
};
