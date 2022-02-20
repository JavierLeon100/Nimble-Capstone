import PlusButton from "../buttons/PlusButton";
import AllOrSuggested from "../layout/AllOrSuggested";
import Date from "../layout/Date";
import EachTask from "../listItems/tasks/EachTasks";
import {Modal} from "react-native"
import ModalDetailForActivity from "../modal/modalDetailForActivity";
import { useState } from "react";
import { FlatList } from "native-base";


const exampleArray = ["Weeping", "Washing Dishes", "Preparing Meals", "Studying"]

export default function Index(){
    const [showModal, setShowModal] = useState(false)
    const handleShowModal = (boo)=>{
        boo ? setShowModal(true) : setShowModal(false)
    }


    return(
        <>
        <AllOrSuggested />
        <Date />

        <FlatList data={exampleArray} renderItem={({item, i})=><EachTask task={item} handleShowModal={handleShowModal} key={i}/>}>

        </FlatList>
        <PlusButton />

        <Modal visible={showModal} presentationStyle="formSheet" animationType="slide">
                    <ModalDetailForActivity handleShowModal={handleShowModal}/>
        </Modal>
        </>
    )
}