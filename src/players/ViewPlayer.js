// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";

// export default function ViewPlayer() {

//     const [player, setPlayer] = useState({
//         name: "",
//         number: "",
//         club: "",
//       });
    
//       const { id } = useParams();
    
//       useEffect(()=>{
//         loadPlayers()
//       }, []);
    
//       const loadPlayers = async () =>{
//         const result= await axios.get(`http://localhost:8080/player/${id}`);
//         setPlayer(result.data);
//       }

//   return (
//     <div>
//       <div className="row">
//         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//           <h2 className="text-center m-4">Player's Detail</h2>

//           <div className="card">
//             <div className="card-header">
//                 <ul className="list-group list-group-flush">
//                     <li className="list-group-item">
//                         <b>Name:</b>
//                         {player.name}
//                     </li>
//                     <li className="list-group-item">
//                         <b>Number:</b>
//                         {player.number}
//                     </li>
//                     <li className="list-group-item">
//                         <b>Club:</b>
//                         {player.club}
//                     </li>
//                 </ul>
//             </div>
//           </div>
//           <Link className="btn btn-primary my-2" to={"/"}>Back to home</Link>
//         </div>
//       </div>
//     </div>
//   );
// }
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewGhe() {

    const [ghe, setGhe] = useState({
        ten: "",
        loaiGhe: "",
        phongChieu: "",
        trangThai: "",
      });
    
      const { id } = useParams();
    
      useEffect(()=>{
        loadGhe()
      }, []);
    
      const loadGhe = async () =>{
        const result= await axios.get(`http://localhost:8080/ghe/${id}`);
        setGhe(result.data);
      }

  return (
    <div>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Ghe's Detail</h2>

          <div className="card">
            <div className="card-header">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Tên:</b>
                        {ghe.ten}
                    </li>
                    <li className="list-group-item">
                        <b>Loại Ghế:</b>
                        {ghe.loaiGhe}
                    </li>
                    <li className="list-group-item">
                        <b>Phòng Chiếu:</b>
                        {ghe.phongChieu}
                    </li>
                    <li className="list-group-item">
                        <b>Trạng Thái:</b>
                        {ghe.trangThai}
                    </li>
                </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/ghe"}>Back to home</Link>
        </div>
      </div>
    </div>
  );
}