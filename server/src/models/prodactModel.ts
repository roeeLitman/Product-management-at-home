import { Model, model, Schema, Types } from "mongoose";

export interface Product {
    name: string;
    price: number;
    isInStock: boolean;
    amount: number;
    list: Types.ObjectId;
    isWeight: boolean;
}

const productSchema = new Schema<Product>({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    isInStock: {
        type: Boolean,
        required: true,
        default: false,
    },
    amount: {
        type: Number,
        required: true,
        default: 0,
    },
    list: {
        type: Schema.Types.ObjectId,
        ref: "List",
    },
    isWeight: {
        type: Boolean,
        required: true,
        default: false,
    },
});

const ProductModel: Model<Product> = model<Product>("Product", productSchema);

export default ProductModel
