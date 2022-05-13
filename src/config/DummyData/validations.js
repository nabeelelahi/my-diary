import * as yup from 'yup'

const personalInfo = yup.object({
    name: yup.string()
        .required()
        .min(3),
    address: yup.string()
        .required()
        .min(6),
    phone: yup.number()
        .required(),
    cellPhone: yup.number()
        .required(),
    height: yup.number()
        .required(),
    weight: yup.number()
        .required(),
    age: yup.number()
        .required(),
    sex: yup.string()
        .required(),
    bloodType: yup.string()
        .required(),
    allergies: yup.string()
        .required(),
})

const schemas = {
 personalInfo   
}

export default schemas