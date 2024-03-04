import React, {useState, useEffect} from 'react'
import NormalModal from '../../../components/modal/NormalModal'
import NormalInput from '../../../components/input/NormalInput'
import { Radio, Button } from '@material-tailwind/react'
import { useSelector } from 'react-redux'

export default function RadioFieldModal(props) {
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

    const [radios, setRadios] = useState([]);
    const [radioValue, setRadioValue] = useState('');
    const [valideRadio, setValideRadio] = useState(true);
    const saveValue = (e)=>{
        setRadioValue(e.target.value);
    }
    const saveRadio = ()=>{
        if(radioValue){
            const include = radios.find((value)=> value.label === radioValue);
            if(!include){
                setRadios([...radios, {
                    'label': radioValue,
                    'value': radioValue.replace(' ', '_')
                }]);
                setRadioValue('');
            }
        }

    }
    const deleteRadio = (index) => {
        const filtered = radios.filter((_, i)=> i !== index);
        setRadios(filtered);
    }


    const add = ()=>{
        if(valideName){
            if(radios.length > 1){
                let fields = props.form.fields;
                fields.push(
                    {
                        label: fieldName,
                        type: 'radio',
                        required: requiredField,
                        radios: radios
                    }
                )
                props.setForm({...props.form, fields: fields});
                setFieldName('');
                setRequiredField('false');
                setValideName(true);
                setRadios([]);
                props.closeFieldsModal()
            }else{
                setValideRadio(false);
            }
        }else{
            setValideName(false);
        }
    }

    useEffect(() => {
        if(editIndex !== null && props.openState){
            setFieldName(props.form.fields[editIndex].label)
            setRequiredField(props.form.fields[editIndex].required === true ? 'true' : 'false');
            setRadios(props.form.fields[editIndex].radios)
        }
    }, [props.openState, editIndex, props.form.fields])

    const update = ()=>{
        let fields = props.form.fields;
        fields[editIndex] =  {
            label: fieldName,
            type: 'radio',
            required: requiredField === 'false' ? false : true,
            radios: radios,
        }
        props.setForm({...props.form, fields: fields});
        setFieldName('');
        setRequiredField('false');
        setRadios([]);
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
                cancelAction={props.closeFieldsModal} title={(editIndex !== null && props.openState) ? 'Modifier un champs de type radio' : 'Ajout d\'un champs de type radio'}
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
                    <NormalInput className='' label='Nom de la valeur' value={radioValue} onInput={(e)=>{saveValue(e)}}/>
                    <small className={valideRadio === false ? 'text-red-600' : 'hidden'}>Vous devez ajouter au moins deux boutons radio</small>
                    <div className="text-right">
                        <Button className='bg-blue mt-2' onClick={()=>saveRadio()}>Ajouter</Button>
                    </div>
                </div>
                {radios &&
                    <div className='mt-3 gap-2 grid grid-cols-2'>
                        {
                            radios.map((radio, index)=>{
                                return (
                                    <div key={index} className='flex justify-between items-center w-full'>
                                        <button onClick={()=>deleteRadio(index)} className='rounded-l border border-gray-400 p-1 w-1/6 bg-gray-300 hover:bg-red-500 text-gray-600 hover:text-white duration-300'>
                                            <i className="bi bi-x-circle"></i>
                                        </button>
                                        <span className='border-y border-gray-400 p-1 w-full'>{radio.label}</span>
                                        <span className='rounded-r border border-gray-400 p-1 w-1/3'>{radio.value}</span>
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
