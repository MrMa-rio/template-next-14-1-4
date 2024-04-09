import { listOfVersions } from "@/api/request/get/listOfVersions";
import { useQuery } from "@tanstack/react-query";

export const useListOfVersions = () => {
  const { data, isLoading, isError, isFetching } = useQuery({
    queryFn: () => listOfVersions(),
    queryKey: ["listOfVersions"],
    refetchOnWindowFocus: true,
    staleTime: 30000,
  });

  return {
    data: data,
    Loading: isLoading,
    Error: isError,
    Fetching: isFetching,
  };
};
