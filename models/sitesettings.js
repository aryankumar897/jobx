import mongoose from 'mongoose';


const Schema = mongoose.Schema;
const SiteSettingsSchema = new Schema({

    settings: {

        type: Schema.Types.Mixed,
        default: {}
    }


}, { timestamps: true })


export default mongoose.models.SiteSettings || mongoose.model("SiteSettings", SiteSettingsSchema)


