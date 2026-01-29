import { useNavigate, useParams} from 'react-router-dom';
import { getCurrentBlueprint } from '../../services/session-storage';
import FormNode from "../../types/form-node";
import FormInfo from "../../types/form-info";
import { useEffect, useState } from 'react';
import SidePanel from './side-panel';

import {removeFieldMapping } from '../../services/blue-print-helpers'


function FormPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [currentSelectedValue, setCurrentSelectedValue] = useState("")
    const [isHidden, setHidden] = useState(true)
    if (!id) {
        return <div>No form ID provided</div>;
    }

    let blueprint = getCurrentBlueprint();
    let currentNode = blueprint?.nodes.find((node) => { return node.id == id} );
    let currentForm = blueprint?.forms.find((form) => { return currentNode?.data.component_id == form.id});
    let mapping: Map<string, string> = new Map(Object.entries(currentNode ? currentNode.data.input_mapping:{}))
    function enableSidebar(fieldToModify: string) {
        setHidden(false);
        console.log(isHidden)
        setCurrentSelectedValue(fieldToModify);
    }
    
    let fieldMap = currentForm ? Object.keys(currentForm.field_schema.properties).map((field) => {
        return (<div>
                {field} - <input onClick={() => {enableSidebar(field)}} value={mapping.get(`${field}`) ? mapping.get(`${field}`) : ""}></input>
                <button onClick={() => {blueprint ? removeFieldMapping(blueprint, id, field): console.error("null blueprint");}}>X</button>
            </div>);
    }) : "";
      
    function handleClick() {
        navigate('/');
    }
    
    return (
        <div>
            <div hidden={isHidden} style={{ float:"left", height: '100%' }}>
                <SidePanel hide={()=>{setHidden(true)}} formId={id?id:""} fieldToChange={currentSelectedValue}  ></SidePanel>
            </div>
            <div>
                <button onClick={handleClick}>Back</button>
                <div>
                    Prefill <input type="checkbox" name="Prefill" />
                </div>
                {fieldMap}
            </div>
        </div>
    );
}


export default FormPage;