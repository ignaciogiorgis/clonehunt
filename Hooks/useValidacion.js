import React, {useEffect, useState} from 'react';



const useValidacion = (stateInicial, validar, fn) => {

    const [valores, setValores] = useState(stateInicial);
    const [errores, setErrores] = useState({});
    const [submitForm, setSubmitForm] = useState(false);

    useEffect(()=>{
        if(submitForm){
             const noErrores = Object.keys(errores).length === 0 ;
             if(noErrores){
                 fn();
             }
             setSubmitForm(false);
        }

    }, [errores])

    const handleChange = (e)=>{
        setValores({
            ...valores,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const erroresValidacion = validar(valores);
        setErrores(erroresValidacion);
        setSubmitForm(false);
    }

    const handleBlur = ()=>{
        const erroresValidacion = validar(valores);
        setErrores(erroresValidacion);
    }

    return (
        {
        valores,
         errores, 
         submitForm,
         handleChange,
         handleSubmit,
         handleBlur
        }
    );
}
 
export default useValidacion;