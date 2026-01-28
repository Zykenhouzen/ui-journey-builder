import Blueprint from "../types/blueprint";

export function displayNamesFromId(dependencyNodeIds: string[], blueprint: Blueprint): string {
    return dependencyNodeIds.map((dependencyNodeId: string) => {
        let node = blueprint.nodes.find(blueprintNode => blueprintNode.id ==dependencyNodeId);
        return node?node.data.name:node
    }).join(",");
}

export function displayNameFromFormId(formNodeId: string, blueprint: Blueprint): string { 
    let node = blueprint.nodes.find(blueprintNode => blueprintNode.data.component_id ==formNodeId);
    return node?node.data.name:""
}