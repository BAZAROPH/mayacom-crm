import React, {useState} from 'react'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import NormalInput from '../../components/input/NormalInput'
import NormalSelect from '../../components/select/NormalSelect'
import { Radio} from '@material-tailwind/react'
import { useDispatch } from 'react-redux'


import TextFieldModal from './components/TextFieldModal'
import EmailFieldModal from './components/EmailFieldModal'
import DateFieldModal from './components/DateFieldModal'
import TextAreaFieldModal from './components/TextAreaFieldModal'
import NumberFieldModal from './components/NumberFieldModal'
import RadioFieldModal from './components/RadioFieldModal'
import CheckboxFieldModal from './components/CheckboxFieldModal'
import ListFieldModal from './components/ListFieldModal'
import DocumentFieldModal from './components/DocumentFieldModal'
import UrlFieldModal from './components/UrlFieldModal'
import NormalAlert from '../../components/alert/NormalAlert'

export default function CreateForm() {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        name: '',
        fields: [],
        submitName: 'Envoyer',
        submitColor: '',
    });
    const saveFormName = (e)=>{
        setForm({
            ...form,
            name: e.target.value
        });
    }

    const [formNameError, setFormNameError] = useState(true);
    const formNameValidation = ()=>{
        if(form.name){
            setFormNameError(true)
            return true
        }else{
            setFormNameError(false)
            return false
        }
    }

    const saveFormSubmitName = (e)=>{
        setForm({
            ...form,
            submitName: e.target.value
        });
    }

    const saveFormSubmitColor = (e)=>{
        setForm({
            ...form,
            submitColor: e.target.value
        });
    }

    const [textModalState, setTextModalState] = useState(false);
    const [emailModalState, setEmailModalState] = useState(false);
    const [dateModalState, setDateModalState] = useState(false);
    const [textAreaModalState, setTextAreaModalState] = useState(false);
    const [numberModalState, setNumberModalState] = useState(false);
    const [radioModalState, setRadioModalState] = useState(false);
    const [checkboxModalState, setCheckboxModalState] = useState(false);
    const [listModalState, setListModalState] = useState(false);
    const [documentModalState, setDocumentModalState] = useState(false);
    const [urlModalState, setUrlModalState] = useState(false);
    const breadcrumb = [
        {
            'label': 'Tableau de bord',
            'url': '/dashboard',
            'icon' : 'bi bi-house-fill',
        },
        {
            'label': 'Nouveau formulaire',
            'url': 'dashboard/settings/account',
            'active': true,
        }
    ]

    // Field type selected by user
    const [fieldType, setFieldType] = useState('');
    const saveFieldType = (e)=>{
        setFieldType(e.target.value);
        switch (e.target.value) {
            case 'text':
                setTextModalState(true)
                break;
            case 'date':
                setDateModalState(true)
                break;
            case 'email':
                setEmailModalState(true)
                break;
            case 'textarea':
                setTextAreaModalState(true)
                break;
            case 'number':
                setNumberModalState(true)
                break;
            case 'radio':
                setRadioModalState(true)
                break;
            case 'checkbox':
                setCheckboxModalState(true)
                break;
            case 'list':
                setListModalState(true)
                break;
            case 'document':
                setDocumentModalState(true)
                break;
            case 'url':
                setUrlModalState(true)
                break;
            default:
                break;
        }
    }
    const closeFieldsModal = ()=>{
        setTextModalState(false);
        setDateModalState(false);
        setEmailModalState(false);
        setTextAreaModalState(false);
        setNumberModalState(false);
        setRadioModalState(false);
        setCheckboxModalState(false);
        setListModalState(false);
        setDocumentModalState(false);
        setUrlModalState(false)
        setFieldType('');
        dispatch({
            type: "change",
            index: null,
        })
    }

    const edit = (index, type)=>{
        dispatch({
            type: "change",
            index: index
        });
        switch (type) {
            case 'text':
                setTextModalState(true)
                break;
            case 'date':
                setDateModalState(true)
                break;
            case 'email':
                setEmailModalState(true)
                break;
            case 'textarea':
                setTextAreaModalState(true)
                break;
            case 'number':
                setNumberModalState(true)
                break;
            case 'radio':
                setRadioModalState(true)
                break;
            case 'checkbox':
                setCheckboxModalState(true)
                break;
            case 'list':
                setListModalState(true)
                break;
            case 'file':
                setDocumentModalState(true)
                break;
            case 'url':
                setUrlModalState(true)
                break;
            default:
                break;
        }
    }

    const deleteField = (index)=>{
        const newArray = form.fields.filter((_, i)=> index !== i);
        setForm({...form, fields: newArray})
    }

    const [openAlert, setOpenAlert] = useState(false);
    const saveForm = ()=>{
        if(formNameValidation()){
            let forms = localStorage.getItem('forms');
            if(!forms){
                forms = [
                    form
                ];
            }else{
                forms = JSON.parse(forms);
                forms.push(form)
            }
            localStorage.setItem('forms', JSON.stringify(forms))
            setForm({
                ...form,
                name: '',
                fields: [],
                submitName: 'Envoyer',
                submitColor: '',
            });
            setOpenAlert(true)
            setInterval(() => {
                setOpenAlert(false)
            }, 6000);
        }
    }

    return (
        <>
            <Breadcrumb items={breadcrumb}/>
            <div className='text-xl w-full border-b py-2 border-gray-300 md:flex justify-between items-center'>
                <span>Créer un nouveau formulaire</span>
                <div className='space-x-3 flex mt-2'>
                    <button className='py-2 px-4 md:px-6 border-2 text-xs md:text-base rounded border-gray-300 bg-gray-200 hover:ring-1 hover:ring-orange hover:text-orange' onClick={saveForm}><i className="bi bi-download pr-2"></i> Enregistrer</button>
                    <button className='py-2 px-4 md:px-6 border-2 text-xs md:text-base rounded border-gray-300 bg-gray-200 hover:ring-1 hover:ring-orange hover:text-orange' onClick={saveForm}>Enregistrer et créer une page <i className="bi bi-arrow-up-right-square-fill pl-2"></i></button>
                </div>
            </div>
            <div className='grid md:grid-cols-4 my-4'>
                <NormalAlert color='green' open={openAlert} onClose={()=>setOpenAlert(false)} className='col-span-4 mb-3' title='Enregistrement réussi !' icon='bi bi-check-circle-fill'>
                    Votre formulaire a été enregistré avec succès. Dès à présent vous pouvez l'utiliser pour créer une page. <span className='font-thin text-xs cursor-pointer hover:font-medium'>Liste des formulaires</span>
                </NormalAlert>
                <div className='col-span-2'>
                    <NormalInput label='Nom du formulaire' value={form.name} onInput={(e)=>{saveFormName(e)}} required/>
                    <small className={!formNameError ? 'text-red-600' : 'hidden'}>Veuillez saisir le nom du formulaire</small>
                    <div className='my-3'>
                        {/* <NormalModal title='Simple modal' confirmLabel='Ajouter' cancelLabel='Annuler' openState={false}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aliquam, eum dicta ullam aut deleniti laboriosam quod exercitationem nulla aspernatur fuga itaque, iste tempore! Aperiam sequi maiores vel facilis debitis?
                        </NormalModal> */}

                        <NormalSelect label='Ajouter un champs' onChange={(e)=>{saveFieldType(e)}} value={fieldType}>
                            <option value="">Sélectionnez un type</option>
                            <option value="text">Texte</option>
                            <option value="date">Date</option>
                            <option value="email">Email</option>
                            <option value="textarea">Zone de description</option>
                            <option value="number">Nombre</option>
                            <option value="radio">Bouton Radio</option>
                            <option value="checkbox">Case à cocher</option>
                            <option value="list">Liste déroulante</option>
                            <option value="file">Fichier (document)</option>
                            <option value="url">Lien (url)</option>
                        </NormalSelect>
                    </div>
                    <div className='mb-3'>
                        <NormalInput label='Libellé du bouton de soumission' value={form.submitName} onInput={(e)=>{saveFormSubmitName(e)}}/>
                    </div>
                    <div className='mb-3'>
                        <NormalInput label='Couleur du bouton de soumission' value={form.submitColor} onInput={(e)=>{saveFormSubmitColor(e)}}/>
                    </div>

                    {form && (
                        <div className='mt-10'>
                            <div className='space-y-4'>
                                {form.fields.map((field, index)=>{
                                    return (
                                        <div key={index} className='border rounded-lg border-2 p-3'>
                                            {(field.type === 'text' || field.type === 'date' || field.type === 'email' || field.type === 'number' || field.type === 'url' || field.type === 'file') &&
                                                <div>
                                                    <NormalInput type={field.type} required={field.required} label={field.label}/>
                                                    <div className='mt-4 space-x-4 text-right'>
                                                        <button className='py-1 px-2 rounded text-white bg-green-300 hover:bg-green-600 duration-300' onClick={()=>{edit(index, field.type)}}>
                                                            <i className="bi bi-pencil-square"></i>
                                                        </button>
                                                        <button className='py-1 px-2 rounded text-white bg-red-300  hover:bg-red-500 duration-300' onClick={()=>{deleteField(index)}}>
                                                            <i className="bi bi-trash3"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            }
                                            {field.type === 'radio' &&
                                                <div>
                                                    <label htmlFor="" className={field.required && 'required'}>{field.label}</label>
                                                    {field.radios.map((radio, radio_index)=>{
                                                        return (
                                                            <div key={radio_index}>
                                                                <Radio id={radio_index} label={radio.label} color='green' name={field.label}/>
                                                            </div>
                                                        )
                                                    })}
                                                    <div className='mt-4 space-x-4 text-right'>
                                                        <button className='py-1 px-2 rounded text-white bg-green-300 hover:bg-green-600 duration-300' onClick={()=>{edit(index, field.type)}}>
                                                            <i className="bi bi-pencil-square"></i>
                                                        </button>
                                                        <button className='py-1 px-2 rounded text-white bg-red-300  hover:bg-red-500 duration-300' onClick={()=>{deleteField(index)}}>
                                                            <i className="bi bi-trash3"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            }

                                            {field.type === 'checkbox' &&
                                                <div>
                                                    <label htmlFor="" className={field.required && 'required'}>{field.label}</label>
                                                    {field.checkboxes.map((checkbox, checkbox_index)=>{
                                                        return (
                                                            <div key={checkbox_index} className='flex gap-2'>
                                                                <input type='checkbox' value={checkbox.value} />
                                                                <label htmlFor="" className='font-light'>{checkbox.label}</label>
                                                            </div>
                                                        )
                                                    })}
                                                    <div className='mt-4 space-x-4 text-right'>
                                                        <button className='py-1 px-2 rounded text-white bg-green-300 hover:bg-green-600 duration-300' onClick={()=>{edit(index, field.type)}}>
                                                            <i className="bi bi-pencil-square"></i>
                                                        </button>
                                                        <button className='py-1 px-2 rounded text-white bg-red-300  hover:bg-red-500 duration-300' onClick={()=>{deleteField(index)}}>
                                                            <i className="bi bi-trash3"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            }

                                            {field.type === 'list' &&
                                                <div>
                                                    <label htmlFor="" className={field.required && 'required'}>{field.label}</label>
                                                    <NormalSelect className='block mt-1'>
                                                        {field.list.map((list_elt, list_index)=>{
                                                            return (
                                                                <option key={list_index} value={list_elt.value} >{list_elt.label}</option>
                                                            )
                                                        })}
                                                    </NormalSelect>
                                                    <div className='mt-4 space-x-4 text-right'>
                                                        <button className='py-1 px-2 rounded text-white bg-green-300 hover:bg-green-600 duration-300' onClick={()=>{edit(index, field.type)}}>
                                                            <i className="bi bi-pencil-square"></i>
                                                        </button>
                                                        <button className='py-1 px-2 rounded text-white bg-red-300  hover:bg-red-500 duration-300' onClick={()=>{deleteField(index)}}>
                                                            <i className="bi bi-trash3"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            }

                                            {field.type === 'textarea' &&
                                                <div>
                                                    <label htmlFor="" className={field.required && 'required'}>{field.label}</label>
                                                    <textarea name="" id="" rows="7" className='w-full rounded-lg mt-1'></textarea>
                                                    <div className='mt-4 space-x-4 text-right'>
                                                        <button className='py-1 px-2 rounded text-white bg-green-300 hover:bg-green-600 duration-300' onClick={()=>{edit(index, field.type)}}>
                                                            <i className="bi bi-pencil-square"></i>
                                                        </button>
                                                        <button className='py-1 px-2 rounded text-white bg-red-300  hover:bg-red-500 duration-300' onClick={()=>{deleteField(index)}}>
                                                            <i className="bi bi-trash3"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='border rounded-lg border-2 p-3 mt-6'>
                                <button className='border px-4 py-1 rounded border-2 border-gray-300'>{form.submitName}</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <TextFieldModal openState={textModalState} closeFieldsModal={()=>closeFieldsModal()} form={form} setForm={setForm}/>
            <EmailFieldModal openState={emailModalState} closeFieldsModal={()=>closeFieldsModal()} form={form} setForm={setForm}/>
            <DateFieldModal openState={dateModalState} closeFieldsModal={()=>closeFieldsModal()} form={form} setForm={setForm}/>
            <TextAreaFieldModal openState={textAreaModalState} closeFieldsModal={()=>closeFieldsModal()} form={form} setForm={setForm}/>
            <NumberFieldModal openState={numberModalState} closeFieldsModal={()=>closeFieldsModal()} form={form} setForm={setForm}/>
            <RadioFieldModal openState={radioModalState} closeFieldsModal={()=>closeFieldsModal()} form={form} setForm={setForm}/>
            <CheckboxFieldModal openState={checkboxModalState} closeFieldsModal={()=>closeFieldsModal()} form={form} setForm={setForm}/>
            <ListFieldModal openState={listModalState} closeFieldsModal={()=>closeFieldsModal()} form={form} setForm={setForm}/>
            <DocumentFieldModal openState={documentModalState} closeFieldsModal={()=>closeFieldsModal()} form={form} setForm={setForm}/>
            <UrlFieldModal openState={urlModalState} closeFieldsModal={()=>closeFieldsModal()} form={form} setForm={setForm}/>
        </>
    )
}
