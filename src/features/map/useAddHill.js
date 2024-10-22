import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addHill } from "../../services/apiHills";
import toast from "react-hot-toast";

export function useAddHill(userId) {
  const queryClient = useQueryClient();
  const {
    isLoading: isAddingHill,
    mutate: addNewHill,
    error: errorAddingHill,
  } = useMutation({
    mutationFn: (hillData) => addHill(userId, hillData),
    onSuccess: () => {
      toast.success("Hill added successfully!");
      queryClient.setQueryData({ queryKey: ["hills", userId] }); // Assuming you are querying hills by hillId
      //window.location.reload()
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });

  return { addNewHill, isAddingHill, errorAddingHill };
}
