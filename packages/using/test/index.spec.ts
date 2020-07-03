import {arraySchema} from "../src"
import {exportedArraySchema} from "schemas/src"

it('should validate correctly', () => {
    const result = arraySchema.validate([{id: 'id', name:'name'}])
    expect(result.error).toBeFalsy()
})

it('should validate missing id with exported schema', () => {
    const result = exportedArraySchema.validate([{name:'missing id'}])
    expect(result.error).toBeTruthy()
})

it('should validate missing id', () => {
    const result = arraySchema.validate([{name:'missing id'}])
    expect(result.error).toBeTruthy() // This fails, because no error was found.
})
