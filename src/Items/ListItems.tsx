import { v4 } from "uuid";
import Item from "../models/Item";

interface ListItemsProps {
    removeItem: Function,
    items: Item[]
}

const ListItems = (props: ListItemsProps) => {
    return <div className="mt-5">
        <div className="list-group">
            {props.items.map(item => <button type="button" className="list-group-item list-group-item-action text-left" key={v4()} onClick={() => props.removeItem(item)}>{item.title}</button>)}
        </div>
    </div>
}

export default ListItems;