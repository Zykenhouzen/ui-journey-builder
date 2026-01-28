import GetBlueprint from "../../services/action-blueprint-graph";

import { FormNode } from "../../types/form-node";
import FormListItem from "./form-list-item";
import {SaveCurrentBlueprint, GetCurrentBlueprint} from "../../services/session-storage"

function Base() {
    

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
            SaveCurrentBlueprint(data);
            console.log(GetCurrentBlueprint())
        })
    }

    return (
        <div>
            <button onClick={handleClick}>
                Get Blueprint
            </button>
            <div>
                {getForms(GetCurrentBlueprint())}
            </div>
        </div>
    );
}

export default Base;