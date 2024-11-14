import { useQuery } from "@tanstack/react-query";
import { getReport, GetReportParams } from "../api/reports";

export const useGetReport = (params: GetReportParams) => {
  const { data, error, isFetching, isLoading, refetch } = useQuery<void>({
    enabled: true,
    queryKey: ["REPORT", params],
    queryFn: () => getReport(params),
    staleTime: 100,
    retry: 0,
  });

  return { data, error, isFetching, isLoading, refetch };
};
