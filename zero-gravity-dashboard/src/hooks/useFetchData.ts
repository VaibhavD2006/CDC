import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/lib/api";

export function useFetchData() {
  return useQuery({
    queryKey: ["dashboard-data"],
    queryFn: fetchData,
  });
}


