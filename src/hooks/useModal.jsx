import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDecisionModalOpen, setIsDecisionModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(undefined);
  const [selectedTask, setSelectedTask] = useState(undefined);

  const toggleModalVisibility = (task) => {
    if(task){
      setSelectedTask(task);
    }else{
      setSelectedTask(undefined);
    }
    setIsOpen(!isOpen);
  }

  const toggleDecisionModalVisibility = (isModalOpen, task) => {
    if(isModalOpen){
      setIsDecisionModalOpen(isModalOpen);
      setTaskToDelete(task);
    }else{
      setIsDecisionModalOpen(isModalOpen);
      setTaskToDelete(undefined);
    }
  }

  return (
    <ModalContext.Provider value={{
      isOpen,
      isDecisionModalOpen,
      toggleModalVisibility,
      toggleDecisionModalVisibility,
      taskToDelete,
      selectedTask,
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