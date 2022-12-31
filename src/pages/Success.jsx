

import { useMemo } from "react";
import { useLocation,useHistory } from "react-router";

const Success = () => {
  const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const orderId = useMemo(()=>location.state.orderId,[location.state.orderId]);
   const history= useHistory()

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button style={{ padding: 10, marginTop: 20 }} onClick={()=>history.push('/')}>Go to Homepage</button>
    </div>
  );
};

export default Success;