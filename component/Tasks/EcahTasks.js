import { HStack, Text, Center, Button} from "native-base"
import {colors} from "../../utilis/colors"
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Swipeout from "react-native-swipeout";


export default function EachTask ({task}) {
    return (
        <GestureRecognizer
        onSwipeLeft={()=>alert("swiped")
        }
        >
        
        <Center mb={3}>
        {/* <Swipeout right={swipeoutBtns} style={swipeOutStyle}> */}
        <HStack bg={colors.gray} w="80%" p="6" borderRadius="15">
        <Text fontSize="19">{task}</Text>
        </HStack>
        {/* </Swipeout> */}
        </Center>
        
        </GestureRecognizer>
    )
}

