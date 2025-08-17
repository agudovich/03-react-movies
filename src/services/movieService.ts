import axios from "axios";
import type { AxiosInstance } from "axios";
import type { TMDBSearchResponse } from "../types/movie";

const token = import.meta.env.VITE_TMDB_TOKEN as string;

const api: AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: { Authorization: `Bearer ${token}` },
});

export async function fetchMovies(
  query: string,
  page = 1
): Promise<TMDBSearchResponse> {
  const { data } = await api.get<TMDBSearchResponse>("/search/movie", {
    params: { query, page, include_adult: false, language: "en-US" },
  });
  return data;
}
