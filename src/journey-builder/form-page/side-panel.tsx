import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {displayNameFromFormId } from '../../services/blue-print-helpers'
import { getCurrentBlueprint } from '../../services/session-storage';
import { FormInfo } from '../../types/form-info';
import { Blueprint } from '../../types/blueprint';
import { ExampleGlobalData, ExampleProperty } from '../../types/example-global-data'

function Sidepanel() {
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
            {extraFieldsBoilerplate.globalData.map((properties) => {return getMenu(properties)})}
            {blueprint?.forms.map((formIn) => {return getMenuFromForm(formIn, blueprint);})}
        </Menu>
        </Sidebar>
    );
}

function getMenu(property : ExampleProperty) {
    return(
        <SubMenu label={property.name}>
            {property.fields.map((field => {
                return (<MenuItem>{field.label}</MenuItem>)
            })) }
        </SubMenu>
    )
}

function getMenuFromForm(formDataItem: FormInfo, blueprint: Blueprint | null) {
    if (blueprint == null) {
        console.error("Blueprint Null")
        return ""
    }
    return (
        <SubMenu label={displayNameFromFormId(formDataItem.id, blueprint)}>
            {formDataItem.ui_schema.elements.map((field => {
                return (<MenuItem>{field.label}</MenuItem>)
            })) }
        </SubMenu>);
}

export default Sidepanel;