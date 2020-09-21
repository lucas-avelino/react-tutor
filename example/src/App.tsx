import React from 'react'
import { withTutor, useTutor } from 'react-tutor'
// import 'react-tutor/dist/index.css'

const Button = (props: any) => <button {...props} />
const WithTutorButton = withTutor(Button);

const App = () => {
  const {
    registryStep,
    startTutorial,
    nextStep
  } = useTutor([{
    name: 'teste1',
    border: '4px solid red'
  }])

  React.useEffect(() => {
    startTutorial(1)
  },[])

  return <>
    <WithTutorButton
      stepStyle={'teste1'}
      registry={registryStep}
      description="teste de description"
      position={1}
      onClick={nextStep}
    >
      Teste
    </WithTutorButton>
    <WithTutorButton
      stepStyle={'teste1'}
      registry={registryStep}
      description="teste de description"
      position={2}
      onClick={nextStep}
    >
      Teste 2
    </WithTutorButton>
    <WithTutorButton
      stepStyle={'teste1'}
      registry={registryStep}
      description="teste de description"
      position={3}
      onClick={nextStep}
    >
      Teste 3
    </WithTutorButton>
    <WithTutorButton
      stepStyle={'teste1'}
      registry={registryStep}
      description="teste de description"
      position={4}
      onClick={nextStep}
    >
      Teste4
    </WithTutorButton>
  </>
}

export default App
