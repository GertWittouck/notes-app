import axios, { AxiosError } from 'axios';
import { Todos, ServerError } from '@/models/models' 

export abstract class TodosApi {
    private static todosClient = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/'
    });

    public static async getTodos(): Promise<any> {
        try {
            const response = await this.todosClient.get<Todos>('/todos');
            return response.data;
          } catch (err) {
            if (err && err.response) {
              const axiosError = err as AxiosError<ServerError>
              return axiosError.response;
            }
            throw err;
          }
    }
}