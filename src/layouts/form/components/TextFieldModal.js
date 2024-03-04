import React, {useState, useEffect} from 'react'
import NormalModal from '../../../components/modal/NormalModal'
import NormalInput from '../../../components/input/NormalInput'
import { Radio } from '@material-tailwind/react'
import { useSelector } from 'react-redux'

export default function TextFieldModal(props) {
    const editIndex = useSelector(state => state.index);
    const [fieldName, setFieldName] = useState('');
    const [valideName, setValideName] = useState();
    const saveFieldName = (e)=>{
        setFieldName(e.target.value);
        if(e.target.value){
            setValideName(true);
        }else{
            setValideName(false);
        }
    }
    
    const [requiredField, setRequiredField] = useState('false');
    const saveRequiredField = (e)=>{
        setRequiredField(e.target.value)
    }

    const add = ()=>{
        if(valideName){
            let fields = props.form.fields;
            fields.push(
                {
                    label: fieldName,
                    type: 'text',
                    required: requiredField === 'false' ? false : true
                }
            )
            props.setForm({...props.form, fields: fields});
            setFieldName('');
            setRequiredField('false');
            setValideName(true);
            props.closeFieldsModal()
        }else{
            setValideName(false)
        }
    }
    useEffect(() => {
        if(editIndex !== null && props.openState){
            setFieldName(props.form.fields[editIndex].label)
            setRequiredField(props.form.fields[editIndex].required === true ? 'true' : 'false');
        }
    }, [props.openState, editIndex, props.form.fields])
    
    const update = ()=>{
        let fields = props.form.fields;
        fields[editIndex] =  {
            label: fieldName,
            type: 'text',
            required: requiredField === 'false' ? false : true
        }
        props.setForm({...props.form, fields: fields});
        setFieldName('');
        setRequiredField('false');
        setValideName(true);
        props.closeFieldsModal();
    }

    return (
        <>
            <NormalModal 
                openState={props.openState} 
                cancelLabel='Annuler' 
                confirmLabel={(editIndex !== null && props.openState) ? 'Enregistrer' : 'Ajouter'} 
                confirmAction={(editIndex !== null && props.openState) ? update : add} 
                cancelAction={props.closeFieldsModal} title={(editIndex !== null && props.openState) ? 'Modifier un champs de type texte' : 'Ajout d\'un champs de type texte'}
            >
                <div className='font-medium'>
                    <NormalInput value={fieldName} onInput={(e)=>{saveFieldName(e)}} label='Nom du champs' required/>
                    <small className={valideName === false ? 'text-red-600' : 'hidden'}>Le nom du champs est obligatoire</small>
                </div>
                <div className='mt-4'>
                    <div className='font-medium'>Le champs doit il être obligatoire ?</div>
                    <div className="flex gap-2 items-center">
                        <Radio id='yes' onChange={(e)=>saveRequiredField(e)} value={'true'} name='required' color='green' label='Oui' checked={requiredField === 'true'}/>
                        <Radio id='no' onChange={(e)=>saveRequiredField(e)} value={'false'} name='required' color='red' label='Non' checked={requiredField === 'false'}/>
                    </div>
                </div>
            </NormalModal>
        </>
    )
}
