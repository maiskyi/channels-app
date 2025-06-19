import { DTO } from '@network/api';

export const INITIAL_DATA: DTO.GetChannelsResponse = {
  data: Array.from({ length: 3 }).map((_, index) => ({
    id: index,
    photo: 'photo',
    title: 'title',
    userName: 'userName',
  })),
  total: 3,
};
