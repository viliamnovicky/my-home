import { useMutation, useQuery } from "@tanstack/react-query";
import { addHill, getHillName, getHillNameGeonames, getHillNameGoogle, getHillNameNominatim, getHills } from "../services/apiHills";

export function useHillsData() {
  const {
    isLoading: isLoadingHills,
    data: hills,
    error: errorHills,
    refetch
  } = useQuery({
    queryKey: ["hills"],
    queryFn: () => getHills("viliamnovicky"),
  });
  return { isLoadingHills, hills, errorHills, refetch };
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
