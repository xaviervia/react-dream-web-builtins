/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Hatch from './Hatch'
import { equal } from 'assert'

describe('html / Hatch', () => {
  it('has displayName `Hatch`', () => {
    equal(Hatch.Component.displayName, 'Hatch')
  })

  it('is an `hatch` tag that gets all props', () => {
    const renderer = create(<Hatch.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'hatch')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})