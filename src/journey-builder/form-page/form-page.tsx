import { useNavigate, useParams} from 'react-router-dom';
import { getCurrentBlueprint } from '../../services/session-storage';
import FormNode from "../../types/form-node";
import FormInfo from "../../types/form-info";
import { useState } from 'react';
import SidePanel from './side-panel';


function FormPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    
    let blueprint = getCurrentBlueprint();
    let currentNode = blueprint?.nodes.find((node) => { return node.id == id} );
    let currentForm = blueprint?.forms.find((form) => { return currentNode?.data.component_id == form.id});

    
    let fieldMap = currentForm ? Object.keys(currentForm.dynamic_field_config).map((field) => {
        return <div>{field} - <input disabled></input></div>;
    }) : "";
      
    function handleClick() {
        navigate('/');
    }

    return (
        <div>
            <SidePanel></SidePanel>
            <button onClick={handleClick}>Back</button>
            <div>
                Prefill <input type="checkbox" name="Prefill" />
            </div>
            {fieldMap}
        </div>
    );
}


export default FormPage;