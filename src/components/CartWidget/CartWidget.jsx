import carrito from "../src/assets/img/carrito.svg";

function CartWidget({ amount }) {
    return (
        <div>

            <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span className="badge text-bg-secondary"><img src={carrito} alt="" />{amount}</span>
            </span>



        </div >
    );

}
export default CartWidget

