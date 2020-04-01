
import React from 'react'
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';



export default function FileUpload(props) {
    let fileReader;
    const dispatch = useDispatch();


    const handleFileRead = (e) => {
        const content = fileReader.result;
        if(props.type==='MSA'){
            dispatch(props.inputHandler(content.trim(),props.MSAkey))
        }else{
            dispatch(props.inputHandler(content.trim()))
        }
        
    };

    const handleError = (error)=>{
        fileReader.abort();
        console.log(error);
    }

    const handleFileChosen = (file) => {
        fileReader = new FileReader();
        fileReader.onerror = handleError
        fileReader.onloadend = handleFileRead;
        const extension = file.name.split('.').pop().toLowerCase()
        if (extension ==='txt') {
            fileReader.readAsText(file);
        }else{
            console.log('invalid file type')
        }
        
        
        
    };

    return <div className='upload-expense'>
        <Button variant="contained" color="primary" component="label" size="small">
            Upload Text File
        <input type='file'
               id='file'
               className='input-file'
               accept='.txt'
               onChange={e => handleFileChosen(e.target.files[0])}
               style={{ display: "none" }}
        />
        </Button>
    </div>;
};