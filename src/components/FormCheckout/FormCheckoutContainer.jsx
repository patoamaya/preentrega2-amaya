import { useFormik } from "formik";
import FormCheckout from "./FormCheckout";
import * as Yup from "yup";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

export const FormCheckoutContainer = () => {
  const { cart, totalPrice } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const checkoutFn = (data) => {
    let total = totalPrice();
    let dataOrder = {
      buyer: data,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, dataOrder).then((res) => setOrderId[res.id]);
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
      // confirmarContraseña: "",
    },
    onSubmit: checkoutFn,
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "El nombre debe tener al menos 3 caracteres"),
      email: Yup.string()
        .email("El campo debe contener un Email válido")
        .required("Este campo es obligatorio"),
      telefono: Yup.number().required("Este campo es obligatorio"),
      contraseña: Yup.string()
        .required("Este campo es obligatorio")
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
          message:
            "La contraseña debe contener 1 mayúscula, 1 minúscula, 1 caracter especial y al menos 1 numero",
        }),
      confirmarContraseña: Yup.string()
        .required("Este campo es obligatorio")
        .oneOf([Yup.ref("contraseña")], "Las contraseñas no coinciden"),
    }),
    validateOnChange: false,
  });

  return (
    <div>
      {orderId ? (
        <h1>`Su orden: ${orderId} ha sido procesada con exito`</h1>
      ) : (
        <FormCheckout
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      )}
    </div>
  );
};
