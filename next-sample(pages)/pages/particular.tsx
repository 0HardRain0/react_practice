// 특정 컴포넌트에 스타일 적용

import { NextPage } from 'next'
import Link, { LinkProps } from 'next/link'
import styled from 'styled-components'

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
    className?: string
    children: React.ReactNode
}

const BaseLink = (props: BaseLinkProps) => {
    const { className, children, ...rest } = props
    return (
        // Next 13버전에서는 Link에 a태그를 넣지 말아야 하며 a태그가 필요한 경우에는 legacyBehavior를 꼭 넣어줘야함.
        // This will change <Link><a id="link">Home</a></Link> to <Link id="link">Home</Link>.
        // (참조: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor)
        <Link {...rest} legacyBehavior>
            <a className={className}>{children}</a>
        </Link>
    )
}

const StyledLink = styled(BaseLink)`
  color: #1e90ff;
  font-size: 2em;
`

const Page: NextPage = () => {
    return (
        <div>
          <StyledLink href="/">Go to Index</StyledLink>
        </div>
    )
}

export default Page