import React from 'react';
import { Bounce, ToastContainer } from 'react-toastify';

type MessagesContainerProps = {
  readonly children: React.ReactNode;
};

export function MessagesContainer({ children }: MessagesContainerProps) {
  return (
    <>
      {children}

      <ToastContainer
        position='top-center'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
      />
    </>
  );
}
