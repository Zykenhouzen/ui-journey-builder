import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {displayNameFromFormId, addFieldMapping } from '../../services/blue-print-helpers'
import { getCurrentBlueprint } from '../../services/session-storage';
import { FormInfo } from '../../types/form-info';
import { Blueprint } from '../../types/blueprint';
import { ExampleGlobalData, ExampleProperty } from '../../types/example-global-data'

function Sidepanel({hidden, formId, fieldToChange}: {hidden: boolean, formId: string, fieldToChange: string}) {
    let blueprint: Blueprint | null = getCurrentBlueprint();
    let extraFieldsBoilerplate: ExampleGlobalData = {
        globalData: [
            {
                name: "Action Properties",
                id: "action_properties",
                fields: [
                    {
                        label: "example field",
                        id: "example_field"
                    }
                ]
            },
            {
                name: "Client Organisation Properties",
                id: "client_organization_properties",
                fields: [
                    {
                        label: "example field",
                        id: "example_field"
                    }
                ]
            }
        ]
        
    }
    return(
        <Sidebar>
        <Menu>
            {extraFieldsBoilerplate.globalData.map((properties) => {return getMenu(properties, blueprint, formId, fieldToChange)})}
            {blueprint?.forms.map((formIn) => {return getMenuFromForm(formIn, blueprint, formId, fieldToChange);})}
        </Menu>
        </Sidebar>
    );
}

function getMenu(property : ExampleProperty,  blueprint: Blueprint | null,formId: string, fieldToChange: string) {
    if (blueprint == null) {
        console.error("Blueprint Null")
        return ""
    }    
    
    return(
        <SubMenu label={property.name}>
            {property.fields.map((field => {
                return (<MenuItem onClick={() => {addFieldMapping(blueprint, formId, fieldToChange, field.id)}}>{field.label}</MenuItem>)
            })) }
        </SubMenu>
    )
}

function getMenuFromForm(formDataItem: FormInfo, blueprint: Blueprint | null, formId: string, fieldToChange: string) {
    if (blueprint == null) {
        console.error("Blueprint Null")
        return ""
    }
    return (
        <SubMenu label={displayNameFromFormId(formDataItem.id, blueprint)}>
            {Object.keys(formDataItem.field_schema.properties).map((field => {
                return (<MenuItem onClick={() => {addFieldMapping(blueprint, formId, fieldToChange, `${displayNameFromFormId(formDataItem.id, blueprint)}.${field}`)}}>{field}</MenuItem>)
            })) }
        </SubMenu>);
}

export default Sidepanel;