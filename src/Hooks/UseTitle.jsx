import { useEffect } from "react";

const useTitle = (title = "") => {
  useEffect(() => {
    document.title = title + " - Rento";
  }, [title]);
};

export default useTitle;
