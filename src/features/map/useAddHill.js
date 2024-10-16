import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addHill } from "../../services/apiHills";
import toast from "react-hot-toast";
//import toast from "react-hot-toast";

export function useAddHill(userId) {
  const queryClient = useQueryClient();
  const {
    mutate: addNewHill,
    isLoading: isAddingHill,
    error: errorAddingHill,
  } = useMutation({
    mutationFn: (hillData) => addHill(userId, hillData),
    onSuccess: () => {
      toast.success("Hill added successfully!");
      queryClient.invalidateQueries(["hills", userId]); // Assuming you are querying hills by hillId
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });

  return { addNewHill, isAddingHill, errorAddingHill };
}
