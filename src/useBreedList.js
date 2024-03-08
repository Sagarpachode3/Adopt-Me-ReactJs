import { useGetBreedsQuery } from "./petApiService";

//const localCache = {};

export default function useBreedList(animal) {
  const { data: breeds, isLoading } = useGetBreedsQuery(animal, {
    skip: !animal,
  });
  if (!animal) {
    return [[], "loaded"];
  }
  // return [results?.data?.breeds ?? [], results.status];
  return [breeds ?? [], isLoading ? "loading" : "loaded"];
}
