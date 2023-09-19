
import {Fragment} from "react"; //to use multiple elements in a component we can use fragments
//To create a ListGroup component
function ListGroup(){
    return (
    <Fragment>//wrap inside a fragment
        <h1>LIST GROUP</h1>
        <ul className="list-group">
           <li className="list-group-item">An item</li>
           <li className="list-group-item">A second item</li>
           <li className="list-group-item">A third item</li>
           <li className="list-group-item">A fourth item</li>
           <li className="list-group-item">And a fourth item</li>
        </ul>
    </Fragment>
    );
}
//we can also use fragments by just giving <> </> instead of <Fragment> </Fragment>
export default ListGroup;