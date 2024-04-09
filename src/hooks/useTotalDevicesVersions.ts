import { totalDevicesVersions } from "@/api/request/get/totalDevicesVersions";
import { useQuery } from "@tanstack/react-query";

export const useTotalDevicesVersions = () => {
  const { data, isLoading, isError, isFetching } = useQuery({
    queryFn: () => totalDevicesVersions(),
    queryKey: ["totalDevicesVersions"],
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
