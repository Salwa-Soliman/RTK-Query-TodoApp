import { useState, useRef, useCallback } from "react";
import { toast } from "react-toastify";

const useToast = (props) => {
  const toastRef = useRef(null);

  const [state, setState] = useState({
    isLoading: props.isLoading,
    isError: props.isError,
    isSuccess: props.isSuccess,
    toastRef,
  });

  const updateState = useCallback((state) => {
    setState((prevState) => ({
      ...prevState,
      isLoading: state.isLoading,
      isError: state.isError,
      isSuccess: state.isSuccess,
    }));
  }, []);

  const configToast = (config) => {
    if (config.updateToast) {
      //setTimeout just to show you the previous toast state
      setTimeout(() => {
        toast.update(state.toastRef.current, {
          render: config.message,
          type: config.type || toast.TYPE.DEFAULT,
          autoClose: config.time || false,
        });
      }, 500);
    } else {
      toastRef.current = toast["info"](config.message, {
        autoClose: config.time || false,
        closeOnClick: true,
        draggable: true,
      });

      updateState((prevState) => ({
        ...prevState,
        toastRef,
      }));
    }
  };

  if (state.isLoading) {
    configToast({
      type: toast.TYPE.INFO,
      message: props.loadingMsg,
      hideBar: true,
      time: 1000,
    });
  }

  if (state.isError) {
    throw Error("Something went wrong!");
    // configToast({
    //   updateToast: true,
    //   type: toast.TYPE.ERROR,
    //   time: false,
    //   message: "Something went wrong!",
    // });
  }

  if (state.isSuccess) {
    configToast({
      type: toast.TYPE.SUCCESS,
      message: props.successMsg,
      updateToast: true,
      time: 1000,
    });
  }

  return { updateState };
};

export default useToast;
