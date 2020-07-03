import * as Joi from '@hapi/joi'
import {testSchema} from "schemas/src"

export const arraySchema = Joi.array().items(testSchema)