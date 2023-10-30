import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
           <p className="text-center"> <Link to='/'><button className="btn btn-primary ">Go Home</button></Link></p>
          <img className="w-full" src="https://i.ibb.co/YhPdvLg/Error.png" alt="" />  
        </div>
    );
};

export default Error;