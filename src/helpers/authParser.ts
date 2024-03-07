export const parseToGetGithub = (markDownResponse: string): GithubUserLoginName[] => {
    const data = markDownResponse.toLocaleLowerCase()

    const regexPattern = /\((https:\/\/github\.com\/[\w-]+)\)/g;
    const regexPattern2 = /\((https:\/\/github\.com\/[\w-]+\/\))/g;

    const matches = data.match(regexPattern)
    const matches2 = data.match(regexPattern2) ?? []
    matches.push(...matches2)
    console.log(matches.length)

    const finalData: GithubUserLoginName[] = []
    for (let i = 0; i < matches.length; i++) {
        let name = matches[i].split('/').reverse()[0].split(')')[0]
        finalData.push(name)
    }
    // console.log(finalData)
    console.log(finalData.length)
    return finalData
}

export type GithubUserLoginName = string