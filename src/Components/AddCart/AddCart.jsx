import Swal from "sweetalert2";


const AddCart = ({ booked ,handelDelete ,handelConfirm}) => {
    console.log(booked)
    // eslint-disable-next-line react/prop-types
    const { _id, service, img, date, customerName, price ,status} = booked
  
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Name</th>
                            <th> Price</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <button className="btn btn-square" onClick={() => handelDelete(_id)} >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{service}</div>
                                        <div className="text-sm opacity-50">{customerName}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {price}

                            </td>
                            <td>{date}</td>
                            <th>
                              { status ==='confirm'? <span><button className="btn btn-primary">Approved</button></span> :
                               <button className="btn btn-ghost btn-xs" onClick={() =>handelConfirm(_id)} >Confirm</button>}
                            </th>
                        </tr>




                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default AddCart;