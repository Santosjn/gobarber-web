import React from 'react';

import Toast from './Toast';

import { Container } from './styles';
import { ToastMessage, useToast } from '../../hooks/Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map((message) => {
        return <Toast key={message.id} toastData={message} />;
      })}
    </Container>
  );
};

export default ToastContainer;
