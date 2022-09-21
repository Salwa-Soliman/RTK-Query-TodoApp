import { ToastContainer, Flip } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  return (
    <ToastContainer
      position="bottom-right"
      transition={Flip}
      theme="dark"
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
    />
  );
};

export default Toast;
