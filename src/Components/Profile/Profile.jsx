// import React, { useContext, useState } from "react";
// import { UserContext } from "../../Context/UserCotext";
// import { useEffect } from "react";
// import axios from "axios";

// export default function Profile() {
//     let { userData } = useContext(UserContext);
//     let [userOrders, setUserOrders] = useState([]);
//     useEffect(() => {
//         async function getUserOrders() {
//             if (userData) {
//                 let data = await axios.get(
//                     `https://ecommerce.routemisr.com/api/v1/orders/user/${userData.id}`
//                 );
//                 setUserOrders(data.data);
//             }
//         }
//         getUserOrders();
//     }, [userData]);

//     return (
//         <div className="container p-5 mt-5 products-container rounded-3">
//             {console.log(userOrders)}
//             <h2 className="text-capitalize">Welcome, {userData?.name}</h2>

//             {userOrders === null ? (
//                 <div className="alert alert-danger text-capitalize mt-5">
//                     {" "}
//                     You Have no orders Yet
//                 </div>
//             ) : (
//                 userOrders.map((order) =>
//             )}
//         </div>
//     );
// }
