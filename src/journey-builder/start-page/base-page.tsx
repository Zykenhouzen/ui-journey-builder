import GetBlueprint from "../../services/action-blueprint-graph";

import { FormNode } from "../../types/form-node";
import FormListItem from "./form-list-item";
import {saveCurrentBlueprint, getCurrentBlueprint} from "../../services/session-storage"
import {useState} from 'react';

function Base() {
    const [currentBlueprint, setCurrentBlueprint] = useState([])

    function getForms(dataInput: any){
        if (dataInput && dataInput.nodes) {
            return dataInput.nodes.map(
                (nodeEntry: FormNode) => 
                <FormListItem blueprint={dataInput} nodeEntry={nodeEntry}></FormListItem>
            );
        }
        return []
    }

    function handleClick() {
        GetBlueprint().then(data => {
            saveCurrentBlueprint(data);
            setCurrentBlueprint(data)
            console.log(getCurrentBlueprint())
        })
    }

    return (
        <div>
            <button onClick={handleClick}>
                Get Blueprint
            </button>
            <div>
                {getForms(currentBlueprint)}
            </div>
        </div>
    );
}

export default Base;