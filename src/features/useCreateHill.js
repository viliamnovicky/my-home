import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditHill } from "../services/apiHills";
//import toast from "react-hot-toast";

export function useCreateHill() {
  const queryClient = useQueryClient();

  const { mutate: createHill, isLoading: isCreatingHill } = useMutation({
    mutationFn: createEditHill,
    onSuccess: () => {
      //toast.success("New cabin created");
      queryClient.invalidateQueries({ queryKey: ["hills"] });
    },
    onError: (err) => console.error(err.message), //toast.error(err.message),
  });
  return { isCreatingHill, createHill };
}
