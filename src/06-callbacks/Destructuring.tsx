type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string}>,
    address:{
        street: {
            title:string
        }
    }
}
let props:ManType;


beforeEach(()=> {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title:'1'}, {title: '2'}],
        address:{
            street: {
                title:'Tverskaya street'
            }
        }
    }
})
type PropsType = {
    title:string
    man: ManType
    food:Array<string>
    car:{model:string}
}

export const ManComponent: React.FC<PropsType> = (props) =>{
// export const ManComponent: React.FC<PropsType> = ({title, man:{name},...props}) =>{
    const {title, man,...restProps} = props

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {props.car.model}
        </div>
        <div>
            {man.name}
        </div>
    </div>
}