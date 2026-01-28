export interface Blueprint {
    nodes: Array<{
        id: string,
        data: {
            name: string
        }
    }>
}


export default Blueprint
