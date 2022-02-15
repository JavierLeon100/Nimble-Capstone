import PlusButton from "../buttons/PlusButton";
import AllOrSuggested from "../layout/AllOrSuggested";
import Date from "../layout/Date";
import EachTask from "../Tasks/EcahTasks";
import {Modal} from "react-native"
import ModalContentForDetail from "../layout/modalContentForDetail";
import { useState } from "react";


const exampleArray = ["Weeping", "Washing Dishes", "Preparing Meals", "Studying"]

export default function Index(){
    const [showModal, setShowModal] = useState(false)
    const handleShowModal = (boo)=>{
        boo ? setShowModal(true) : setShowModal(false)
    }
    const mapTasks = exampleArray.map(task=> <EachTask task={task} handleShowModal={handleShowModal}/>)

    return(
        <>
        <AllOrSuggested />
        <Date />
        {mapTasks}
        <PlusButton />

        <Modal visible={showModal} presentationStyle="formSheet" animationType="slide">
                    <ModalContentForDetail handleShowModal={handleShowModal}/>
        </Modal>
        </>
    )
}