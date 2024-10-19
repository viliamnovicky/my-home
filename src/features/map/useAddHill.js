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
    onSuccess: (newHill) => {
      toast.success("Hill added successfully!");
      queryClient.setQueryData(['hills', userId], (oldData) => [...oldData, newHill]) // Assuming you are querying hills by hillId
      //window.location.reload()
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });

  return { addNewHill, isAddingHill, errorAddingHill };
}
