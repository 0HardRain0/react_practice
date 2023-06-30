// 테스트 파일은 .spec.tsx 또는 .test.tsx

import { render, screen, RenderResult, fireEvent, getByRole } from '@testing-library/react'
import { Input } from './index'
import { toHaveValue } from '@testing-library/jest-dom/matchers'

describe('Input', () => {
  let renderResult: RenderResult

  beforeEach(() => {
    renderResult = render(<Input id='username' label='Username' />)
  })

  afterEach(() => {
      renderResult.unmount()
  })

//   it('should empty in input on initial render', () => {
//       const inputNode = screen.getByLabelText('Username') as HTMLInputElement

//       expect(inputNode).toHaveValue('')
//   })

//  텍스트 입력 테스트
//   it('should show input text', () => {
//     const inputText = 'Test Input Text'
//     const inputNode = screen.getByLabelText('Username') as HTMLInputElement

//     fireEvent.change(inputNode, { target: { value: inputText }})

//     expect(inputNode).toHaveValue(inputText)
//   })

//  클리어 버튼의 텍스트 추가
  it('should reset when user clicks button', () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement
    fireEvent.change(inputNode, { target: { value: inputText } })

    const buttonNode = screen.getByRole('button', {
        name: 'Reset'
    }) as HTMLButtonElement
    fireEvent.click(buttonNode)

    expect(inputNode).toHaveValue('')
  })

})