import * as Joi from '@hapi/joi';

export type Id = string;

export interface Test {
    id: Id;
    name: string;
}

export const idSchema = Joi.string().required();
export const testSchema = Joi.object({
    id: idSchema,
    name: Joi.string().required()
});
export const exportedArraySchema = Joi.array().items(testSchema)