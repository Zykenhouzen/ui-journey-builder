import Blueprint from "../types/blueprint";
import { saveCurrentBlueprint } from "../services/session-storage"

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

export function addFieldMapping(blueprint: Blueprint, formId:string, fieldValue:string, mappingValue: string) {
    let nodeIndex = blueprint.nodes.findIndex(blueprintNode => formId == blueprintNode.id)
    let mapping = new Map(Object.entries(blueprint.nodes[nodeIndex].data.input_mapping))
    mapping.set(fieldValue, mappingValue)
    blueprint.nodes[nodeIndex].data.input_mapping = Object.fromEntries(mapping);
    console.log(Object.fromEntries(mapping));
    saveCurrentBlueprint(blueprint);
}

export function removeFieldMapping(blueprint: Blueprint, formId:string, fieldValue:string) {
    let nodeIndex = blueprint.nodes.findIndex(blueprintNode => formId == blueprintNode.id)
    let mapping = new Map(Object.entries(blueprint.nodes[nodeIndex].data.input_mapping))
    mapping.delete(fieldValue)
    blueprint.nodes[nodeIndex].data.input_mapping = Object.fromEntries(mapping);
    console.log(Object.fromEntries(mapping));
    saveCurrentBlueprint(blueprint);
}