import PlusButton from "../buttons/PlusButton";
import AllOrSuggested from "../layout/AllOrSuggested";
import Date from "../layout/Date";
import EachTask from "../Tasks/EcahTasks";


const exampleArray = ["Weeping", "Washing Dishes", "Preparing Meals", "Studying"]

export default function Index(){

    const mapTasks = exampleArray.map(task=> <EachTask task={task}/>)

    return(
        <>
        <AllOrSuggested />
        <Date />
        {mapTasks}
        <PlusButton />
        </>
    )
}