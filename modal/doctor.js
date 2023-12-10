import mongoose from "mongoose";

const {Schema} = mongoose;

const doctorSchema = new Schema({
    name: {type: 'string', required: true},
    speciality: {type: 'string', required: true},
    hospital: {type: 'string', required: true},
    location: {type: 'string', required: true},
    experience: {type: 'string', required: true},
    schedule: {type: 'string', required: true}
})

export const doctorsModel = mongoose.models?.doctor || mongoose.model("doctor", doctorSchema);