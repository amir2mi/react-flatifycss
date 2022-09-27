import React from 'react';
import ReactDOM from 'react-dom';

export default function ToastsWrapper() {
  return ReactDOM.createPortal(
    <>
      <div className="toast-wrapper right top" />
      <div className="toast-wrapper right bottom" />
      <div className="toast-wrapper center top" />
      <div className="toast-wrapper center bottom" />
      <div className="toast-wrapper left top" />
      <div className="toast-wrapper left bottom" />
    </>,
    document.body
  );
}
