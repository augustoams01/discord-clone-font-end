import { UserButton } from "@clerk/clerk-react"
import { Button, Center } from "@mantine/core"
import { FaPlus } from "react-icons/fa";
import { TbWorldUp } from "react-icons/tb";
import useModal from "../../hooks/useModal";


function Sidebar() {
  const createServerModal = useModal("CreateServer")
  return (
    <aside>
        <nav className="flex flex-col relative h-screen w-20 bg-slate-900 dark:bg-slate-200">
            <div className="flex justify-center mt-3">
                <UserButton/>
            </div>
            <div className="min-w-full flex flex-col absolute gap-4 bottom-5">
                <Center className="group">
                    <Button variant="subtle" onClick={createServerModal.oepnModal} className="h-10 w-10 bg-violet-500 round rounded-[100%] p-2 group-hover:bg-violet-200 group-hover:-translate-y-1 transition duration-200 group-active:translate-y-[2px]"><FaPlus className="size-5 text-white group-hover:text-violet-600 transition duration-200"/></Button>
                </Center>
                <Center className="group">
                    <Button variant="subtle" onClick={() => {  }} className="h-10 w-10 bg-violet-500 rounded-[100%] p-2 group-hover:bg-violet-200  transition duration-200 group-hover:-translate-y-1 group-active:translate-y-[2px]"><TbWorldUp className="size-5 text-white group-hover:text-violet-600  transition duration-200"/></Button>
                </Center>
            </div>
        </nav>
    </aside>
  )
}

export default Sidebar