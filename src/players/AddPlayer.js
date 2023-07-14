// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// export default function AddPlayer() {
//   let navigate = useNavigate();



//   const [player, setPlayer] = useState({
//     name: "",
//     number: "",
//     club: "",
//   });

//   const { name, number, club } = player;

//   const onInputChange = (e) => {
//     setPlayer({ ...player, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:8080/player/add", player);
//     navigate("/");
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//           <h2 className="text-center m-4">Add player</h2>
//           <form onSubmit={(e) => onSubmit(e)}>
//             <div className="mb-3">
//               <label>Name</label>
//               <input
//                 type={"text"}
//                 name="name"
//                 value={name}
//                 onChange={(e) => onInputChange(e)}
//                 className="form-control"
//                 placeholder="Player name"
//               ></input>
//             </div>
//             <div className="mb-3">
//               <label>Number</label>
//               <input
//                 type={"text"}
//                 name="number"
//                 value={number}
//                 onChange={(e) => onInputChange(e)}
//                 className="form-control"
//                 placeholder="Player number"
//               ></input>
//             </div>
//             <div className="mb-3">
//               <label>Club</label>
//               <input
//                 type={"text"}
//                 name="club"
//                 value={club}
//                 onChange={(e) => onInputChange(e)}
//                 className="form-control"
//                 placeholder="Club"
//               ></input>
//             </div>
//             <button className="btn btn-outline-success mx-2" type="submit">
//               Submit
//             </button>
//             <Link className="btn btn-outline-danger mx-2" to="/">
//               Cancel
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function AddGhe() {
  let navigate = useNavigate();

  const [ghe, setGhe] = useState({
    ten: "",
    loaiGhe: "",
    phongChieu: "",
    trangThai: "",
  });

  const { ten, loaiGhe, phongChieu, trangThai } = ghe;

  const onInputChange = (e) => {
    setGhe({ ...ghe, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/ghe/add", ghe);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Ghe</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label>Tên</label>
              <input
                type="text"
                name="ten"
                value={ten}
                onChange={onInputChange}
                className="form-control"
                placeholder="Tên ghế"
              />
            </div>
            <div className="mb-3">
              <label>Loại Ghế</label>
              <input
                type="text"
                name="loaiGhe"
                value={loaiGhe}
                onChange={onInputChange}
                className="form-control"
                placeholder="Loại ghế"
              />
            </div>
            <div className="mb-3">
              <label>Phòng Chiếu</label>
              <input
                type="text"
                name="phongChieu"
                value={phongChieu}
                onChange={onInputChange}
                className="form-control"
                placeholder="Phòng chiếu"
              />
            </div>
            <div className="mb-3">
              <label>Trạng Thái</label>
              <input
                type="text"
                name="trangThai"
                value={trangThai}
                onChange={onInputChange}
                className="form-control"
                placeholder="Trạng thái"
              />
            </div>
            <button className="btn btn-outline-success mx-2" type="submit">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}