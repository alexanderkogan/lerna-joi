import {arraySchema} from "../src"

it('should validate correctly', () => {
    const result = arraySchema.validate([{id: 'id', name:'name'}])
    expect(result.error).toBeFalsy()
})

it('should validate missing id', () => {
    const result = arraySchema.validate([{name:'missing id'}])
    expect(result.error).toBeTruthy()
})