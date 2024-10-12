import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addVisit } from "../../services/apiHills"; // Import your addVisit function
// import toast from "react-hot-toast"; // If you want to use toast notifications

export function useAddVisit(userId, hillId) {
  const queryClient = useQueryClient();
  const {
    mutate: addNewVisit,           // Function to call for adding a new visit
    isLoading: isAddingVisit,      // Boolean to check if the mutation is in progress
    error: errorAddingVisit,       // Error object if the mutation fails
  } = useMutation({
    mutationFn: (visitData) => addVisit(userId, hillId, visitData), // Call the addVisit function
    onSuccess: () => {
      //toast.success("Visit added successfully!");
      queryClient.invalidateQueries(["hills", hillId]); // Assuming you are querying hills by hillId
    },
    onError: (error) => {
      //toast.error(`Error: ${error.message}`);
      console.error(`Error: ${error.message}`);
    },
  });

  return { addNewVisit, isAddingVisit, errorAddingVisit };
}