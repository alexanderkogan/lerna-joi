import {testSchema} from "../src";

it('should validate missing id', () => {
    const result = testSchema.validate({name:'missing id'})
    expect(result.error).toBeTruthy()
})

it('should validate correctly', () => {
    const result = testSchema.validate({id: 'id', name:'name'})
    expect(result.error).toBeFalsy()
})