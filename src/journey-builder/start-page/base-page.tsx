import GetBlueprint from "../../services/action-blueprint-graph";
import { useState } from 'react';
import { FormNode } from "../../types/form-node";
import FormListItem from "./form-list-item";

function Base() {
    const [blueprintData, setBlueprintData] = useState([]);

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
            setBlueprintData(data);
            console.log(blueprintData)
        })
    }

    return (
        <div>
            <button onClick={handleClick}>
                Get Blueprint
            </button>
            <div>
                {getForms(blueprintData)}
            </div>
        </div>
    );
}

export default Base;