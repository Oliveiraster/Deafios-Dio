import { api } from '../services/api'

export const getPosts = async () => {
  try {
    const { data } = await api.get('/posts');
    console.log('Dados recebidos:', data); 
    return data || [];
  } catch (error) {
    console.error('Erro ao buscar posts:', error.response?.data || error.message);
    return [];
  }
};

export const getPostBySlug = async (id) => {
  try {
    const { data } = await api.get(`/posts?id=eq.${id}`);
    return data[0]
  } catch (error) {
    console.error('Erro ao buscar post:', error);
    return null;
  }
}