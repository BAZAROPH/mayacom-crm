import React, {useState, useEffect} from 'react'
import NormalModal from '../../../components/modal/NormalModal'
import NormalInput from '../../../components/input/NormalInput'
import { Radio, Button } from '@material-tailwind/react'
import { useSelector } from 'react-redux'

export default function ListFieldModal(props) {
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

    const [list, setList] = useState([]);
    const [listValue, setListValue] = useState('');
    const [valideList, setValideList] = useState(true);
    const saveValue = (e)=>{
        setListValue(e.target.value);
    }
    const saveList = ()=>{
        if(listValue){
            const include = list.find((value)=> value.label === listValue);
            if(!include){
                setList([...list, {
                    'label': listValue,
                    'value': listValue.replace(' ', '_')
                }]);
                setListValue('');
            }
        }

    }
    const deleteList = (index) => {
        const filtered = list.filter((_, i)=> i !== index);
        setList(filtered);
    }

    const add = ()=>{
        if(valideName){
            if(list.length > 0){
                let fields = props.form.fields;
                fields.push(
                    {
                        label: fieldName,
                        type: 'list',
                        required: requiredField,
                        list: list
                    }
                )
                props.setForm({...props.form, fields: fields});
                setFieldName('');
                setRequiredField('false');
                setValideName(true);
                setList([]);
                props.closeFieldsModal()
            }else{
                setValideList(false);
            }
        }else{
            setValideName(false);
        }
    }
    
    useEffect(() => {
        if(editIndex !== null && props.openState){
            setFieldName(props.form.fields[editIndex].label)
            setRequiredField(props.form.fields[editIndex].required === true ? 'true' : 'false');
            setList(props.form.fields[editIndex].list)
        }
    }, [props.openState, editIndex, props.form.fields])

    const update = ()=>{
        let fields = props.form.fields;
        fields[editIndex] =  {
            label: fieldName,
            type: 'list',
            required: requiredField === 'false' ? false : true,
            list: list,
        }
        props.setForm({...props.form, fields: fields});
        setFieldName('');
        setRequiredField('false');
        setList([]);
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
                cancelAction={props.closeFieldsModal} title={(editIndex !== null && props.openState) ? 'Modifier un champs de type liste' : 'Ajout d\'un champs de type liste'}
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
                    <NormalInput className='' label='Nom de la valeur' value={listValue} onInput={(e)=>{saveValue(e)}}/>
                    <small className={valideList === false ? 'text-red-600' : 'hidden'}>Vous devez ajouter au moins un élément dans la liste</small>
                    <div className="text-right">
                        <Button className='bg-blue mt-2' onClick={()=>saveList()}>Ajouter</Button>
                    </div>
                </div>
                {list &&
                    <div className='mt-3 gap-2 grid grid-cols-2'>
                        {
                            list.map((list, index)=>{
                                return (
                                    <div key={index} className='flex justify-between items-center w-full'>
                                        <button onClick={()=>deleteList(index)} className='rounded-l border border-gray-400 p-1 w-1/6 bg-gray-300 hover:bg-red-500 text-gray-600 hover:text-white duration-300'>
                                            <i className="bi bi-x-circle"></i>
                                        </button>
                                        <span className='border-y border-gray-400 p-1 w-full'>{list.label}</span>
                                        <span className='rounded-r border border-gray-400 p-1 w-1/3'>{list.value}</span>
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
