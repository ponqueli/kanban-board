import Modal from 'react-modal';
import { Container, Footer } from './styles';
import closeImg from '../../assets/close.svg';

export default function DecisionModal({ 
  isOpen, 
  onClose, 
  titleHeader,
  descriptionHeader,
  onSubmit, 
  mainContent,
  toast,
}) {
  const handleCloseModal = () => {
    onClose();
  };

  const handleSubmitModal = () => {
    onSubmit();
    toast.success('Task was successfully deleted', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="modal-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <header>
          <div className='left'>
            {titleHeader && (<h2>{titleHeader}</h2>)}
            {descriptionHeader && (<p>{descriptionHeader}</p>)}
          </div>
          <div className='right'>
            <button
              className='x-button'
              type="button"
              onClick={handleCloseModal}
              >
              <img src={closeImg} alt="X Button to close modal" />
            </button>
          </div>
        </header>
        <main>{mainContent}</main>
       
        <Footer>
          <button
            className='cancel-button'
            type="button" 
            onClick={handleCloseModal}
            >
            Cancel
          </button>
          <button
            className='confirm-button'
            type="button"
            onClick={handleSubmitModal}
            >
            Save
          </button>
        </Footer>
  
      </Container>
    </Modal>
  )
}