import dish from './dish'
import featured from './featured'
import category from './category'
import restaurant from './restaurant'
import { createSchema } from 'sanity'

export const schemaTypes = [restaurant, category, dish, featured]

export default createSchema({
    name: "default",
    types: schemaTypes.concat([restaurant, category, dish, featured]),
})
