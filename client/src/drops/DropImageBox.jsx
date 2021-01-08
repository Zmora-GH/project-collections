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
            maxSize={500000}
            >
            {({getRootProps, getInputProps}) => (
                <section className="text-center">
                    <div {...getRootProps()}
                        className={props.prev ?
                            "rounded  dropbox dropbox-success mx-auto":
                            "rounded  dropbox mx-auto"}
                        style={{
                            "background-position": "center",
                            "background-size": "contain",
                            "background-image": `url(${props.prev})`,
                            "background-origin": "content-box",
                            "background-repeat": "no-repeat"
                        }}
                        >
                        <input {...getInputProps()}/>
                        {props.prev ? '' : <p> Click here  or drop image</p>}
                    </div>
                </section>
            )}
        </Dropzone>
    )
}
