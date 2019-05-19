export function getCurrentAuthority(){
    return ["admin"]
    // return ["user"]
}

export function check(authority){
    const current = getCurrentAuthority()
    const isCheck = current.some(item => authority.includes(item))
    // console.log(authority,isCheck)
    return isCheck
}

export function isLogin() {
    const current = getCurrentAuthority()

    return current && current[0] !== 'guest'
}
