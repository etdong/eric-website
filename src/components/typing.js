import { TypeAnimation } from 'react-type-animation';

export function typingFunc(text, delay, typingSpeed) {
    return (
        <TypeAnimation
        sequence={[
        ' ',
        delay,
        text
        ]}
        wrapper="div"
        cursor={true}
        style={{ display: 'inline-block' }}
        speed={typingSpeed}
        />
    )
}

export function typingFuncNoCursor(text, delay, typingSpeed) {
    return (
    <TypeAnimation
        sequence={[
        ' ',
        delay,
        text
        ]}
        wrapper="div"
        cursor={false}
        style={{ display: 'inline-block' }}
        speed={typingSpeed}
        />
    )
}
