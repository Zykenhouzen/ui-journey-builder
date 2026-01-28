import {FormInfo} from "./form-info"

export interface Blueprint {
    forms: Array<FormInfo>,
    nodes: Array<{
        id: string,
        data: {
            name: string,
            component_id: string,
            input_mapping: {}
        }
    }>
}


export default Blueprint
