function printName(firstName: string, formatter: (name: string) => string) {
    console.log(formatter(firstName))
}

function formatName(name: string): string {
    return `${name} 씨`
}

printName('홍길동', formatName)