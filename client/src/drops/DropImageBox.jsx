import React from 'react';
import Dropzone, {useDropzone} from 'react-dropzone'

export default function DropImageBox(props) {
    const {getRootProps, getInputProps, acceptedFiles, fileRejections} = useDropzone()
    return (
        <Dropzone
            onDrop={props.onDrop}
            onDragEnter={(event)=>{event.target.classList.toggle ('dropbox-active')}}
            onDragLeave={(event)=>{event.target.classList.toggle ('dropbox-active')}}
            accept="image/jpg, image/jpeg, image/png"
            maxFiles={1}
            maxSize={1000000}
            >
            {({getRootProps, getInputProps}) => (
                <section>
                    <div {...getRootProps()}
                        className={
                            props.successFlag ?
                            "rounded  dropbox dropbox-success"
                            :
                            "rounded  dropbox "}
                        >
                        <input {...getInputProps()} placeholder="asdasd"/>
                        <p> Click here  or drop image</p>
                    </div>
                </section>
            )}
        </Dropzone>
    )
}
