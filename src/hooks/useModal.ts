import { Modal, useGeneralStore } from "../sotre/generalStore";

function useModal(modalType: Modal){
    const activeModal = useGeneralStore((state) => state.activeModal);
    const setActiveModal = useGeneralStore((state) => state.setActiveModal)

    const isOpen = activeModal === modalType

    const oepnModal = () =>{
        setActiveModal(modalType)
    }

    const closeModal = () => {
        setActiveModal(null)
    }

    return{
        isOpen,
        oepnModal,
        closeModal,
    }
}

export default useModal;