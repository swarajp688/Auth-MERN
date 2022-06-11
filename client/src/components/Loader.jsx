import React from "react";
import LoaderWrapper from "../styles/LoaderWrapper";

export default function LoadingSpinner() {
  return (
    <LoaderWrapper className="spinner-container">
      <div className="loading-spinner">
      </div>
    </LoaderWrapper>
  );
}