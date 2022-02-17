import { HStack, Text, Center, Button, VStack} from "native-base"
import {colors} from "../../utilis/colors"
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { AntDesign } from '@expo/vector-icons';




export default function EachTask ({task, handleShowModal, i}) {

    const leftContent = (progress, dragX)=>{
        const trans = dragX.interpolate({
            inputRange: [40, 50, 60, 100],
            outputRange: [-30, 0, 0, 1],
    })

    return (
        <Center bg={colors.black} borderRadius="15" w="30%">
        <Text color="white" textAlign="right">Open</Text>
        </Center>
    )
}

    return (
        <>
        <Center mb={3} key={i}>
                {/* <Swipeable renderRightActions={leftContent} containerStyle={{
                    width : "80%"
                }} 
                onSwipeableRightOpen={()=>handleShowModal(true)}
                friction="1"
                rightThreshold="10"
                overshootRight="false"
                > */}
                    <HStack bg={colors.gray}  px="6" py="5" borderRadius="15">   
                        <VStack>           
                            <Text fontSize="19">{task}</Text> 
                            <Text fontSize="11" mt="2">Due: Wed Jan 26 2022 | 12:00 PM  | 1 Hour</Text>
                        </VStack> 
                        <HStack space="3" maxW="2">
                        <AntDesign name="user" size={14} color="black" />
                        <AntDesign name="user" size={14} color="black" />
                        <AntDesign name="user" size={14} color="black" />
                        <AntDesign name="user" size={14} color="black" />   
                        </HStack>                
                    </HStack>
                {/* </Swipeable> */}
                <Button onPress={()=>handleShowModal(true)}>test modal</Button>
            </Center>
            </>
        
    )
}

