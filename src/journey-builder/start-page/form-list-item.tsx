import FormNode from "../../types/form-node";
import Blueprint from "../../types/blueprint";
import { useNavigate } from 'react-router-dom';
import {displayNamesFromId} from '../../services/blue-print-helpers'

function FormListItem({blueprint, nodeEntry}: { blueprint: Blueprint, nodeEntry: FormNode }) {
    const navigate = useNavigate();

    function handleClick(nodeEntryId: string) {
        navigate(`/form/${nodeEntryId}`);
    }

    return (
        <div>
                {nodeEntry.data.name} - 
                <button onClick={() => handleClick(nodeEntry.id)}>Edit</button>(
                { nodeEntry.data.prerequisites.length > 0 ? 
                `Depends on: ${displayNamesFromId(nodeEntry.data.prerequisites, blueprint)}` : 
                'No Dependencies' }
                )
        </div>
    );
}



export default FormListItem;