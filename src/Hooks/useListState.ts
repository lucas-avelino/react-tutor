import React from 'react'

export const useListState = <P extends object>(initialSteps: P[]) => {
    const [objState, setObjState] = React.useState<P[]>(initialSteps)

    const addInPosition = (obj: P, pos: number) => {
        const tempList = objState;
        tempList.splice(pos, 0, obj);
        setObjState(tempList)
    }

    const append = (obj: P) => {
        const tempList = [...objState, obj];
        setObjState(tempList);
    }

    return {
        addInPosition,
        list: objState,
        append
    }
}