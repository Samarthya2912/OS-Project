import { useState } from "react"

const DeleteButton = ({ name, deleteFile }) => {

    const [deleted, setDeleted] = useState(false);
    return (
        !deleted ?
            <button
                onClick={() => { deleteFile(name); setDeleted(true); }}
                className='text-decoration-none p-0 m-0 text-danger btn btn-link'
            >
                Delete
            </button> :
            <span className="text-danger">Deleted</span>
    )
}

export default DeleteButton