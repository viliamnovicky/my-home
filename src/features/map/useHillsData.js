import { useQuery } from "@tanstack/react-query";
import { getHill, getHillName, getHillNameGeonames, getHillNameGoogle, getHillNameNominatim, getHills } from "../../services/apiHills";

export function useHillsData(userId) {
  const {
    isLoading: isLoadingHills,
    data: hills,
    error: errorHills,
    refetch: refetchHills
  } = useQuery({
    queryKey: ["hills", userId],
    queryFn: () => getHills(userId),
  });
  return { isLoadingHills, hills, errorHills, refetchHills };
}

export function useGetHillData(userId, tag) {
  const {
    isLoading: isLoadingHill,
    data: hillData,
    error: errorHill,
    refetch: refetchHill
  } = useQuery({
    queryKey: ["hill", userId, tag], // Unique query key to cache based on userId and tag
    queryFn: () => getHill(userId, tag),
    enabled: !!userId && !!tag, // Only run the query if userId and tag are provided
  });

  return { isLoadingHill, hillData, errorHill, refetchHill };
}


export function useGetHillName(coords) {
  const {
    isLoading: isLoadingHillName,
    data: hillName,
    error: errorHillName,
  } = useQuery({
    queryKey: ["hillName", coords],
      queryFn: () => getHillName(coords),
  });
  return { isLoadingHillName, hillName, errorHillName };
}

export function useGetHillNameGoogle(coords) {
  const {
    isLoading: isLoadingHillName,
    data: hillName,
    error: errorHillName,
  } = useQuery({
    queryKey: ["hillName", coords],
      queryFn: () => getHillNameGoogle(coords),
  });
  return { isLoadingHillName, hillName, errorHillName };
}

export function useGetHillNameNominatim(coords) {
  const {
    isLoading: isLoadingHillName,
    data: hillName,
    error: errorHillName,
  } = useQuery({
    queryKey: ["hillName", coords],
      queryFn: () => getHillNameNominatim(coords),
  });
  return { isLoadingHillName, hillName, errorHillName };
}
export function useGetHillNameGeonames(coords) {
  const {
    isLoading: isLoadingHillInfo,
    data: hillInfo,
    error: errorHillInfo,
  } = useQuery({
    queryKey: ["hillInfo", coords],
      queryFn: () => getHillNameGeonames(coords),
  });
  return { isLoadingHillInfo, hillInfo, errorHillInfo };
}
