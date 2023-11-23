import Swal from "sweetalert2"
const setMessage = (msg, type = "warning") => {
  Swal.fire({
    position: "top",
    icon: type,
    title: msg,
    showConfirmButton: true,
    timer: 1500,
  })
}
export default setMessage
