# ReactDream builtin components for Web (HTML + SVG)

This library contains a full set of ReactDream builtin components for Web, both SVG components and HTML ones.

This is a companion library for [ReactDream](https://github.com/xaviervia/react-dream), a Fantasy Land type for React components.

## Install

```
yarn add react-dream-web-builtins
```

And then some peerDependencies for ReactDream itself:

```
yarn add react recompose
```

## Usage

```js
import { Html, Svg } from 'react-dream-web-builtins'
import { render } from 'react-dom'

const withChildren =

const Title = Html.H1
  .contramap(() => ({
    children: 'Title'
  }))
  .name('Title')

const Square = Svg.Rect
  .contramap(() => ({
    x: 0,
    y: 0,
    width: 100,
    height: 100
  }))
  .name('Square')

const Canvas = of(Container => Content => ({ container, content }) =>
    <Container {...container}>
      <Content {...content} />
    </Container>
  )
  .ap(Svg.Svg)
  .ap(Square)
  .name('Canvas')

const App = of(North => South => Wrapper => ({ north, south, wrapper, ...props }) =>
    <Wrapper { ...props } { ...wrapper }}>
      <North { ...props } { ...north }} />
      <South { ...props } { ...south }} />
    </Wrapper>
  )
  .ap(Title)
  .ap(Canvas)
  .ap(Html.Section)
  .name('App')

App.fork(Component => {
  render(
    <Component />,
    document.getElementById('root')
  )
})
```
