import { Card, Button } from "react-bootstrap";
import { currencyFormatter } from "../utilities/currencyFromatter";

let quantity = 1;

type StoreCardProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const handleCheckout = () => {};

export function StoreCard({ id, name, price, imgUrl }: StoreCardProps) {
  return (
    <Card className="mt-4">
      <Card.Img
        variant="top"
        height="400px"
        src={imgUrl}
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column h-100">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span>{name} : </span>
          <span>{currencyFormatter(price)}</span>
        </Card.Title>
        {quantity === 0 ? (
          <Button
            className="w-100"
            onClick={handleCheckout()}
            variant="primary"
          >
            ADD TO CART
          </Button>
        ) : (
          <>
            <div
              className="d-flex align-items-center flex-column "
              style={{ gap: "1 rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "1 rem" }}
              >
                <Button>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in the cart
                </div>
                <Button>+</Button>
              </div>
              <Button variant="danger" size="sm"> Remove</Button>
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
