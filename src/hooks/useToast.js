import { useSnackbar } from "notistack";

function useToast() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const Toast = (
    message,
    variant = "default",
    anchorOrigin = {
      vertical: "top",
      horizontal: "center",
    },
    autoHideDuration = 2000
  ) => {
    enqueueSnackbar(message, {
      variant,
      anchorOrigin,
      autoHideDuration,
    });
    setTimeout(() => {
      closeSnackbar();
    }, autoHideDuration);
  };

  return Toast;
}

export default useToast;
