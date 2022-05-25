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

const insurance = yup.object({
    medicare: yup.string()
        .required(),
    medicaid: yup.string()
        .required(),
    privateInsurane: yup.string()
        .required(),
    policy: yup.string()
        .required(),
    group: yup.string()
        .required(),
    otherPayerSource: yup.string()
        .required(),
    phone: yup.number()
        .required(),
    fax: yup.string()
        .required(),
})

const physician = yup.object({
    name: yup.string()
        .required()
        .min(3),
    address: yup.string()
        .required()
        .min(6),
    city: yup.string()
        .required(),
    state: yup.string()
        .required(),
    phone: yup.number()
        .required(),
    typeOfCare: yup.string()
        .required(),
})

const diagnosis = yup.object({
    illness: yup.number()
        .required(),
    date: yup.string()
        .required(),
})

const surgeries = yup.object({
    procedure: yup.string()
        .required(),
    date: yup.string()
        .required(),
    hospital: yup.string()
        .required(),
})

const vaccinations = yup.object({
    name: yup.string()
        .required(),
    date: yup.string()
        .required(),
    shots: yup.string()
        .required(),
})

const emergencyContact = yup.object({
    name: yup.string()
        .required()
        .min(3),
    address: yup.string()
        .required()
        .min(6),
    phone: yup.number()
        .required(),
    relation: yup.string()
        .required(),
})

const doctorVisits = yup.object({
    date: yup.string()
        .required(),
    time: yup.string()
        .required(),
    physcianName: yup.string()
        .required(),
    physcianType: yup.string()
        .required(),
    reason: yup.string()
        .required(),
    nextAppointment: yup.string()
        .required(),
})

const emergencyRoom = yup.object({
    date: yup.string()
        .required(),
    facilityName: yup.string()
        .required(),
    physcianName: yup.string()
        .required(),
    reason: yup.string()
        .required(),
    hospitalAdmission: yup.string()
        .required(),
})

const homeCare = yup.object({
    name: yup.string()
        .required()
        .min(3),
    address: yup.string()
        .required()
        .min(6),
    phone: yup.number()
        .required(),
    service: yup.string()
        .required(),
})

const medicalTest = yup.object({
    procedure: yup.string()
        .required(),
    date: yup.string()
        .required(),
    reason: yup.string()
        .required(),
})

const medications = yup.object({
    name: yup.string()
        .required(),
    dose: yup.string()
        .required(),
    frequency: yup.string()
        .required(),
    startDate: yup.string()
        .required(),
    endDate: yup.string()
        .required(),
    reason: yup.string()
        .required(),
})

const equipment = {
    walker: yup.string()
        .required(),
    care: yup.string()
        .required(),
    wheelChair: yup.string()
        .required(),
    prosthetics: yup.string()
        .required(),
    hospitalBed: yup.string()
        .required(),
    crutches: yup.string()
        .required(),
    brace: yup.string()
        .required(),
    oxygen: yup.string()
        .required(),
    ventilator: yup.string()
        .required(),
    bipap: yup.string()
        .required(),
    cpap: yup.string()
        .required(),
    nebulizer: yup.string()
        .required(),
    glucoMeter: yup.string()
        .required(),
    anticoagulentMechine: yup.string()
        .required(),
    others: yup.string()
        .required(),
}

const laboratoryTest = {
    date: yup.string()
        .required(),
    time: yup.string()
        .required(),
    procedure: yup.string()
        .required(),
}

const specialCareMedication = {
    date: yup.string()
        .required(),
    procedure: yup.string()
        .required(),
}

const vitals = {
    date: yup.string()
        .required(),
    time: yup.string()
        .required(),
    bp: yup.string()
        .required(),
    bs: yup.string()
        .required(),
    resp: yup.string()
        .required(),
    hr: yup.number()
        .required(),
    temp: yup.number()
        .required(),
}

const schemas = {
    personalInfo,
    insurance,
    physician,
    diagnosis,
    surgeries,
    vaccinations,
    emergencyContact,
    doctorVisits,
    emergencyRoom,
    homeCare,
    medicalTest,
    medications,
    equipment,
    laboratoryTest,
    specialCareMedication,
    vitals
}

export default schemas