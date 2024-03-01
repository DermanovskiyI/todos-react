import Service from '@/shared/api/base';
import type { ITodosDTO } from './types';

const RESOURCE = {
  todos: '/todos',
};
export default {
  async fetchTodos(): Promise<ITodosDTO> {
    const res = await Service.get<ITodosDTO>(RESOURCE.todos);
    return res.data || ({} as ITodosDTO);
  },
};
