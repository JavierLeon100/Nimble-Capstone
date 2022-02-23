import PlusButton from "../buttons/PlusButton";
import AllOrSuggested from "../layout/AllOrSuggested";
import Date from "../layout/Date";
import EachTask from "../listItems/tasks/EachTasks";
import {Modal} from "react-native"
import ModalDetailForActivity from "../modal/modalDetailForActivity";
import { useState } from "react";
import { FlatList } from "native-base";


const exampleArray = [
    {
        id : 1, 
        task  : "Weeping"
    }, 
    {
        id : 2,
        task : "Washing Dishes",
    },
    {
        id : 3,
        task : "Preparing Meals"
    },
    {
        id : 4,
        task : "Studying"
    }
    ]

export default function Index(){
    const [showModal, setShowModal] = useState(false)
    const handleShowModal = (boo)=>{
        boo ? setShowModal(true) : setShowModal(false)
    }

    


    return(
        <>
        <AllOrSuggested />
        <Date />

        <FlatList data={exampleArray} renderItem={({item})=><EachTask task={item.task} i={item.id} handleShowModal={handleShowModal} />}>

        </FlatList>
        <PlusButton />

        <Modal visible={showModal} presentationStyle="formSheet" animationType="slide">
                    <ModalDetailForActivity handleShowModal={handleShowModal}/>
        </Modal>
        </>
    )
}