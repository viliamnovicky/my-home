import { useQuery } from "@tanstack/react-query";
import { getHills } from "../services/apiHills";

export function useHillsData() {
  const {
    isLoading: isLoadingHills,
    data: hills,
    error: errorHills,
  } = useQuery({
    queryKey: ["hills"],
    queryFn: getHills,
  });
  return { isLoadingHills, hills, errorHills };
}
