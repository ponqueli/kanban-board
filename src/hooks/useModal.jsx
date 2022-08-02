import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(undefined);

  const toggleModalVisibility = (card) => {
    if(card){
      setSelectedCard(card);
    }else{
      setSelectedCard(undefined);
    }
    setIsOpen(!isOpen);
  }

  return (
    <ModalContext.Provider value={{
      isOpen,
      toggleModalVisibility,
      selectedCard
    }}>
      {children}
    </ModalContext.Provider>
  );
}

function useModal(){
  const context = useContext(ModalContext);
  
  if(!context){
    throw new Error("useModal must be used within a ModalProvider");
  }
  
  return context;
}

export { ModalProvider, useModal };