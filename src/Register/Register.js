import React, { useState } from 'react'
import './Register.css'
import Creatable from 'react-select/creatable'
import axios from 'axios'

const ProjectName = [
  { label: 'X', value: 1 },
  { label: 'Y', value: 2 },
 ]
 const ClientName = [
    { label: 'X', value: 1 },
    { label: 'Y', value: 2 },
   ]

   const PanelName = [
    { label: 'X', value: 1 },
    { label: 'Y', value: 2 },
   ]
   const PageName = [
    { label: 'X', value: 1 },
    { label: 'Y', value: 2 },
   ]
   const SectionName = [
    { label: 'X', value: 1 },
    { label: 'Y', value: 2 },
   ]
   const SelectorName = [
    { label: 'X', value: 1 },
    { label: 'Y', value: 2 },
   ]








const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20
  })
}

const Register = props => {



    
  const [name, setName] = useState('')
  const [apireqparam, setreqparam] = useState('')
  const [apiresparam, setresparam] = useState('')
  const [process, setProcess] = useState('')



  const [ProjectValue, setProjectValue] = useState('')
  const [ClientValue, setClientValue] = useState('')
  const [PanelValue, setPanelValue] = useState('')
  const [PageValue, setPageValue] = useState('')
  const [SectionValue, setSectionValue] = useState('')
  const [SelectorValue, setSelectorValue] = useState('')


  const [selectedFile, setSelectedFile] = useState(null);



  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    try {
      axios({
        method: "post",
        url: "/api/uploadfile",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }
  }


  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }
  const [image, setImage] = useState("");

  const getImage = () => {
    axios.get("https://localhost:3000/api/uploadfile").then((res) => {
      let result = (res && res.data && res.data[0].file) || [];
      setImage(result[0]);
    });
  };


  const handleChange = (field, value) => {
    
    switch (field) {
      case 'project':
        setProjectValue(value)
        break

      default:
        break
    }
  }

  const handleChangeA = (field, value) => {
    switch (field) {
      case 'client':
        setClientValue(value)
        break

      default:
        break
    }
  }

  const handleChangeB = (field, value) => {
    switch (field) {
      case 'panel':
        setPanelValue(value)
        break

      default:
        break
    }
  }

  const handleChangeC = (field, value) => {
    switch (field) {
      case 'page':
        setPageValue(value)
        break

      default:
        break
    }
  }

  const handleChangeD = (field, value) => {
    switch (field) {
      case 'section':
        setSectionValue(value)
        break

      default:
        break
    }
  }

  const handleChangeE = (field, value) => {
      
    switch (field) {
      case 'selector':
        setSelectorValue(value)
        break

      default:
        break
    }
  }
const project = ProjectValue.value;
const panel=PanelValue.value;
const client=ClientValue.value;
const section = SectionValue.value;
const selector=SelectorValue.value;
const page=PageValue.value;

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      name,
      apireqparam,
      apiresparam,
      process,
      project,
      page,
      panel,
      client,
      section,
      selector,
    };
    props.func(val);
    clearState();
  };
  
  const clearState = () => {
    setName('');
    setreqparam('');
    setresparam('');
    setProcess('');
    setProjectValue('');
    setPageValue('');
    setPanelValue('');
    setClientValue('');
    setSectionValue('');
    setSelectorValue('');
  };


  return (

    <div className='container'>
      <h3> Task 1 By Harsh Garg </h3>
      <div className='register-form'>
        <div className='input'>
          <label>API Name</label>
          <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className='input'>
          <label>Request API Parameter</label>
          <input type='text' value={apireqparam} onChange={(event) => setreqparam(event.target.value)} />
        </div>
        <div className='input'>
          <label>Response API Parameter</label>
          <input type='text' value={apiresparam} onChange={(event) => setresparam(event.target.value)} />
        </div>
        <div className='input'>
          <label>Process</label>
          <input type='text' value={process} onChange={(event) => setProcess(event.target.value)} />
        </div>


            <div className='input'>
          <label>Project Name</label>
          <Creatable
            isClearable
            onChange={(value) => handleChange('project', value)}
            options={ProjectName}
            value={ProjectValue}
            styles={customStyles}
          />
        </div>

        <div className='input'>
          <label>Client Name</label>
          <Creatable
            isClearable
            onChange={(value) => handleChangeA('client', value)}
            options={ClientName}
            value={ClientValue}
            styles={customStyles}
          />
        </div>

        <div className='input'>
          <label>Panel Name</label>
          <Creatable
            isClearable
            onChange={(value) => handleChangeB('panel', value)}
            options={PanelName}
            value={PanelValue}
            styles={customStyles}
          />
        </div>

        <div className='input'>
          <label>Page Name</label>
          <Creatable
            isClearable
            onChange={(value) => handleChangeC('page', value)}
            options={PageName}
            value={PageValue}
            styles={customStyles}
          />
        </div>

        <div className='input'>
          <label>Section Name</label>
          <Creatable
            isClearable
            
            onChange={(value) => handleChangeD('section', value)}
            options={SectionName}
            value={SectionValue}
            styles={customStyles}
          />
        </div>

        <div className='input'>
          <label>Selector Name</label>
          <Creatable
            isClearable
            onChange={(value) => handleChangeE('selector', value)}
            options={SelectorName}
            value={SelectorValue}
            styles={customStyles}
          />
        </div>
          <div className='input'>
                <input type="file" name="file" onChange={handleFileSelect}/>
                <button type="button" onClick={handleSubmit} > Upload </button>
                              </div>


       
        <div className='buttons'>
        <button onClick={transferValue}> Submit </button>

        </div>

        <div className="buttons">
      <img src={image} alt=""/>
      <button onClick={getImage}>Image show</button>
    </div>
        
      </div>
    </div>

  )
}

export default Register