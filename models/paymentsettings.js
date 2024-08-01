import mongoose from 'mongoose';


const Schema = mongoose.Schema;
const PayamentSettingsSchema = new Schema({

    settings: {

        type: Schema.Types.Mixed,
        default: {}
    }


}, { timestamps: true })


export default mongoose.models.PayamentSettings || mongoose.model("PayamentSettings", PayamentSettingsSchema)


