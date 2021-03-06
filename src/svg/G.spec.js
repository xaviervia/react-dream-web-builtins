/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import G from './G'
import { equal } from 'assert'

describe('html / G', () => {
  it('has displayName `G`', () => {
    equal(G.Component.displayName, 'G')
  })

  it('is an `g` tag that gets all props', () => {
    const renderer = create(<G.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'g')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})