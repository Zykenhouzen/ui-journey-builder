
export interface ExampleGlobalData {
    globalData: Array<ExampleProperty>
}


export interface ExampleProperty {
        name: string,
        id: string
        fields: Array<{
            label: string,
            id: string
        }>

}


export default ExampleGlobalData
