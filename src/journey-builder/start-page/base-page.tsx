import {getBlueprint, putBlueprint} from "../../services/action-blueprint-graph";

import { FormNode } from "../../types/form-node";
import FormListItem from "./form-list-item";
import {saveCurrentBlueprint, getCurrentBlueprint} from "../../services/session-storage"
import {useState, useEffect} from 'react';

function Base() {
    const [currentBlueprint, setCurrentBlueprint] = useState({})

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
        getBlueprint().then(data => {
            saveCurrentBlueprint(data);
            setCurrentBlueprint(data)
            console.log(getCurrentBlueprint())
        })
    }

    useEffect(() => {
        if(!currentBlueprint || Object.keys(currentBlueprint).length === 0) {
            let blueprint = getCurrentBlueprint()
            if(blueprint != null) {
                setCurrentBlueprint(blueprint);
            }
        }
    }, [])

    return (
        <div>
            <button onClick={handleClick}>
                Get Blueprint
            </button>
            <button onClick={putBlueprint(currentBlueprint)}>
                Save Blueprint
            </button>
            <div>
                {getForms(currentBlueprint)}
            </div>
        </div>
    );
}

export default Base;