import { Button } from '@components/Button'

function App() {
  return (
    <>
      <Button>default</Button>
      <Button btnType="primary">Hello World</Button>
      <Button btnType="link" disabled={true}>Hello World</Button>
      <Button btnType="danger">Hello World</Button>
      <Button disabled={true}>Hello World</Button>
    </>
  )
}

export default App
