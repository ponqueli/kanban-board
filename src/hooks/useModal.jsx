import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(undefined);

  const toggleModalVisibility = (task) => {
    if(task){
      setSelectedTask(task);
    }else{
      setSelectedTask(undefined);
    }
    setIsOpen(!isOpen);
  }

  return (
    <ModalContext.Provider value={{
      isOpen,
      toggleModalVisibility,
      selectedTask
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