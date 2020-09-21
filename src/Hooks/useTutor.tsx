import React from 'react'
import { FunctionTypes, Step } from '../Types'
import { useListState } from './useListState';


interface NamedStyle extends React.CSSProperties {
    name: string;
}

export const useTutor = (
    initialStyles: NamedStyle[]
) => {
    const {
        list: listOfSteps,
        addInPosition: addStepInPosition
    } = useListState<Step>([]);

    const {
        list: listOfStyles,
        append: appendStyle
    } = useListState<NamedStyle>(initialStyles);

    const [atualStep, setAtualStep] = React.useState<number>(-1)

    /**
     * @function registryStep This function make the registry of an element action it's a step of the tutorial
     * @argument step Mandatory argument that holds the new step
     * @argument sequence Optional argument that holds the position of the step of tutorial, if no number was sent this function put the step at the end of the list
     */
    const registryStep: FunctionTypes.RegistryStep = (step: Step, sequence: number = listOfSteps.length) => addStepInPosition(step, sequence)
    /**
     * @function registryStyle This function make the registry of an style to be used again
     * @argument style Mandatory argument that holds the new style
     * @argument name Mandatory argument that holds the name of style to be registred
     */
    const registryStyle: FunctionTypes.RegistryStyle = (style: React.CSSProperties, name: string) => appendStyle({ ...style, name: name })
    const startTutorial = (startAt: number) => {
        // console.log(listOfSteps, startAt)
        listOfSteps[startAt].setStyle(
            (
                typeof listOfSteps[startAt].activeStyle === 'string'
                    ? listOfStyles.find(s => s.name === listOfSteps[startAt].activeStyle)
                    : listOfSteps[startAt].activeStyle
            ) as React.CSSProperties
        )
        setAtualStep(startAt)
    };
    const nextStep = () => {
        const newAtual = atualStep + 1;

        // console.log(listOfSteps, startAt)
        listOfSteps[atualStep].setStyle(undefined);
        listOfSteps[newAtual].setStyle(
            (
                typeof listOfSteps[newAtual].activeStyle === 'string'
                    ? listOfStyles.find(s => s.name === listOfSteps[newAtual].activeStyle)
                    : listOfSteps[newAtual].activeStyle
            ) as React.CSSProperties
        )
        setAtualStep(newAtual)

    };
    const previousStep = () => setAtualStep(atualStep - 1);

    return {
        registryStep,
        registryStyle,
        startTutorial,
        nextStep,
        previousStep,
        listOfStyles
    }
}