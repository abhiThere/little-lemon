import { createContext, useState } from "react";

export const SubmitContext = createContext({
  isFormSubmitted: false,
  handleFormSubmission: () => {},
});

export const SubmitContextProvider = ({ children }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmission = (formSubmitted) => {
    setIsFormSubmitted(formSubmitted);
  };

  const initialContextValue = { isFormSubmitted, handleFormSubmission };

  return (
    <SubmitContext.Provider value={initialContextValue}>
      {children}
    </SubmitContext.Provider>
  );
};
