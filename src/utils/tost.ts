import { toast as ReactHotToast } from "react-hot-toast";

export const toast = (message: string) => {
  ReactHotToast(message, {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
};
