import FormNode from "../../types/form-node";
import Blueprint from "../../types/blueprint";

function FormListItem({blueprint, nodeEntry}: { blueprint: Blueprint, nodeEntry: FormNode }) {
    return (
        <div>
            {nodeEntry.data.name} - (
                { nodeEntry.data.prerequisites.length > 0 ? 
                `Depends on: ${displayNamesFromId(nodeEntry.data.prerequisites, blueprint)}` : 
                'No Dependencies' }
                )
        </div>
    );
}

function displayNamesFromId(dependencyNodeIds: string[], blueprint: Blueprint): string {
    return dependencyNodeIds.map((dependencyNodeId: string) => {
        let node = blueprint.nodes.find(blueprintNode => blueprintNode.id ==dependencyNodeId);
        return node?node.data.name:node
    }).join(",");
}

export default FormListItem;