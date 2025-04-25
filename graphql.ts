
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

/* eslint-disable */
/* tslint:disable */

export class FormDto {
    name?: Nullable<string>;
    email?: Nullable<string>;
    gender?: Nullable<string>;
    interests?: Nullable<string[]>;
    country?: Nullable<string>;
    birthDate?: Nullable<string>;
    age?: Nullable<number>;
}

export class RazorPayDto {
    amount?: Nullable<number>;
}

export class Form {
    id?: Nullable<string>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    gender?: Nullable<string>;
    interests?: Nullable<string[]>;
    country?: Nullable<string>;
    birthDate?: Nullable<string>;
    age?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
}

export class Razorpay {
    amount?: Nullable<number>;
    orderId?: Nullable<string>;
}

export abstract class IQuery {
    getForm: Form[];
    deleteForm?: Form;
}

export abstract class IMutation {
    createForm?: Nullable<Form>;
    updateForm?: Nullable<Form>;
    createPaymentOrder?: Razorpay;
}

export type DateTime = any;
type Nullable<T> = T | null;
