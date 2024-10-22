import {create} from "zustand";
import {persist} from "zustand/middleware"

export type Modal= "CreateServer"

interface GeneralSotre{
    activeModal: Modal | null
    setActiveModal: (modal: Modal | null) => void 
}

export const useGeneralStore = create <GeneralSotre>()(
    persist(
        (set) => ({
            activeModal: null,
            setActiveModal: (modal: Modal | null) => set({activeModal: modal}),
        }),
        {
            name: "general-store",
        }
    )
)