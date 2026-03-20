import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: function () {
            return this.provider === "local";
        },
    },

    provider: {
        type: String,
        enum: ["local", "google", "github"],
        default: "local",
    },

    providerId: {
        type: String,
    },

    avatar: {
        type: String,
    },

    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model("User", userSchema);
export default User;