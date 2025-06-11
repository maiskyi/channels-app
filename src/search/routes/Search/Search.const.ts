import { DTO } from '@network/api';

export const INITIAL_DATA: DTO.SearchChannelsItem[] = Array.from({
  length: 3,
}).map((_, index) => ({
  id: index.toString(),
  photo: 'photo',
  title: 'title',
  userName: 'userName',
}));
