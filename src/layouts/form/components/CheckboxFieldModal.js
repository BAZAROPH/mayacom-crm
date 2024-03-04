import React, {useState, useEffect} from 'react'
import NormalModal from '../../../components/modal/NormalModal'
import NormalInput from '../../../components/input/NormalInput'
import { Radio, Button } from '@material-tailwind/react'
import { useSelector } from 'react-redux'

export default function CheckboxFieldModal(props) {
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

    const [checkboxes, setCheckboxes] = useState([]);
    const [checkboxValue, setCheckboxValue] = useState('');
    const [valideCheckbox, setValideCheckbox] = useState(true);
    const saveValue = (e)=>{
        setCheckboxValue(e.target.value);
    }

    const [requiredField, setRequiredField] = useState('false');
    const saveRequiredField = (e)=>{
        setRequiredField(e.target.value)
    }

    const saveCheckbox = ()=>{
        if(checkboxValue){
            const include = checkboxes.find((value)=> value.label === value);
            if(!include){
                setCheckboxes([...checkboxes, {
                    'label': checkboxValue,
                    'value': checkboxValue.replace(' ', '_')
                }]);
                setCheckboxValue('');
            }
        }

    }
    const deleteRadio = (index) => {
        const filtered = checkboxes.filter((_, i)=> i !== index);
        setCheckboxes(filtered);
    }

    const add = ()=>{
        if(valideName){
            if(checkboxes.length > 0){
                let fields = props.form.fields;
                fields.push(
                    {
                        label: fieldName,
                        type: 'checkbox',
                        required: requiredField,
                        checkboxes: checkboxes
                    }
                )
                props.setForm({...props.form, fields: fields});
                setFieldName('');
                setRequiredField('false');
                setValideName(true);
                setCheckboxes([]);
                props.closeFieldsModal()
            }else{
                setValideCheckbox(false);
            }
        }else{
            setValideName(false);
        }
    }

    useEffect(() => {
        if(editIndex !== null && props.openState){
            setFieldName(props.form.fields[editIndex].label)
            setRequiredField(props.form.fields[editIndex].required === true ? 'true' : 'false');
            setCheckboxes(props.form.fields[editIndex].checkboxes)
        }
    }, [props.openState, editIndex, props.form.fields])

    const update = ()=>{
        let fields = props.form.fields;
        fields[editIndex] =  {
            label: fieldName,
            type: 'checkbox',
            required: requiredField === 'false' ? false : true,
            checkboxes: checkboxes,
        }
        props.setForm({...props.form, fields: fields});
        setFieldName('');
        setRequiredField('false');
        setCheckboxes([]);
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
                cancelAction={props.closeFieldsModal} title={(editIndex !== null && props.openState) ? 'Modifier un champs de type case à cocher' : 'Ajout d\'un champs de type case à cocher'}
            >
                <div className='font-medium'>
                    <NormalInput label='Nom du champs' onInput={(e)=>{saveFieldName(e)}} value={fieldName} type='text' required/>
                    <small className={valideName === false ? 'text-red-600' : 'hidden'}>Le nom du champs est obligatoire</small>
                </div>
                <div className='mt-4'>
                    <div className='font-medium'>Le champs doit il être obligatoire ?</div>
                    <div className="flex gap-2 items-center">
                        <Radio id='yes' onChange={(e)=>saveRequiredField(e)} value={'true'} name='required' color='green' label='Oui' checked={requiredField === 'true'}/>
                        <Radio id='no' onChange={(e)=>saveRequiredField(e)} value={'false'} name='required' color='red' label='Non' checked={requiredField === 'false'}/>
                    </div>
                </div>
                <div className="mt-4 font-medium">
                    <NormalInput className='' label='Nom de la valeur' value={checkboxValue} onInput={(e)=>{saveValue(e)}}/>
                    <small className={valideCheckbox === false ? 'text-red-600' : 'hidden'}>Vous devez ajouter au moins deux boutons radio</small>
                    <div className="text-right">
                        <Button className='bg-blue mt-2' onClick={()=>saveCheckbox()}>Ajouter</Button>
                    </div>
                </div>
                {checkboxes &&
                    <div className='mt-3 gap-2 grid grid-cols-2'>
                        {
                            checkboxes.map((checkbox, index)=>{
                                return (
                                    <div key={index} className='flex justify-between items-center w-full'>
                                        <button onClick={()=>deleteRadio(index)} className='rounded-l border border-gray-400 p-1 w-1/6 hover:bg-red-500 hover:text-white duration-300'>
                                            <i className="bi bi-x-circle"></i>
                                        </button>
                                        <span className='border-y border-gray-400 p-1 w-full'>{checkbox.label}</span>
                                        <span className='rounded-r border border-gray-400 p-1 w-1/3'>{checkbox.value}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </NormalModal>
        </>
    )
}
