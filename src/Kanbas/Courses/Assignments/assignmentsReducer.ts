import { createSlice } from "@reduxjs/toolkit";
import {assignments} from "../../Database";

const initialState={
    assignments:assignments,
    assignment:{_id: new Date().getTime().toString(),title: "New Assignment", course: "0",}
}

const assignmentSlice=createSlice({
    name: "assignments",
    initialState,
    reducers:{
        addAssignment:(state,action)=>{
            state.assignments=[{ ...action.payload,  },
                ...state.assignments,
            ];
        },
        deleteAssignment:(state,action)=>{
            state.assignments=state.assignments.filter(
                (assignment)=>assignment._id!=action.payload
            );
        },
        updateAssignment:(state,action)=>{
            state.assignments=state.assignments.map(
                (a)=>{
                    if(a._id===action.payload._id){
                        return action.payload;
                    }
                    else{
                        return a;
                    }
                }
            )
        },
        setAssignment:(state,action)=>{
            state.assignment=action.payload;
        },
    }
});

export const{addAssignment,deleteAssignment,updateAssignment,setAssignment}=assignmentSlice.actions;
export default assignmentSlice.reducer;