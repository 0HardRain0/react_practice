import { render, screen, RenderResult, fireEvent, act } from '@testing-library/react'
import { DelayInput } from './index'

describe('DelayInput', () => {
  let renderResult: RenderResult
  let handleChange: jest.Mock

  beforeEach(() => {

    jest.useFakeTimers()
    handleChange = jest.fn()

    renderResult = render(<DelayInput onChange={handleChange} />)
  })

  afterEach(() => {
    renderResult.unmount()
    jest.useFakeTimers()
  })

// 첫번째 테스트
//   it('should display  empty in span on initial render', () => {
//     const spanNode = screen.getByTestId('display-text') as HTMLSpanElement
//     expect(spanNode).toHaveTextContent('입력한 텍스트:')
//   })

// 두번째 테스트
//   it (`should display '입력 중...' immediately after onChange event occurs`, () => {
//     const inputText = 'Text Input Text'
//     const inputNode = screen.getByTestId('input-text') as HTMLInputElement

//     fireEvent.change(inputNode, { target: { value: inputText } })

//     const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

//     expect(spanNode).toHaveTextContent('입력 중...')
//   })

// 세번째 테스트
//   it ('should display input text 1second after onChange event occurs', async () => {
//     const inputText = 'Test Input text'
//     const inputNode = screen.getByTestId('input-text') as HTMLInputElement

//     fireEvent.change(inputNode, { target: { value: inputText } })

//     await act(() => {
//         jest.runAllTimers()
//     })

//     const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

//     expect(spanNode).toHaveTextContent(`입력한 텍스트: ${inputText}`)
//   })

// 네번째 테스트
  it ('should call onChange 1second after onChange event occurs', async() => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement

    fireEvent.change(inputNode, { target: { value: inputText } })

    await act(() => {
        jest.runAllTimers()
    })
    // 목 함수를 전달하고, 호출 여부 확인
    expect(handleChange).toHaveBeenCalled()
  })
})