import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin as createEditCabinApi } from "../../services/apiCabins";

export function useEditCabin() {
  const queryClient = useQueryClient();
  
  const { mutate: editCabin, isloading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabinApi(newCabinData, id),
    onSuccess: () => {
      toast.success("New cabin successfully edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isEditing, editCabin };
}
