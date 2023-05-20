import { useFormik } from "formik";
import FormCheckout from "./FormCheckout";
import * as Yup from "yup";

const FormCheckoutContainer = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      contraseña: "",
      confirmarContraseña: "",
    },
    onSubmit: () => {},
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "El nombre debe tener al menos 3 caracteres"),
      email: Yup.string()
        .email("El campo debe contener un Email válido")
        .required("Este campo es obligatorio"),
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
      <FormCheckout
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
};

export default FormCheckoutContainer;
