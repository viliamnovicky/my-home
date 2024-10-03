import { useMutation } from "@tanstack/react-query";
import { addHill } from "../services/apiHills";
//import toast from "react-hot-toast";

export function useAddHill(userId) {
  const {
    mutate: addNewHill,
    isLoading: isAddingHill,
    error: errorAddingHill,
  } = useMutation({
    mutationFn: (hillData) => addHill(userId, hillData),
  });

  return { addNewHill, isAddingHill, errorAddingHill };
}
