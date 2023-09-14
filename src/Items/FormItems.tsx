import { useState } from "react";
import { v4 } from "uuid";

interface FormItemsProps {
    addItem: Function
}

const FormItems = (props: FormItemsProps) => {
    const [title, setTitle] = useState("");

    const handle = () => {
        props.addItem({
            id: v4(),
            title: title
        });

        setTitle("");
    }

    return <div>
        <div className="row">
            <div className="col-md-8">
                <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="col-md-4">
                <button className="btn btn-primary btn-block" onClick={handle}> Add </button>
            </div>
        </div>
    </div>
}

export default FormItems;