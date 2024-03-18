import ItemData from "../data/data.json"
import { Row,Col } from "react-bootstrap";
import { StoreCard } from "../components/StoreCard";


function Store() {
    return ( <>
    <h1>STORE</h1>
    <Row md={2} xm={1} xl={3} className="">
        {ItemData.map(item => (
            <Col key={item.id}> <StoreCard{...item}/></Col>
        ))}
    </Row>
    </>);
    
}
export default Store  ;