import { updateVersionDevice } from "@/api/request/post/updateVersionDevice";
import { useQuery } from "@tanstack/react-query";

export const useUpdateVersionDevice = () => {
  const { data, isLoading, isError, isFetching } = useQuery({
    queryFn: () => updateVersionDevice(),
    queryKey: ["updateVersionDevice"],
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
