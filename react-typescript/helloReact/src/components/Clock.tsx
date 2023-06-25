import { useState, useEffect, useLayoutEffect } from 'react'

const UPDATE_CYCLE = 1000

const KEY_LOCALE = 'KEY_LOCALE'

enum Locale {
    US = 'en-US',
    KR = 'ko-KR',
}

const getLocaleFromString = (text: string) => {
    switch (text) {
        case Locale.US:
            return Locale.US
        case Locale.KR:
            return Locale.KR
        default:
            return Locale.US
    }
}

const Clock = () => {
    const [timestamp, setTimestamp] = useState(new Date())
    const [locale, setLocale] = useState(Locale.US)

    useEffect(() => {
        const timer = setInterval(() => {
            setTimestamp(new Date())
        }, UPDATE_CYCLE)

        return () => {
            clearInterval(timer)
        }
    }, [])

    // useEffect 훅

    // useEffect(() => {
    //     const savedLocale = localStorage.getItem(KEY_LOCALE)
    //     if (savedLocale !== null) {
    //         setLocale(getLocaleFromString(savedLocale))
    //     }
    // }, [])

    // useLayoutEffect 훅
    // 화면에 실제로 그리기 전에 실행됨
    // 동기적 실행, 무거운 처리를 실행할 때 화면 그리기가 지연됨
    useLayoutEffect(() => {
        const savedLocale = localStorage.getItem(KEY_LOCALE)
        if (savedLocale !== null) {
            setLocale(getLocaleFromString(savedLocale))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(KEY_LOCALE, locale)
    }, [locale])

    return (
        <div>
            <p>
                <span id="current-time-label">현재 시각</span>
                <span>:{timestamp.toLocaleString(locale)}</span>
                <select
                    value={locale}
                    onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
                        <option value="en-US">en-US</option>
                        <option value="ko-KR">ko-KR</option>
                </select>
            </p>
        </div>
    )
} 

export default Clock