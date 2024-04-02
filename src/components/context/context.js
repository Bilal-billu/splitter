/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const FieldsContext = createContext({
    tipPercentage: 0,
    bill: {
        amount: 0,
        billError: false
    },
    people: {
        people: 0,
        peopleError: false
    },

    setTip:(val)=>{},
    setAmount:(val)=>{},
    setIndividuals:(val)=>{},
    reset:()=>{}
})

export const useFieldContext=()=>{
    return useContext(FieldsContext)
}

export const FieldsProvider = FieldsContext.Provider;