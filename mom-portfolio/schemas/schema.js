// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"

// We import object and document schemas
import personal from "./Personal"
import experiences from "./experiences"
import Formations from "./Fomations"
import social from "./social"
import Projects from "./Projects"

export default createSchema({
  // We name our schema
  name: "default",

  types: schemaTypes.concat([
    personal,
    experiences,
    Formations,
    Projects,
    social,
  ]),
})
