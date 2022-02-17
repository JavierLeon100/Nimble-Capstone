import PlusButton from "../buttons/PlusButton";
import AllOrSuggested from "../layout/AllOrSuggested";
import Date from "../layout/Date";
import EachTask from "../listItems/tasks/EachTasks";
import {Modal} from "react-native"
import ModalContentForDetail from "../layout/modalContentForDetail";
import { useState } from "react";


const exampleArray = ["Weeping", "Washing Dishes", "Preparing Meals", "Studying"]

export default function Index(){
    const [showModal, setShowModal] = useState(false)
    const handleShowModal = (boo)=>{
        boo ? setShowModal(true) : setShowModal(false)
    }
    const mapTasks = exampleArray.map((task, i)=> <EachTask task={task} handleShowModal={handleShowModal} key={i}/>)

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