import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthPrivider/AuthProvider";
import AddCart from "../AddCart/AddCart";
import Swal from "sweetalert2";
import axios from "axios";


const Booking = () => {
    const {user}=useContext(AuthContext)
    const [booking , setBooking]=useState([])
    const url=`http://localhost:3000/bookings?email=${user?.email}`
    useEffect( () =>{
        // fetch(url)
        // .then(res =>res.json())
        // .then(data => {
           
        // setBooking(data)
        // })
        axios.get(url,{withCredentials:true})
        .then(res =>{
            setBooking(res.data)
        })
    },[url])
    const handelDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/bookings/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deleteCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remainig=Booking.filter(book => book._id !==id)
                            setBooking(remainig)
                          
                        }
                    })
            }
        })

    }
    const handelConfirm=id=>{
        fetch(`http://localhost:3000/bookings/${id}`,{
            method:"PATCH",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:'confirm'})

        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            if(data. modifiedCount >0){
                const remainig=booking.filter(book => book._id !== id)
                const update=booking.find(book => book._id===id)
                update.status='confirm'
                const newBooking=[update ,...remainig]
                setBooking(newBooking);

            }
        })

    }
    return (
        <div>
            <p>Booking {booking.length}</p>
            {
                booking.map(booked => <AddCart key={booked._id} handelConfirm={handelConfirm} handelDelete={handelDelete} booked={booked}></AddCart>)
            }
        </div>
    );
};

export default Booking;