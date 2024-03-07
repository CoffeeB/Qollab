// utils/sweetAlert2.js
import Swal from 'sweetalert2';

const showCustomStyledAlert = (title, text, icon, customClass) => {
  Swal.fire({
    title,
    text,
    icon,
    customClass: customClass,
  });
};

export default showCustomStyledAlert;
