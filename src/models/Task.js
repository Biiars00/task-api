import mongoose from "mongoose";

// Atribuição de chaves e valores ao banco de dados
const taskSchema = new mongoose.Schema({
    id: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed_at: { type: Boolean },
    created_at: { type: String },
    updated_at: { type: String },
});

const tasks = mongoose.model("tasks", taskSchema);

export default tasks;



